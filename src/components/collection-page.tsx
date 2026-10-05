import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ArchiveFooter } from "./archive-ui";
import { OrbitSketch } from "./personal-cosmos";
import { LocalizedText } from "./localized-text";
import { SiteHeader } from "./site-header";
import { collections } from "@/lib/collections";
import styles from "./collection-page.module.css";

export function CollectionPage({ collection }: { collection: keyof typeof collections }) {
  const content = collections[collection];
  return <main className={`world-page ${styles.page}`} data-collection={collection}>
    <SiteHeader activeSection={collection} />
    <div className={styles.desk}>
      <div className={styles.breadcrumb}><Link href="/"><ArrowLeft size={14} aria-hidden="true" /><LocalizedText text={{ en: "My little universe", vi: "Vũ trụ nhỏ của mình" }} /></Link><span><LocalizedText text={{ en: "a few things to keep", vi: "vài điều để giữ lại" }} /></span></div>
      <nav className={styles.tabs} aria-label="Collections / Các góc nhỏ">{Object.entries(collections).map(([key, value]) => <Link href={`/${key}`} key={key} aria-current={key === collection ? "page" : undefined}><span className={styles.tabDot} aria-hidden="true" /><LocalizedText text={value.eyebrow} /></Link>)}</nav>
      <section className={styles.sheet} aria-labelledby="collection-title">
        <header className={styles.heading}>
          <div><p className={styles.eyebrow}><LocalizedText text={content.eyebrow} /></p><h1 id="collection-title"><LocalizedText text={content.title} /></h1><p className={styles.intro}><LocalizedText text={content.intro} /></p></div>
          <svg className={styles.stamp} viewBox="0 0 72 72" fill="none" aria-hidden="true"><circle cx="36" cy="36" r="29" stroke="currentColor" strokeDasharray="1 4" /><path d="m36 19 5 12 13 5-13 5-5 12-5-12-13-5 13-5z" stroke="currentColor" /><circle cx="36" cy="36" r="3" fill="currentColor" /></svg>
        </header>
        {content.entries.length === 0 ? <div className={styles.empty}>
          <div className={styles.drawing} aria-hidden="true"><svg className={styles.paper} viewBox="0 0 260 180" fill="none"><path d="m58 36 145-8 6 122-145 8z" stroke="currentColor" strokeWidth="1" /><path d="m203 28 19 12-5 123-145 7-8-12M73 48l5 97" stroke="currentColor" strokeWidth=".8" opacity=".4" /><path d="M31 126q-14-33 5-53M30 87l6-14 8 11M229 65v12m-6-6h12M40 145v8m-4-4h8" stroke="currentColor" strokeLinecap="round" opacity=".55" /><path d="m188 12 3 6 7 2-6 4v7l-5-4-6 2 2-7-4-5 7 1z" stroke="#ecc09c" strokeWidth="1" /></svg><div className={styles.glyph}><OrbitSketch kind={collection} /></div></div>
          <p className="collection-empty"><LocalizedText text={content.empty} /></p>
          <span className={styles.handnote}><LocalizedText text={{ en: "one little thing at a time", vi: "từng chút một thôi" }} /><svg viewBox="0 0 66 24" fill="none" aria-hidden="true"><path d="M3 14q28 12 55-6M48 5l11 2-4 9" /></svg></span>
        </div> :
        <div className={styles.entries}>{content.entries.map(entry => <article className={styles.entry} key={entry.id} id={entry.id}>
          {entry.meta && <p className="mono-label">{entry.meta}</p>}
          <h2>{entry.href ? <Link href={entry.href}><LocalizedText text={entry.title} /><ArrowUpRight size={20} aria-hidden="true" /></Link> : <LocalizedText text={entry.title} />}</h2>
          {entry.description && <p><LocalizedText text={entry.description} /></p>}
        </article>)}</div>}
        <div className={styles.sheetFoot}><span aria-hidden="true">✧</span><LocalizedText text={{ en: "Room for what comes next.", vi: "Còn chỗ cho những điều sắp tới." }} /></div>
      </section>
    </div>
    <ArchiveFooter />
  </main>;
}
