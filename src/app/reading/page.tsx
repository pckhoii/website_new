import Image from "next/image";
import { ArchiveFooter, CollectionHeader } from "@/components/archive-ui";
import { LocalizedText } from "@/components/localized-text";
import { SiteHeader } from "@/components/site-header";
import { reading, siteContent } from "@/lib/content";

export const metadata = { title: "Reading Ledger", description: "Books and ideas kept for return." };

export default function ReadingPage() {
  return <main className="world-page collection-page reading-collection">
    <SiteHeader activeSection="reading" />
    <CollectionHeader index="03" eyebrow={siteContent.reading.eyebrow} title={{ en: "A ledger of ideas worth returning to.", vi: "Một cuốn sổ của những ý tưởng đáng quay lại." }} intro={siteContent.reading.intro} artifact="moon-index" tone="paper" />
    <section className="reading-ledger" aria-label="Reading ledger">
      {reading.map((book, index) => <article className="ledger-entry" key={book.title}>
        <span className="ledger-number mono-label">{String(index + 1).padStart(2, "0")}</span>
        <div className="ledger-cover"><Image src={book.asset.src} alt={book.asset.alt.en} fill sizes="(max-width: 700px) 44vw, 18vw" /></div>
        <div className="ledger-title"><p className="mono-label"><LocalizedText text={book.status} /></p><h2>{book.title}</h2><p>{book.author}</p></div>
        <div className="ledger-note"><span className="mono-label"><LocalizedText text={siteContent.reading.savedBecause} /></span><p><LocalizedText text={book.note} /></p></div>
      </article>)}
    </section>
    <ArchiveFooter />
  </main>;
}
