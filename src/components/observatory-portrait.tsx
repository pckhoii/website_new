"use client";

import { useState } from "react";
import artwork from "@/universe_of_signals_observatory_loader_layered.svg";
import { LocalizedText } from "./localized-text";
import styles from "./observatory-portrait.module.css";

export function ObservatoryPortrait() {
  const [observation, setObservation] = useState(0);
  const layer = (id: string) => `${artwork.src}#${id}`;

  return <figure className={styles.plate}>
    <div className={styles.heading}><span>UNIVERSE OF SIGNALS</span><span><LocalizedText text={{en: "The observatory", vi: "Đài quan sát"}} /></span></div>
    <svg key={observation} className={styles.scene} viewBox="590 150 520 490" role="img" aria-labelledby="observatory-portrait-title">
      <title id="observatory-portrait-title">Đài thiên văn cá nhân — kính hướng về một ngôi sao / A personal observatory tracking a star</title>
      <defs>
        <radialGradient id="portrait-atmosphere"><stop stopColor="#8fa8d4" stopOpacity=".08"/><stop offset="1" stopColor="#8fa8d4" stopOpacity="0"/></radialGradient>
        <linearGradient id="portrait-ground" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#8fa8d4" stopOpacity=".08"/><stop offset="1" stopColor="#8fa8d4" stopOpacity="0"/></linearGradient>
        <pattern id="portrait-engraving" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(28)"><path d="M0 0 V5" stroke="#c7a064" strokeWidth=".45" opacity=".18"/></pattern>
        <clipPath id="portrait-dome-clip"><path d="M713 492C721 420 767 372 806 364V493Z M867 364C906 372 952 420 960 492L867 493Z"/></clipPath>
      </defs>
      <ellipse cx="850" cy="430" rx="245" ry="195" fill="url(#portrait-atmosphere)"/>
      <g className={styles.sky}>
        <path d="M613 344 Q798 133 1074 215" fill="none" stroke="currentColor" strokeWidth=".55"/>
        <path d="M634 295 l-6 -6 M702 246 l-4 -7 M780 210 l-2 -8 M867 190 v-8 M953 190 l2 -8 M1040 206 l3 -7" stroke="currentColor" strokeWidth=".7"/>
        <circle cx="682" cy="211" r="1.1"/><circle cx="751" cy="289" r="1.5"/><circle cx="894" cy="154" r=".8"/><circle cx="1058" cy="360" r="1"/><circle cx="640" cy="418" r=".8"/>
      </g>
      <g className={styles.sighting}><path d="M886 383 L1028 256" pathLength="1"/><path d="M893 391 L1036 264" pathLength="1"/></g>
      <g className={styles.target} transform="translate(1032 260)"><path d="M0 -9 V9 M-9 0 H9"/><circle r="2.5"/></g>
      <path d="M610 584 Q820 570 1090 583 L1090 636 H610Z" fill="url(#portrait-ground)"/>
      <path d="M608 586 Q824 576 1090 584 M666 599 Q863 593 1034 599 M746 613 H987" className={styles.ground}/>
      <use href={layer("layer-observatory-base")} />
      <use href={layer("layer-dome")} />
      <rect x="710" y="360" width="255" height="135" fill="url(#portrait-engraving)" clipPath="url(#portrait-dome-clip)"/>
      <use href={layer("telescope-mount")} />
      <g className={styles.telescope} data-observatory-telescope><use href={layer("telescope-tube")} /></g>
      <use href={layer("layer-antenna")} />
      <g className={styles.measure}><path d="M713 619 H960 M713 615 V623 M960 615 V623"/><path d="M690 491 H678 V580 H690"/></g>
    </svg>
    <figcaption className={styles.caption}>
      <p><LocalizedText text={{en: "A quiet place to look closer.", vi: "Một góc yên tĩnh để nhìn kỹ hơn."}} /></p>
      <button type="button" onClick={() => setObservation(value => value + 1)} className={styles.replay}><span aria-hidden="true">↻</span> <LocalizedText text={{en: "Observe again", vi: "Quan sát lại"}} /></button>
    </figcaption>
  </figure>;
}
