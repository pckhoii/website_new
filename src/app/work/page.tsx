import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ArchiveFooter, CollectionHeader } from "@/components/archive-ui";
import { LocalizedText } from "@/components/localized-text";
import { SiteHeader } from "@/components/site-header";
import { siteContent, work } from "@/lib/content";

export const metadata = { title: "Work Archive", description: "Case logs in data engineering, banking BI, logistics, and analytics." };

export default function WorkPage() {
  return <main className="world-page collection-page work-collection">
    <SiteHeader activeSection="work" />
    <CollectionHeader index="01" eyebrow={siteContent.work.eyebrow} title={{ en: "Case log of systems and decisions.", vi: "Nhật ký những hệ thống và quyết định." }} intro={siteContent.work.intro} artifact="lineage" />
    <section className="case-log" aria-label="Work case files">
      {work.map((project) => <Link className="case-record focus-ring" href={`/work/${project.slug}`} key={project.slug}>
        <div className="case-meta"><span className="mono-label">CASE / {project.index}</span><span className="mono-label"><LocalizedText text={project.year} /></span></div>
        <div className="case-image"><Image src={project.asset.src} alt={project.asset.alt.en} fill sizes="(max-width: 780px) 100vw, 34vw" /></div>
        <div className="case-copy"><p className="mono-label"><LocalizedText text={project.discipline} /></p><h2><LocalizedText text={project.title} /></h2><p><LocalizedText text={project.description} /></p><span><LocalizedText text={project.contribution} /></span></div>
        <ArrowUpRight size={22} aria-hidden="true" />
      </Link>)}
    </section>
    <ArchiveFooter />
  </main>;
}
