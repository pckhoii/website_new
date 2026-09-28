import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { GraphicArtifactVariant } from "@/components/graphic-artifacts";
import { GraphicArtifact } from "@/components/graphic-artifacts";
import { LocalizedText } from "@/components/localized-text";
import type { Localized } from "@/lib/content";

export function ArchiveFooter() {
  return <footer className="world-footer">
    <p><span className="signal-dot" /> Universe of Signals</p>
    <p>Phạm Công Nguyễn Khôi · Sài Gòn</p>
    <p className="mono-label">Archive updated / 2026</p>
  </footer>;
}

export function CollectionHeader({ index, eyebrow, title, intro, artifact, tone = "blue" }: {
  index: string;
  eyebrow: Localized;
  title: Localized;
  intro: Localized;
  artifact: GraphicArtifactVariant;
  tone?: "blue" | "amber" | "chalk" | "paper";
}) {
  return <header className="collection-hero">
    <div className="collection-heading">
      <p className="mono-label">COLLECTION / {index} · <LocalizedText text={eyebrow} /></p>
      <h1><LocalizedText text={title} /></h1>
      <p className="collection-intro"><LocalizedText text={intro} /></p>
    </div>
    <GraphicArtifact variant={artifact} tone={tone} className="collection-mark" />
  </header>;
}

export function RecordLink({ href, index, label, title, meta }: {
  href: string;
  index: string;
  label: Localized;
  title: Localized;
  meta: string | Localized;
}) {
  return <Link className="record-link focus-ring" href={href}>
    <span className="mono-label">{index}</span>
    <span><small><LocalizedText text={label} /></small><strong><LocalizedText text={title} /></strong></span>
    <span className="record-meta mono-label">{typeof meta === "string" ? meta : <LocalizedText text={meta} />}</span>
    <ArrowUpRight size={18} strokeWidth={1.35} aria-hidden="true" />
  </Link>;
}
