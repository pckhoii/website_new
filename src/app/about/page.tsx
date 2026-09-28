import Image from "next/image";
import { Mail } from "lucide-react";
import { ArchiveFooter, CollectionHeader } from "@/components/archive-ui";
import { LocalizedText } from "@/components/localized-text";
import { SiteHeader } from "@/components/site-header";
import { cvFacts, siteContent } from "@/lib/content";

export const metadata = { title: "About Khoi", description: "Profile, experience, education, and capabilities of Phạm Công Nguyễn Khôi." };

export default function AboutPage() {
  return <main className="world-page collection-page about-collection">
    <SiteHeader activeSection="about" />
    <CollectionHeader index="05" eyebrow={siteContent.about.eyebrow} title={siteContent.about.title} intro={siteContent.about.bodyOne} artifact="constellation-k" tone="chalk" />
    <section className="dossier">
      <aside className="dossier-profile"><div className="profile-image"><Image src="/profile/khoi.png" alt="Phạm Công Nguyễn Khôi" fill sizes="(max-width: 760px) 55vw, 24vw" priority /></div><p>{siteContent.hero.name}</p><span className="mono-label">DATA ENGINEER / ANALYST<br />SÀI GÒN, VIETNAM</span><a className="focus-ring" href="mailto:phamkhoi1602fw@gmail.com"><Mail size={15} /> phamkhoi1602fw@gmail.com</a></aside>
      <div className="dossier-records">
        <section><p className="mono-label">01 / EXPERIENCE</p>{cvFacts.experience.map((item) => <article className="dossier-job" key={item.company}><span className="mono-label">{item.period}</span><h2><LocalizedText text={item.role} /></h2><p>{item.company}</p><ul>{item.highlights.map((point) => <li key={point.en}><LocalizedText text={point} /></li>)}</ul></article>)}</section>
        <section><p className="mono-label">02 / EDUCATION</p><article className="dossier-job"><span className="mono-label">{cvFacts.education.period}</span><h2><LocalizedText text={cvFacts.education.degree} /></h2><p>{cvFacts.education.school}</p><p><LocalizedText text={cvFacts.education.major} /></p></article></section>
        <section><p className="mono-label">03 / CAPABILITIES</p><div className="skill-ledger">{cvFacts.skills.map((skill) => <div key={skill.label}><strong>{skill.label}</strong><span>{skill.value}</span></div>)}</div></section>
        <section><p className="mono-label">04 / CERTIFICATES</p><div className="certificate-row">{cvFacts.certifications.map((certificate) => <span key={certificate}>{certificate}</span>)}</div></section>
      </div>
    </section>
    <ArchiveFooter />
  </main>;
}
