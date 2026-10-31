"use client";

import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, RotateCcw, Sparkles } from "lucide-react";
import { LocalizedText } from "./localized-text";
import styles from "./personal-cosmos.module.css";

type Orbit = "work" | "notes" | "reading" | "places" | "about";
const worlds = [
  { kind: "work", x: 76, y: 28, title: { en: "Work", vi: "Công việc" }, description: { en: "Where questions become systems.", vi: "Nơi câu hỏi trở thành hệ thống." }, color: "#8cc8df" },
  { kind: "notes", x: 29, y: 16, title: { en: "Notes", vi: "Ghi chép" }, description: { en: "Thoughts, still finding their shape.", vi: "Những ý nghĩ đang tìm hình hài." }, color: "#ecc09c" },
  { kind: "reading", x: 17, y: 62, title: { en: "Reading", vi: "Đọc sách" }, description: { en: "Other minds. New perspectives.", vi: "Gặp những tư duy. Mở những góc nhìn." }, color: "#a5cbbd" },
  { kind: "places", x: 72, y: 76, title: { en: "Places", vi: "Nơi chốn" }, description: { en: "A little further from the familiar.", vi: "Đi xa thêm một chút khỏi quen thuộc." }, color: "#9ebdca" },
  { kind: "about", x: 88, y: 55, title: { en: "About me", vi: "Về mình" }, description: { en: "The human connecting all these dots.", vi: "Người nối tất cả những chấm nhỏ này." }, color: "#ecc09c" },
] as const;

export function OrbitSketch({ kind }: { kind: Orbit }) {
  return <svg viewBox="0 0 200 140" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "work" && <><ellipse cx="100" cy="43" rx="38" ry="14" /><path d="M62 43v53c0 19 76 19 76 0V43M62 62c0 19 76 19 76 0M62 81c0 19 76 19 76 0M38 55l-12 15 12 15M163 55l12 15-12 15M48 114h22M151 24v12m-6-6h12" /><path d="M85 35q15-6 30 0" opacity=".4" /><circle cx="149" cy="111" r="3" /></>}
    {kind === "notes" && <><path d="M68 100c-5-16-25-19-25-42 0-30 26-47 51-42 30-3 54 15 50 42-3 20-22 24-26 42zM70 110h46M74 119h38M84 126h19M85 99L75 60l21 13 19-14-12 40M30 30l-9-7M164 38l11-4M97 3V-5" /><path d="M155 101l5 10 10 1-8 7 2 10-9-5-9 5 2-11-7-7 10-1z" /></>}
    {kind === "reading" && <><path d="M27 39q38-15 73 6 34-21 73-6l-3 69q-34-14-70 6-34-20-70-6zM100 45v69M34 115q33-7 65 7 34-14 65-7M43 53q22-5 40 3M44 65q21-5 38 3M44 77q20-4 38 3M119 58q17-7 35-5M120 71q17-7 33-5M137 34V18l8 5 8-5v16" /><path d="M66 17v9M61 21h10M168 126h10" /></>}
    {kind === "places" && <><path d="M49 101L76 39l30 50 20-32 34 44zM66 62l10 6 10-8M116 73l10 5 10-5M33 115q33-8 64 0t68 0" /><circle cx="140" cy="26" r="11" /><path d="M30 41q-8-10 1-16 1-13 15-8 11-5 14 6 14 3 7 14zM81 126q29 7 56-1" /><path d="M93 20v9m-4-4h8" /></>}
    {kind === "about" && <><path d="M80 44q-8-26 17-28 30-4 27 26M77 46c-10-10-16 9-4 14M127 46c10-10 16 9 4 14M78 35v28q23 27 46 0V34M91 51v3M112 51v3M94 65q9 7 17-1M60 125v-20q2-23 30-25l11 15 13-15q29 3 28 25v20M86 88l-8 24 24-12 25 12-9-24" /><path d="M151 48l4 9 10 1-7 7 1 10-8-5-9 5 2-10-7-7 10-1z" /></>}
  </svg>;
}

export function LittleCreature({ happy = false }: { happy?: boolean }) {
  return <svg viewBox="0 0 120 100" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 66c-6-21 11-34 35-35 28-3 49 9 46 32-2 19-81 22-81 3z" fill="currentColor" fillOpacity=".07" />
    <path d="M56 32c-5-10-3-16 1-21M56 24c-11-2-16-9-14-16 9 0 15 5 14 16zM58 21c2-9 8-12 15-10-1 7-6 11-15 10zM36 78l-4 9M86 78l5 9M17 56l-8-4M106 56l7-6" />
    {happy ? <path d="M41 53q4-7 8 0M73 53q4-7 8 0M55 62q7 9 14-1" /> : <><path d="M44 50v5M77 50v5M56 62q6 5 12-1" /><path d="M40 42h8M74 42h8" opacity=".5" /></>}
    <ellipse cx="35" cy="61" rx="6" ry="3" fill="#ecc09c" stroke="none" opacity=".45" /><ellipse cx="86" cy="60" rx="6" ry="3" fill="#ecc09c" stroke="none" opacity=".45" />
  </svg>;
}

export function PersonalCosmos() {
  const [selected, setSelected] = useState<Orbit>("work");
  const [night, setNight] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const driftFrame = useRef(0);
  const stageBounds = useRef<DOMRect | null>(null);
  useEffect(() => () => cancelAnimationFrame(driftFrame.current), []);
  const world = worlds.find(item => item.kind === selected)!;
  const route = `M300 268 Q${world.x * 6} 268 ${world.x * 6} ${world.y * 5.4}`;
  function move(event: MouseEvent<HTMLDivElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.dataset.motion === "paused") return;
    const rect = stageBounds.current;
    const { clientX, clientY } = event;
    if (!rect) return;
    cancelAnimationFrame(driftFrame.current);
    driftFrame.current = requestAnimationFrame(() => {
      stageRef.current?.style.setProperty("--drift-x", `${((clientX - rect.left) / rect.width - .5) * 12}px`);
      stageRef.current?.style.setProperty("--drift-y", `${((clientY - rect.top) / rect.height - .5) * 12}px`);
    });
  }
  return <div className={styles.cosmos} data-night={night} data-reveal data-delay="140" data-ambient>
    <div className={styles.mapHeading}><span>THE KHOI SYSTEM</span><button type="button" aria-pressed={night} onClick={() => setNight(value => !value)}><Sparkles size={12} aria-hidden="true" /><LocalizedText text={night ? { en: "Daydream mode", vi: "Chế độ mơ màng" } : { en: "Go stargazing", vi: "Ngắm sao nhé" }} /></button></div>
    <div className={styles.stage} ref={stageRef} onMouseEnter={event => { stageBounds.current = event.currentTarget.getBoundingClientRect(); }} onMouseMove={move} onMouseLeave={() => { cancelAnimationFrame(driftFrame.current); stageBounds.current = null; stageRef.current?.style.setProperty("--drift-x", "0px"); stageRef.current?.style.setProperty("--drift-y", "0px"); }}>
      <svg className={styles.sky} data-drift viewBox="0 0 600 540" fill="none" aria-hidden="true">
        <defs><radialGradient id="little-planet"><stop stopColor="#efc8ac" /><stop offset=".72" stopColor="#d6ad91" /><stop offset="1" stopColor="#a18376" /></radialGradient><radialGradient id="cosmos-glow"><stop stopColor="#71bad9" stopOpacity=".18" /><stop offset="1" stopColor="#71bad9" stopOpacity="0" /></radialGradient></defs>
        <circle cx="300" cy="270" r="250" fill="url(#cosmos-glow)" />
        <g stroke="#8cc8df" strokeWidth=".7" opacity=".32"><ellipse cx="300" cy="270" rx="238" ry="170" transform="rotate(-27 300 270)" /><ellipse cx="300" cy="270" rx="184" ry="122" transform="rotate(25 300 270)" strokeDasharray="3 8" /><circle cx="300" cy="270" r="236" strokeDasharray="1 10" /></g>
        <g key={selected} style={{ color: world.color }}>
          <path className={styles.journeyTrail} d={route} stroke="currentColor" strokeWidth="1" pathLength="1" />
          <g className={styles.journeyStar} style={{ offsetPath: `path("${route}")` }}><path d="M0-6 1.8-1.8 6 0 1.8 1.8 0 6-1.8 1.8-6 0-1.8-1.8Z" fill="#07141d" stroke="currentColor" strokeWidth="1" /></g>
        </g>
        <g className={styles.stars} fill="#d9edf4">{Array.from({ length: 38 }, (_, i) => <circle key={i} cx={30 + ((i * 137) % 540)} cy={20 + ((i * 97) % 490)} r={i % 5 === 0 ? 1.8 : .85} style={{ animationDelay: `${i % 7}s` }} />)}</g>
        <g className={styles.extraStars} stroke="#ecc09c" strokeWidth="1.2">{[[65,190],[480,105],[414,450],[230,50],[550,390],[120,400],[370,94],[490,445]].map(([x,y]) => <path key={x} d={`M${x-5} ${y}h10M${x} ${y-5}v10`} />)}</g>
        <g className={styles.centralPlanet}>
          <ellipse cx="300" cy="320" rx="74" ry="16" fill="#000" opacity=".12" />
          <circle cx="300" cy="268" r="75" fill="url(#little-planet)" stroke="#f3d3b4" strokeWidth="1" />
          <g stroke="#805d60" strokeWidth="1" opacity=".28"><path d="M239 225q35-12 80 0t44 5M230 243q45-13 92 1t49 6M226 263q46-16 96 1t52 4M227 284q40-12 84 2t58 6M238 306q32-11 78 1t39 8" /><ellipse cx="276" cy="234" rx="14" ry="6" /><ellipse cx="332" cy="290" rx="17" ry="7" /></g>
          <path d="M232 251c-81 18-61 60 39 56 73-2 163-43 118-61l-19-4" stroke="#f0cba5" strokeWidth="8" strokeOpacity=".7" /><path d="M232 251c-81 18-61 60 39 56 73-2 163-43 118-61l-19-4" stroke="#f9dec0" strokeWidth="1.2" />
          <path d="M272 263v5M316 257v5M289 280q9 5 15-2" stroke="#604535" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="260" cy="275" rx="6" ry="3" fill="#dd9b92" opacity=".7" /><ellipse cx="327" cy="269" rx="6" ry="3" fill="#dd9b92" opacity=".7" />
        </g>
        <g className={styles.nightConstellation} stroke="#d9edf4" strokeWidth="1.1"><path d="M280 190V338M344 198l-64 70 64 70" strokeDasharray="3 6" />{[[280,190],[280,268],[280,338],[344,198],[344,338]].map(([x,y]) => <g key={`${x}-${y}`}><circle cx={x} cy={y} r="4" fill="#f3ecdf" stroke="none" /><path d={`M${x-9} ${y}h18M${x} ${y-9}v18`} stroke="#ecc09c" /></g>)}</g>
        <g stroke="#ecc09c" strokeWidth="1.3"><path d="M345 169l4 11 12 2-10 7 2 13-10-7-11 5 3-12-9-8 13-1zM184 354l3 7 8 1-6 5 1 8-7-4-7 4 2-8-6-5 8-1z" /><path d="M203 197q-13-16-37-12m9-8-12 7 11 4" /></g>
        <text x="134" y="170" fill="#ecc09c" className={`${styles.svgNote} lang-en`} transform="rotate(-12 134 170)">you are here-ish</text>
        <text x="134" y="170" fill="#ecc09c" className={`${styles.svgNote} lang-vi`} transform="rotate(-12 134 170)">bạn ở đâu đó đây</text>
        <g transform="translate(290 365) rotate(8)" stroke="#8cc8df" strokeWidth="1.2"><path d="M0 0l38 12-17 8-7 19zM0 0l21 20M21 20l3 13-10 6" fill="#102c3a" /><path d="M5 46q-8 24-34 24t-27 21" strokeDasharray="3 5" /></g>
      </svg>
      {worlds.map(item => <button key={item.kind} className={styles.planetLink} data-kind={item.kind} style={{ left: `${item.x}%`, top: `${item.y}%`, "--planet-color": item.color } as CSSProperties} aria-pressed={selected === item.kind} onClick={() => setSelected(item.kind)}><OrbitSketch kind={item.kind} /><span><LocalizedText text={item.title} /></span></button>)}
      <span className={styles.planetCaption}><LocalizedText text={night ? { en: "K, a constellation of curiosities", vi: "K, một chòm sao của những tò mò" } : { en: "a perfectly imperfect little world", vi: "một thế giới nhỏ, chẳng cần hoàn hảo" }} /></span>
    </div>
    <div className={styles.destination} style={{ "--planet-color": world.color } as CSSProperties}><span className={styles.destinationDot} /><div aria-live="polite"><div key={selected} className={styles.destinationCopy}><strong><LocalizedText text={world.title} /></strong><p><LocalizedText text={world.description} /></p></div></div><Link href={`/${world.kind}`}><LocalizedText text={{ en: "Land here", vi: "Hạ cánh" }} /><ArrowUpRight size={15} aria-hidden="true" /></Link></div>
    <p className={styles.mapHint}><LocalizedText text={{ en: "Tap a world. Follow your curiosity.", vi: "Chạm một hành tinh. Đi theo sự tò mò." }} /></p>
  </div>;
}

type Point = { x: number; y: number };
const initialStars: Point[] = [{ x: 18, y: 66 }, { x: 32, y: 39 }, { x: 47, y: 58 }, { x: 62, y: 24 }, { x: 79, y: 44 }];
export function ConstellationGarden() {
  const [points, setPoints] = useState<Point[]>(initialStars);
  function addStar(point?: Point) {
    const nextPoint = point ?? { x: 12 + Math.random() * 76, y: 16 + Math.random() * 64 };
    setPoints(current => current.length >= 12 ? current : [...current, nextPoint]);
  }
  return <section className={styles.garden} data-reveal aria-labelledby="garden-title">
    <div className={styles.gardenCopy}><p className={styles.gardenEyebrow}><LocalizedText text={{ en: "A LITTLE SPACE FOR YOU", vi: "MỘT KHOẢNG NHỎ DÀNH CHO BẠN" }} /></p><h2 id="garden-title"><LocalizedText text={{ en: "Leave a little light.", vi: "Để lại một chút sáng." }} /></h2><p><LocalizedText text={{ en: "Even a brief visit can become a constellation. Tap the sky and connect a few stars of your own.", vi: "Một lần ghé qua cũng có thể thành chòm sao. Chạm lên bầu trời, nối vài ngôi sao của riêng bạn." }} /></p><div className={styles.gardenActions}><button type="button" onClick={() => addStar()} disabled={points.length >= 12}><Sparkles size={14} aria-hidden="true" /><LocalizedText text={{ en: "Add a star", vi: "Thêm ngôi sao" }} /></button><button type="button" onClick={() => setPoints([])}><RotateCcw size={13} aria-hidden="true" /><LocalizedText text={{ en: "Start again", vi: "Vẽ lại nhé" }} /></button></div><p className={styles.gardenStatus} role="status"><LocalizedText text={points.length >= 12 ? { en: "Your constellation is complete. A lovely place to start again.", vi: "Chòm sao đã đầy rồi. Mình vẽ một chòm mới nhé." } : { en: `${points.length} / 12 stars · Just here, just for this visit.`, vi: `${points.length} / 12 ngôi sao · Riêng cho lần ghé này.` }} /></p></div>
    <button className={styles.gardenSky} type="button" disabled={points.length >= 12} aria-label="Add a star to your constellation / Thêm sao vào chòm sao của bạn" onClick={event => { const rect = event.currentTarget.getBoundingClientRect(); addStar(event.detail === 0 ? undefined : { x: Math.min(94, Math.max(6, (event.clientX - rect.left) / rect.width * 100)), y: Math.min(90, Math.max(10, (event.clientY - rect.top) / rect.height * 100)) }); }}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polyline points={points.map(point => `${point.x},${point.y}`).join(" ")} fill="none" stroke="#8cc8df" strokeWidth=".2" strokeDasharray="1 1" /></svg>
      {points.map((point, i) => <span className={styles.gardenStar} key={`${i}-${point.x}`} style={{ left: `${point.x}%`, top: `${point.y}%` }}>✧</span>)}<span className={styles.gardenSkyNote}><LocalizedText text={{ en: "a constellation that didn’t exist before you", vi: "một chòm sao chưa từng có trước khi bạn đến" }} /></span>
    </button>
  </section>;
}

const creatureMessages = [
  { en: "Hi! I’m Mầm, the keeper of little curiosities.", vi: "Chào! Mình là Mầm, giữ hộ những tò mò nho nhỏ." },
  { en: "A tiny stretch. You’ve been exploring for a while!", vi: "Vươn vai một chút nhé. Bạn đã khám phá một lúc rồi!" },
  { en: "I tried counting the stars. Got distracted at three.", vi: "Mình thử đếm sao. Đến ba thì quên mất đang đếm." },
  { en: "Thanks for stopping by. The universe is nicer with you.", vi: "Cảm ơn bạn đã ghé. Có bạn, vũ trụ vui hơn một chút." },
];
export function CosmicCompanion() {
  const [greeting, setGreeting] = useState(-1);
  return <div className={styles.companion} data-cosmic-companion><button type="button" aria-expanded={greeting >= 0} aria-controls="companion-message" onClick={() => setGreeting(current => (current + 1) % creatureMessages.length)}><LittleCreature happy={greeting >= 0} /><span><LocalizedText text={{ en: "Say hi to Mầm", vi: "Chào Mầm một cái" }} /></span></button>{greeting >= 0 && <div id="companion-message" className={styles.bubble}><p role="status"><LocalizedText text={creatureMessages[greeting]} /></p><button type="button" onClick={() => setGreeting(-1)} aria-label="Close greeting / Đóng lời chào">×</button></div>}</div>;
}
