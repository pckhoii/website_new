import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ArchiveFooter, CollectionHeader } from "./archive-ui";
import { LocalizedText } from "./localized-text";
import { SiteHeader } from "./site-header";
import { collections } from "@/lib/collections";

export function CollectionPage({ collection }: { collection: keyof typeof collections }) {
  const content = collections[collection];
  return <main className={`world-page collection-page ${collection}-collection`}>
    <SiteHeader activeSection={collection} />
    <CollectionHeader {...content} />
    <section className="collection-content" aria-label={content.eyebrow.en}>
      {content.entries.length === 0 ? <p className="collection-empty"><LocalizedText text={content.empty} /></p> :
        <div className="collection-entries">{content.entries.map(entry => <article className="collection-entry" key={entry.id} id={entry.id}>
          {entry.meta && <p className="mono-label">{entry.meta}</p>}
          <h2>{entry.href ? <Link href={entry.href}><LocalizedText text={entry.title} /><ArrowUpRight size={20} aria-hidden="true" /></Link> : <LocalizedText text={entry.title} />}</h2>
          {entry.description && <p><LocalizedText text={entry.description} /></p>}
        </article>)}</div>}
    </section>
    <ArchiveFooter />
  </main>;
}
