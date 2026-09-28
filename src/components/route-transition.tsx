"use client";

import { motion } from "motion/react";
import { usePathname, useRouter } from "next/navigation";
import { type MouseEvent as ReactMouseEvent, type ReactNode, useCallback, useEffect, useRef, useState } from "react";
import observatoryArtwork from "@/universe_of_signals_observatory_loader_layered.svg";

type TransitionPhase = "idle" | "covering" | "holding" | "revealing";
type SignalStatus = "SEARCH" | "ACQUIRE" | "LOCK" | "TRANSMIT";

const destinations = ["home", "work", "notes", "reading", "places", "about"] as const;
type DestinationKey = (typeof destinations)[number];

const destinationLabels: Record<DestinationKey, string> = {
  home: "00 / ORIGIN",
  work: "01 / WORK",
  notes: "02 / NOTES",
  reading: "03 / READING",
  places: "04 / PLACES",
  about: "05 / ABOUT",
};

function routeKey(pathname: string): DestinationKey {
  const segment = pathname.split("/").filter(Boolean)[0];
  return destinations.includes(segment as DestinationKey) ? segment as DestinationKey : "home";
}

function normalizePath(pathname: string) {
  return pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
}

function SignalObservatory({ status }: { status: SignalStatus }) {
  const isAcquire = status === "ACQUIRE";
  const isLock = status === "LOCK";
  const isTransmit = status === "TRANSMIT";
  const layer = (id: string) => `${observatoryArtwork.src}#${id}`;

  return <div className="calibration-aperture" aria-hidden="true">
    <svg viewBox="420 270 832 390">
      <motion.g
        className="calibration-sketch"
        initial={false}
        animate={isTransmit
          ? { scaleX: 1.32, scaleY: .008, opacity: .9 }
          : isLock
            ? { scale: .96, opacity: .98 }
            : { scale: 1, opacity: isAcquire ? .88 : .62 }}
        transition={{ duration: isTransmit ? .14 : .2, ease: [.16, 1, .3, 1] }}
      >
        <use href={layer("layer-glow")} />
        <motion.g initial={false} animate={{ opacity: isLock ? 1 : .72 }} transition={{ duration: .3 }}>
          <use href={layer("layer-orbits")} />
        </motion.g>
        <use href={layer("layer-observatory-base")} />
        <use href={layer("layer-dome")} />
        <use href={layer("telescope-mount")} />
        <motion.g
          className="calibration-layered-scope"
          initial={false}
          animate={{ rotate: isAcquire || isLock || isTransmit ? 0 : 34 }}
          transition={{ duration: isAcquire ? .46 : .22, ease: [.22, 1, .36, 1] }}
        >
          <use href={layer("telescope-tube")} />
        </motion.g>
        <use href={layer("layer-antenna")} />
        <use href={layer("layer-markers")} />
      </motion.g>
      <motion.circle
        className="calibration-point"
        cx="581"
        cy="553"
        r="4.1"
        initial={false}
        animate={isAcquire
          ? {
              x: [0, 22, 72, 145, 232, 312, 365],
              y: [0, -72, -137, -190, -225, -238, -238],
              opacity: 1,
              r: 4.5,
            }
          : {
              x: isLock || isTransmit ? 365 : 0,
              y: isLock || isTransmit ? -238 : 0,
              opacity: isTransmit ? 0 : 1,
              r: isLock ? 5.2 : 4.1,
            }}
        transition={{ duration: isAcquire ? .42 : .22, ease: isAcquire ? [.4, 0, .2, 1] : [.22, 1, .36, 1] }}
      />
    </svg>
  </div>;
}

export function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [phase, setPhase] = useState<TransitionPhase>("idle");
  const [status, setStatus] = useState<SignalStatus>("SEARCH");
  const [destination, setDestination] = useState<DestinationKey>(() => routeKey(pathname));
  const phaseRef = useRef<TransitionPhase>("idle");
  const pendingPath = useRef<string | null>(null);
  const startedAt = useRef(0);
  const timers = useRef<number[]>([]);

  const changePhase = useCallback((next: TransitionPhase) => {
    phaseRef.current = next;
    setPhase(next);
  }, []);

  const clearTimers = useCallback(() => {
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
  }, []);

  const schedule = useCallback((callback: () => void, delay: number) => {
    timers.current.push(window.setTimeout(callback, delay));
  }, []);

  const beginSignalSequence = useCallback((nextDestination: DestinationKey) => {
    clearTimers();
    startedAt.current = performance.now();
    setDestination(nextDestination);
    setStatus("SEARCH");
    changePhase("covering");
    schedule(() => setStatus("ACQUIRE"), 220);
    schedule(() => setStatus("LOCK"), 650);
  }, [changePhase, clearTimers, schedule]);

  const finishSignalSequence = useCallback((minimumElapsed = 1180, releaseDuration = 300) => {
    const remaining = Math.max(0, minimumElapsed - (performance.now() - startedAt.current));
    schedule(() => {
      setStatus("TRANSMIT");
      changePhase("revealing");
      schedule(() => changePhase("idle"), releaseDuration);
    }, remaining);
  }, [changePhase, schedule]);

  useEffect(() => {
    if (!pendingPath.current || normalizePath(pendingPath.current) !== normalizePath(pathname)) return;
    pendingPath.current = null;
    finishSignalSequence();
  }, [finishSignalSequence, pathname]);

  useEffect(() => {
    const handleHistoryNavigation = () => {
      if (phaseRef.current !== "idle" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      beginSignalSequence(routeKey(window.location.pathname));
      finishSignalSequence(1000);
    };

    window.addEventListener("popstate", handleHistoryNavigation);
    return () => {
      window.removeEventListener("popstate", handleHistoryNavigation);
      clearTimers();
    };
  }, [beginSignalSequence, clearTimers, finishSignalSequence]);

  const handleClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const link = (event.target as HTMLElement).closest<HTMLAnchorElement>("a[href]");
    if (!link || link.target === "_blank" || link.hasAttribute("download")) return;

    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin || url.protocol !== window.location.protocol) return;
    if (normalizePath(url.pathname) === normalizePath(window.location.pathname)) return;
    if (phaseRef.current !== "idle") {
      event.preventDefault();
      return;
    }

    event.preventDefault();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      router.push(`${url.pathname}${url.search}${url.hash}`);
      return;
    }

    beginSignalSequence(routeKey(url.pathname));
    pendingPath.current = url.pathname;
    schedule(() => {
      changePhase("holding");
      router.push(`${url.pathname}${url.search}${url.hash}`);
    }, 170);
    schedule(() => {
      if (!pendingPath.current) return;
      pendingPath.current = null;
      finishSignalSequence(0);
    }, 4000);
  };

  return <div className="route-transition-root" onClickCapture={handleClick}>
    <div className="route-live-page" aria-busy={phase !== "idle"}>{children}</div>
    <div
      className="route-transition"
      data-phase={phase}
      data-status={status.toLowerCase()}
      data-destination={destination}
      aria-hidden="true"
    >
      <span className="calibration-curtain calibration-curtain-top" />
      <span className="calibration-curtain calibration-curtain-bottom" />
      <div className="calibration-field" />
      <div className="calibration-focus">
        <SignalObservatory status={status} />
        <p className="calibration-label mono-label">{destinationLabels[destination]}</p>
      </div>
      <span className="calibration-sweep" />
    </div>
  </div>;
}
