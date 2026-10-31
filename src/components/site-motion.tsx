"use client";

import { useEffect, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { Pause, Play } from "lucide-react";
import { LocalizedText } from "./localized-text";

const preferenceKey = "personal-universe-motion";
const preferenceEvent = "universe-motion-change";
const subscribe = (callback: () => void) => {
  window.addEventListener(preferenceEvent, callback);
  return () => window.removeEventListener(preferenceEvent, callback);
};
const getSnapshot = () => document.documentElement.dataset.motion !== "paused";

export function MotionToggle() {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, () => true);
  return <button className="motion-toggle" type="button" aria-pressed={!enabled} onClick={() => {
    document.documentElement.dataset.motion = enabled ? "paused" : "on";
    try { localStorage.setItem(preferenceKey, enabled ? "paused" : "on"); } catch {}
    window.dispatchEvent(new Event(preferenceEvent));
  }}>{enabled ? <Pause size={12} aria-hidden="true" /> : <Play size={12} aria-hidden="true" />}<span className="motion-toggle-label"><LocalizedText text={enabled ? { en: "Pause motion", vi: "Dừng chuyển động" } : { en: "Play motion", vi: "Bật chuyển động" }} /></span></button>;
}

/** One observer per route; content stays readable if JavaScript is unavailable. */
export function SiteMotion() {
  const pathname = usePathname();
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const livePage = document.querySelector(".route-live-page");
    const root = livePage;
    if (!root) return;
    try { document.documentElement.dataset.motion = localStorage.getItem(preferenceKey) === "paused" ? "paused" : "on"; } catch {}
    window.dispatchEvent(new Event(preferenceEvent));
    const allowed = () => !reduced.matches && getSnapshot();
    const animations = new Set<Animation>();
    const waiting = new Set<HTMLElement>();
    const finishAnimations = () => {
      if (allowed()) return;
      animations.forEach(animation => animation.cancel());
      animations.clear();
    };
    const reveal = (element: HTMLElement) => {
      if (element.dataset.revealed || !allowed()) return;
      if (livePage?.getAttribute("aria-busy") === "true") { waiting.add(element); return; }
      element.dataset.revealed = "true";
      const animation = element.animate([
        { opacity: 0, translate: "0 22px" },
        { opacity: 1, translate: "0 0" },
      ], { duration: 700, delay: Math.min(Number(element.dataset.delay) || 0, 240), easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards" });
      animations.add(animation);
      animation.onfinish = () => animations.delete(animation);
    };
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      const element = entry.target as HTMLElement;
      if (element.hasAttribute("data-ambient")) element.dataset.inView = String(entry.isIntersecting);
      if (entry.isIntersecting && element.hasAttribute("data-reveal")) {
        reveal(element);
        if (!element.hasAttribute("data-ambient")) observer.unobserve(element);
      }
    }), { threshold: .08 });
    const observed = new WeakSet<HTMLElement>();
    const scan = () => root.querySelectorAll<HTMLElement>("[data-reveal], [data-ambient]").forEach(element => {
      if (observed.has(element)) return;
      observed.add(element);
      observer.observe(element);
    });
    scan();
    const busyObserver = new MutationObserver(() => {
      scan();
      if (livePage?.getAttribute("aria-busy") !== "true") {
        waiting.forEach(element => reveal(element));
        waiting.clear();
      }
    });
    busyObserver.observe(root, { attributes: true, attributeFilter: ["aria-busy"], childList: true, subtree: true });

    let frame = 0;
    let activeCard: HTMLElement | null = null;
    let bounds: DOMRect | null = null;
    const resetCard = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      if (activeCard) {
        activeCard.style.removeProperty("--tilt-x");
        activeCard.style.removeProperty("--tilt-y");
        activeCard.removeAttribute("data-hovering");
      }
      activeCard = null; bounds = null;
    };
    const move = (event: Event) => {
      if (!allowed() || !finePointer.matches) return;
      const pointer = event as PointerEvent;
      const card = pointer.target instanceof Element ? pointer.target.closest<HTMLElement>("[data-tilt]") : null;
      if (!card) { resetCard(); return; }
      if (card !== activeCard) {
        resetCard(); activeCard = card; bounds = card.getBoundingClientRect();
      }
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!bounds) return;
        const x = Math.max(0, Math.min(1, (pointer.clientX - bounds.left) / bounds.width));
        const y = Math.max(0, Math.min(1, (pointer.clientY - bounds.top) / bounds.height));
        card.style.setProperty("--pointer-x", `${x * 100}%`);
        card.style.setProperty("--pointer-y", `${y * 100}%`);
        card.style.setProperty("--tilt-x", `${(0.5 - y) * 5}deg`);
        card.style.setProperty("--tilt-y", `${(x - 0.5) * 5}deg`);
        card.dataset.hovering = "true";
      });
    };
    const visibility = () => { document.documentElement.dataset.tabHidden = String(document.hidden); };
    visibility();
    root.addEventListener("pointermove", move, { passive: true });
    root.addEventListener("pointerleave", resetCard);
    window.addEventListener("scroll", resetCard, { passive: true });
    window.addEventListener("resize", resetCard);
    document.addEventListener("visibilitychange", visibility);
    reduced.addEventListener("change", finishAnimations);
    window.addEventListener(preferenceEvent, finishAnimations);
    return () => {
      observer.disconnect(); busyObserver.disconnect(); resetCard();
      animations.forEach(animation => animation.cancel());
      root.removeEventListener("pointermove", move);
      root.removeEventListener("pointerleave", resetCard);
      window.removeEventListener("scroll", resetCard);
      window.removeEventListener("resize", resetCard);
      document.removeEventListener("visibilitychange", visibility);
      reduced.removeEventListener("change", finishAnimations);
      window.removeEventListener(preferenceEvent, finishAnimations);
    };
  }, [pathname]);
  return null;
}
