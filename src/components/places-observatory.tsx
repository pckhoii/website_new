"use client";

import { MapPin, MoveDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { LocalizedText } from "@/components/localized-text";
import type { Localized } from "@/lib/content";

type PlaceObservation = {
  city: string;
  coordinates: string;
  year: string;
  note: Localized;
  asset: { src: string; alt: Localized };
};

function ScopeGeometry({ targetIndex }: { targetIndex: number }) {
  return <svg className="scope-geometry" viewBox="0 0 600 600" aria-hidden="true">
    <defs>
      <path id="scope-label-path" d="M92 300a208 208 0 1 1 416 0" />
    </defs>
    <circle className="scope-ring ring-outer" cx="300" cy="300" r="248" />
    <circle className="scope-ring ring-middle" cx="300" cy="300" r="212" />
    <circle className="scope-ring ring-inner" cx="300" cy="300" r="166" />
    <path className="scope-altitude" d="M100 300c54-148 346-148 400 0M126 366c86 79 262 79 348 0" />
    <path className="scope-crosshair" d="M300 38v142M300 420v142M38 300h142M420 300h142" />
    <path className="scope-horizon" d="M82 357c108-34 328-34 436 0" />
    <path className="scope-constellation" d="M153 208 218 169 286 219 359 145 441 202" />
    <g className="scope-stars"><circle cx="153" cy="208" r="3" /><circle cx="218" cy="169" r="2" /><circle cx="286" cy="219" r="3" /><circle cx="359" cy="145" r="2" /><circle cx="441" cy="202" r="3" /></g>
    <g className={`scope-target scope-target-${targetIndex + 1}`}><circle r="13" /><circle r="3" /><path d="M-21 0h11M10 0h11M0-21v11M0 10v11" /></g>
    <text className="scope-north" x="294" y="24">N</text>
    <text className="scope-east" x="574" y="304">E</text>
    <text className="scope-south" x="294" y="590">S</text>
    <text className="scope-west" x="17" y="304">W</text>
    <text className="scope-arc-label"><textPath href="#scope-label-path" startOffset="26%">PERSONAL OBSERVATORY · OPTICAL FIELD / 04</textPath></text>
  </svg>;
}

export function PlacesObservatory({ observations }: { observations: readonly PlaceObservation[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = observations[activeIndex];

  return <>
    <section className="observatory-stage" aria-labelledby="observatory-title">
      <div className="observatory-stars" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div>

      <header className="observatory-intro">
        <p className="mono-label"><span className="observatory-live" /> OBSERVATORY / PLACES / 04</p>
        <h1 id="observatory-title"><span className="lang-en">Places become<br />coordinates.<br /><em>Memories become signals.</em></span><span className="lang-vi" lang="vi">Nơi chốn thành<br />tọa độ.<br /><em>Ký ức thành tín hiệu.</em></span></h1>
        <p><span className="lang-en">A personal field station for observing the places that changed my sense of distance and scale.</span><span className="lang-vi" lang="vi">Một trạm quan sát cá nhân dành cho những nơi đã thay đổi cảm nhận của mình về khoảng cách và tỉ lệ.</span></p>
      </header>

      <div className="memory-scope" aria-label={`Selected observation: ${active.city}`}>
        <div className="scope-ticks" aria-hidden="true" />
        <div className="scope-image-well">
          <div className="scope-image-frame" key={active.city}><Image src={active.asset.src} alt={active.asset.alt.en} fill priority sizes="(max-width: 760px) 78vw, 42vw" /></div>
          <div className="scope-optical-shade" aria-hidden="true" />
          <span className="scope-scan-line" aria-hidden="true" />
        </div>
        <ScopeGeometry targetIndex={activeIndex} />
        <span className="scope-bearing scope-bearing-a mono-label">OPTICAL AXIS</span>
        <span className="scope-bearing scope-bearing-b mono-label">FIELD TARGET / {String(activeIndex + 1).padStart(2, "0")}</span>
      </div>

      <aside className="target-console" aria-label="Observation target registry">
        <div className="console-heading"><p className="mono-label">TARGET REGISTRY</p><span className="mono-label">{String(activeIndex + 1).padStart(2, "0")} / {String(observations.length).padStart(2, "0")}</span></div>
        <div className="target-list">
          {observations.map((place, index) => <button type="button" className="target-button focus-ring" aria-pressed={activeIndex === index} onClick={() => setActiveIndex(index)} key={place.city}>
            <span className="target-index mono-label">T-{String(index + 1).padStart(2, "0")}</span>
            <span><strong>{place.city}</strong><small>{place.coordinates}</small></span>
            <i aria-hidden="true" />
          </button>)}
        </div>
        <div className="selected-observation" aria-live="polite">
          <p className="mono-label">OBSERVATION / SELECTED</p>
          <h2>{active.city}</h2>
          <p><LocalizedText text={active.note} /></p>
          <dl><div><dt>Coordinates</dt><dd>{active.coordinates}</dd></div><div><dt>Record</dt><dd>{active.year}</dd></div><div><dt>Status</dt><dd><span className="observatory-live" /> Archived</dd></div></dl>
        </div>
      </aside>

      <div className="observatory-status" aria-label="Observatory status">
        <span className="mono-label">FIELD STATION / SÀI GÒN</span><span className="mono-label">TARGETS / {String(observations.length).padStart(2, "0")}</span><span className="mono-label">OPTICAL MEMORY ARCHIVE</span><a href="#observation-log" className="focus-ring"><span className="lang-en">Open observation log</span><span className="lang-vi" lang="vi">Mở sổ quan sát</span><MoveDown size={14} aria-hidden="true" /></a>
      </div>
    </section>

    <section className="observation-log" id="observation-log" aria-labelledby="observation-log-title">
      <header><p className="mono-label">RECORDED TARGETS / {String(observations.length).padStart(2, "0")}</p><h2 id="observation-log-title"><span className="lang-en">Observations kept in the field archive.</span><span className="lang-vi" lang="vi">Những quan sát được giữ trong kho thực địa.</span></h2></header>
      <div className="observation-records">
        {observations.map((place, index) => <article className="observation-record" key={place.city}>
          <div className="observation-photo"><Image src={place.asset.src} alt={place.asset.alt.en} fill loading="eager" sizes="(max-width: 760px) 100vw, 42vw" /></div>
          <div className="observation-copy"><p className="mono-label"><MapPin size={13} aria-hidden="true" /> TARGET / T-{String(index + 1).padStart(2, "0")}</p><h3>{place.city}</h3><p><LocalizedText text={place.note} /></p><dl><div><dt>Coordinates</dt><dd>{place.coordinates}</dd></div><div><dt>Record</dt><dd>{place.year}</dd></div></dl></div>
        </article>)}
      </div>
    </section>
  </>;
}
