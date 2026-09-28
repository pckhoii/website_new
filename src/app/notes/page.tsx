import Image from "next/image";
import { ArchiveFooter, CollectionHeader } from "@/components/archive-ui";
import { LocalizedText } from "@/components/localized-text";
import { SiteHeader } from "@/components/site-header";
import { notes, siteContent } from "@/lib/content";

export const metadata = { title: "Field Notes", description: "Essays, observations, and unfinished thoughts by Phạm Công Nguyễn Khôi." };

export default function NotesPage() {
  return <main className="world-page collection-page notes-collection">
    <SiteHeader activeSection="notes" />
    <CollectionHeader index="02" eyebrow={siteContent.notes.eyebrow} title={siteContent.notes.title} intro={siteContent.notes.intro} artifact="observation-slip" />
    <section className="notebook" aria-label="Notes archive">
      <div className="notebook-margin mono-label">FIELD NOTEBOOK · VOL 01<br />DATA / DESIGN / EVERYDAY</div>
      <div className="notebook-pages">
        {notes.map((note, index) => <article className="note-record" id={note.slug} key={note.slug}>
          <div className="note-record-meta"><span className="mono-label">{String(index + 1).padStart(2, "0")}</span><span className="mono-label">{note.date}</span><span className="mono-label"><LocalizedText text={note.topic} /></span></div>
          <div className="note-record-copy"><p className="mono-label"><LocalizedText text={note.format} /> · <LocalizedText text={note.readingTime} /></p><h2><LocalizedText text={note.title} /></h2><p><LocalizedText text={note.excerpt} /></p></div>
          {"asset" in note ? <div className="note-thumb"><Image src={note.asset.src} alt={note.asset.alt.en} fill sizes="220px" /></div> : <span className="note-scribble" aria-hidden="true">↗ kept for later</span>}
        </article>)}
      </div>
    </section>
    <ArchiveFooter />
  </main>;
}
