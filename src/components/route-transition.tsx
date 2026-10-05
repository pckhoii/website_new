"use client";

import { usePathname, useRouter } from "next/navigation";
import { type MouseEvent as ReactMouseEvent, type ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { LocalizedText } from "./localized-text";

import styles from "./route-transition.module.css";

type Phase = "idle" | "covering" | "holding" | "revealing";
type Destination = "home" | "work" | "notes" | "reading" | "places" | "about";

const journeys = {
  home: { label: { en: "BACK HOME", vi: "VỀ NHÀ THÔI" } },
  work: { label: { en: "A LITTLE POSSIBILITY", vi: "MỘT CHÚT KHẢ NĂNG" } },
  notes: { label: { en: "A THOUGHT IN ORBIT", vi: "MỘT Ý NGHĨ TRÊN QUỸ ĐẠO" } },
  reading: { label: { en: "ONE MORE CHAPTER", vi: "THÊM MỘT CHƯƠNG NỮA" } },
  places: { label: { en: "A LITTLE FURTHER", vi: "ĐI XA THÊM MỘT CHÚT" } },
  about: { label: { en: "HELLO, I'M KHOI", vi: "CHÀO BẠN, MÌNH LÀ KHÔI" } },
} as const;
const MINIMUM_JOURNEY_MS = 800;
const REVEAL_MS = 220;
function routeKey(pathname: string): Destination {
  const key = pathname.split("/").filter(Boolean)[0] ?? "home";
  return Object.hasOwn(journeys, key) ? key as Destination : "home";
}
function normalizePath(pathname: string) { return pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname; }

function OrbitJourney() {
  return <svg className={styles.sketch} viewBox="0 0 200 180" fill="none" aria-hidden="true">
    <circle cx="100" cy="86" r="62" stroke="currentColor" strokeWidth=".7" strokeDasharray="1 6" opacity=".4" />
    <path d="M100 17v7M100 148v7M31 86h7M162 86h7" stroke="currentColor" strokeWidth=".8" opacity=".45" />
    <g className={styles.planet} stroke="currentColor" strokeWidth="1">
      <circle cx="100" cy="86" r="24" />
      <path d="M80 74c-26 8-31 16-24 20 10 6 39 3 65-5 25-8 34-16 26-20-4-2-12-2-21-1" />
      <path d="M93 80v2M103 78v2M96 89q4 3 8-1" strokeLinecap="round" opacity=".75" />
    </g>
    <g className={styles.traveller}>
      <path d="M0-7 2-2 7 0 2 2 0 7-2 2-7 0-2-2Z" fill="#07141d" stroke="#ecc09c" strokeWidth="1" strokeLinejoin="round" />
    </g>
  </svg>;
}
export function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("idle");

  const [destination, setDestination] = useState<Destination>(() => routeKey(pathname));
  const [slow, setSlow] = useState(false);
  const [journeyId, setJourneyId] = useState(0);
  const phaseRef = useRef<Phase>("idle");
  const pending = useRef<{ pathname: string; href: string; pushed: boolean } | null>(null);
  const startedAt = useRef(0);
  const timers = useRef<number[]>([]);
  const busy = phase !== "idle";

  const changePhase = useCallback((next: Phase) => { phaseRef.current = next; setPhase(next); }, []);
  const clearTimers = useCallback(() => { timers.current.forEach(window.clearTimeout); timers.current = []; }, []);
  const schedule = useCallback((callback: () => void, delay: number) => { timers.current.push(window.setTimeout(callback, delay)); }, []);
  const beginJourney = useCallback((nextDestination: Destination) => {
    clearTimers();
    startedAt.current = performance.now();
    setDestination(nextDestination);
    setJourneyId(current => current + 1);
    setSlow(false);
    changePhase("covering");

    schedule(() => setSlow(true), 3000);
  }, [changePhase, clearTimers, schedule]);
  const finishJourney = useCallback(() => {
    clearTimers(); setSlow(false);
    const elapsed = performance.now() - startedAt.current;

    schedule(() => { changePhase("revealing"); schedule(() => changePhase("idle"), REVEAL_MS); }, Math.max(180, MINIMUM_JOURNEY_MS - elapsed));
  }, [changePhase, clearTimers, schedule]);
  const skipJourney = useCallback(() => {
    clearTimers();
    const next = pending.current;
    pending.current = null;
    if (next && !next.pushed) router.push(next.href);
    changePhase("idle");
  }, [changePhase, clearTimers, router]);

  useEffect(() => {
    if (!pending.current || normalizePath(pending.current.pathname) !== normalizePath(pathname)) return;
    pending.current = null;
    finishJourney();
  }, [finishJourney, pathname]);
  useEffect(() => {
    const handleHistory = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { skipJourney(); return; }
      pending.current = null;
      beginJourney(routeKey(window.location.pathname));
      finishJourney();
    };
    const handleEscape = (event: KeyboardEvent) => { if (event.key === "Escape" && phaseRef.current !== "idle") skipJourney(); };
    window.addEventListener("popstate", handleHistory);
    window.addEventListener("keydown", handleEscape);
    return () => { window.removeEventListener("popstate", handleHistory); window.removeEventListener("keydown", handleEscape); clearTimers(); };
  }, [beginJourney, clearTimers, finishJourney, skipJourney]);
  useEffect(() => {
    if (!busy) return;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = overflow; };
  }, [busy]);

  function handleClick(event: ReactMouseEvent<HTMLDivElement>) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = event.target;
    const link = target instanceof Element ? target.closest<HTMLAnchorElement>("a[href]") : null;
    if (!link || (link.target && link.target !== "_self") || link.hasAttribute("download")) return;
    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin || normalizePath(url.pathname) === normalizePath(window.location.pathname)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    event.preventDefault();
    if (phaseRef.current !== "idle") return;
    beginJourney(routeKey(url.pathname));
    pending.current = { pathname: url.pathname, href: `${url.pathname}${url.search}${url.hash}`, pushed: false };
    schedule(() => { changePhase("holding"); if (pending.current) { pending.current.pushed = true; router.push(pending.current.href); } }, 160);
    // Release the visual even if the next route fails to commit; never trap navigation.
    schedule(skipJourney, 7000);
  }

  const journey = journeys[destination];
  return <div className="route-transition-root" onClickCapture={handleClick}>
    <div className="route-live-page" aria-busy={busy} inert={busy}>{children}</div>
    <div className={styles.overlay} data-phase={phase} data-destination={destination} aria-hidden={!busy}>
      {busy && <>
        <div className={styles.story} key={journeyId}>
          <OrbitJourney />
          <p className={styles.caption}><LocalizedText text={journey.label} /></p>
          {slow && <p className={styles.waiting}><LocalizedText text={{ en: "A little longer, we're almost there…", vi: "Chờ một chút, sắp đến rồi…" }} /></p>}
        </div>
        <button className={styles.skip} type="button" onClick={skipJourney}><LocalizedText text={{ en: "Skip animation", vi: "Bỏ qua hiệu ứng" }} /><span aria-hidden="true">↗</span></button>
      </>}
    </div>
    <span className={styles.screenReaderStatus} role="status" aria-live="polite">{busy ? <LocalizedText text={{ en: `Opening ${journey.label.en.toLowerCase()}`, vi: `Đang mở ${journey.label.vi.toLowerCase()}` }} /> : null}</span>
  </div>;
}
