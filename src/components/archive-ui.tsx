import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { LocalizedText } from "@/components/localized-text";
import type { Localized } from "@/lib/content";
import { CosmicCompanion, OrbitSketch } from "@/components/personal-cosmos";
import { navigation } from "@/lib/content";

export function ArchiveFooter() {
  return <><nav className="orbit-wayfinder" aria-label="Explore another orbit / Khám phá góc khác"><div><span aria-hidden="true">✧</span><LocalizedText text={{ en: "A little further?", vi: "Dạo thêm chút nữa?" }} /></div><div>{navigation.map(item => <Link href={item.href} key={item.href} className="focus-ring"><LocalizedText text={item.label} /><ArrowUpRight size={13} aria-hidden="true" /></Link>)}<Link href="/" className="focus-ring"><LocalizedText text={{ en: "Back to my universe", vi: "Về vũ trụ nhỏ" }} /></Link></div></nav><footer className="world-footer">
    <p><span className="signal-dot" /> Universe of Signals</p>
    <p>Phạm Công Nguyễn Khôi · Sài Gòn</p>
    <CosmicCompanion />
  </footer></>;
}

export function CollectionHeader({ index, eyebrow, title, intro, artifact, tone = "blue" }: {
  index: string;
  eyebrow: Localized;
  title: Localized;
  intro: Localized;
  artifact: "lineage" | "observation-slip" | "moon-index" | "route-map" | "constellation-k";
  tone?: "blue" | "amber" | "chalk" | "paper";
}) {
  const sketch = artifact === "lineage" ? "work" : artifact === "observation-slip" ? "notes" : artifact === "moon-index" ? "reading" : artifact === "route-map" ? "places" : "about";
  const captions = { work: { en: "one question at a time", vi: "từng câu hỏi, từng chút một" }, notes: { en: "still a little unfinished", vi: "còn dang dở một chút" }, reading: { en: "just one more chapter", vi: "thêm một chương nữa thôi" }, places: { en: "a little away from home", vi: "đi xa nhà một chút" }, about: { en: "a human, not a constellation", vi: "một người, giữa những vì sao" } };
  return <header className="collection-hero" data-orbit={sketch}>
    <div className="collection-heading">
      <p className="mono-label">COLLECTION / {index} · <LocalizedText text={eyebrow} /></p>
      <h1><LocalizedText text={title} /></h1>
      <p className="collection-intro"><LocalizedText text={intro} /></p>
    </div>
    <figure className="collection-sketch" data-tone={tone}><svg className="collection-sketch-orbits" viewBox="0 0 400 340" fill="none" aria-hidden="true"><ellipse cx="200" cy="170" rx="182" ry="105" transform="rotate(-24 200 170)" /><circle cx="200" cy="170" r="149" strokeDasharray="2 9" /><path d="M65 92v12m-6-6h12M323 253v12m-6-6h12M298 45l4 10 11 1-8 7 2 11-9-6-10 5 3-11-8-7 11-1z" /></svg><OrbitSketch kind={sketch} /><figcaption><LocalizedText text={captions[sketch]} /></figcaption></figure>
  </header>;
}
