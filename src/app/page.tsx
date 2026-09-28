import { ArrowUpRight, Radio } from "lucide-react";
import Link from "next/link";
import { ArchiveFooter, RecordLink } from "@/components/archive-ui";
import { ObservatoryPortrait } from "@/components/observatory-portrait";
import { LocalizedText } from "@/components/localized-text";
import { SiteHeader } from "@/components/site-header";
import { notes, reading, siteContent, work } from "@/lib/content";
import styles from "./home.module.css";

const gateways = [
  { index: "01", href: "/work", count: "03 case files", title: { en: "Work archive", vi: "Kho công việc" }, note: { en: "Systems built from operational questions.", vi: "Những hệ thống bắt đầu từ câu hỏi vận hành." }, mark: "lineage" },
  { index: "02", href: "/notes", count: "04 entries", title: { en: "Field notes", vi: "Ghi chép thực địa" }, note: { en: "Unfinished thinking about data, design, and life.", vi: "Những suy nghĩ còn mở về dữ liệu, thiết kế và đời sống." }, mark: "observation-slip" },
  { index: "03", href: "/reading", count: "03 volumes", title: { en: "Reading ledger", vi: "Sổ đọc" }, note: { en: "Ideas kept close enough to return to.", vi: "Những ý tưởng được giữ đủ gần để quay lại." }, mark: "moon-index" },
  { index: "04", href: "/places", count: "02 coordinates", title: { en: "Field atlas", vi: "Bản đồ nơi chốn" }, note: { en: "Places, weather, routes, and remembered scale.", vi: "Nơi chốn, thời tiết, tuyến đường và tỉ lệ còn nhớ." }, mark: "route-map" },
  { index: "05", href: "/about", count: "dossier", title: { en: "About Khoi", vi: "Về Khôi" }, note: { en: "Experience, capabilities, and the person behind the systems.", vi: "Kinh nghiệm, năng lực và con người phía sau hệ thống." }, mark: "constellation-k" },
] as const;

export default function HomePage() {
  return <main id="top" className={`world-page world-home ${styles.home}`}>
    <a className="skip-link" href="#collections">Skip to collections</a>
    <SiteHeader />
    <section className={`desk-intro ${styles.hero}`}>
      <div className={`desk-copy ${styles.copy}`}>
        <p className="mono-label"><Radio size={13} aria-hidden="true" /><LocalizedText text={{en: "PERSONAL ARCHIVE · SÀI GÒN", vi: "KHO LƯU TRỮ CÁ NHÂN · SÀI GÒN"}} /></p>
        <h1><span>{siteContent.hero.name}</span><LocalizedText text={siteContent.hero.headlineOne} /></h1>
        <p><LocalizedText text={siteContent.hero.body} /></p>
        <div className="desk-status"><span className="signal-dot" /><span><strong><LocalizedText text={siteContent.hero.role} /></strong><small>FSS JSC · APR 2025—PRESENT</small></span></div>
        <Link href="/work" className={styles.explore}><LocalizedText text={{en: "Explore my work", vi: "Xem công việc của mình"}} /><ArrowUpRight size={17} aria-hidden="true" /></Link>
      </div>
      <ObservatoryPortrait />
    </section>

    <section className={styles.collections} id="collections" aria-label="Archive collections">
      <header className={styles.indexHeading}><h2><LocalizedText text={{en: "Inside the archive", vi: "Trong kho lưu trữ"}} /></h2><p><LocalizedText text={{en: "WORK, IDEAS & THE DAYS BETWEEN", vi: "CÔNG VIỆC, Ý TƯỞNG & ĐỜI SỐNG"}} /></p></header>
      {gateways.map((gateway) => <Link className={styles.entry} href={gateway.href} key={gateway.href}>
        <span className={styles.number}>{gateway.index}</span>
        <h3><LocalizedText text={gateway.title} /></h3><p><LocalizedText text={gateway.note} /></p>
        <ArrowUpRight size={19} aria-hidden="true" />
      </Link>)}
    </section>

    <section className="desk-recent" aria-labelledby="recent-signals-title">
      <header><p className="mono-label">LATEST TRANSMISSIONS / 03</p><h2 id="recent-signals-title"><LocalizedText text={siteContent.recent.title} /></h2></header>
      <div className="record-list">
        <RecordLink href={`/work/${work[0].slug}`} index="01" label={{ en: "Case file", vi: "Hồ sơ" }} title={work[0].title} meta={work[0].year} />
        <RecordLink href={`/notes#${notes[0].slug}`} index="02" label={{ en: "Field note", vi: "Ghi chép" }} title={notes[0].title} meta={notes[0].date} />
        <RecordLink href="/reading" index="03" label={{ en: "Reading", vi: "Đọc" }} title={{ en: reading[0].title, vi: reading[0].title }} meta={reading[0].status} />
      </div>
    </section>
    <ArchiveFooter />
  </main>;
}
