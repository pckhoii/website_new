import { ArrowDown, ArrowUpRight, Radio } from "lucide-react";
import Link from "next/link";
import { ArchiveFooter } from "@/components/archive-ui";
import { PersonalCosmos, ConstellationGarden, OrbitSketch } from "@/components/personal-cosmos";
import { LocalizedText } from "@/components/localized-text";
import { SiteHeader } from "@/components/site-header";

import styles from "./home.module.css";

const gateways = [
  { href: "/work", title: { en: "Things I build", vi: "Những điều mình xây" }, note: { en: "Turning messy questions into useful data systems.", vi: "Từ những câu hỏi ngổn ngang đến hệ thống dữ liệu hữu ích." }, kind: "work", meta: "SQL · PYTHON · BI" },
  { href: "/notes", title: { en: "Thoughts in orbit", vi: "Ý nghĩ trên quỹ đạo" }, note: { en: "A place for ideas that haven’t quite landed yet.", vi: "Một chỗ cho những ý tưởng còn chưa kịp hạ cánh." }, kind: "notes", meta: "DATA · DESIGN · LIFE" },
  { href: "/reading", title: { en: "A pocket of ideas", vi: "Một túi đầy ý tưởng" }, note: { en: "Books that change how I see the world.", vi: "Những cuốn sách làm mình nhìn thế giới khác đi." }, kind: "reading", meta: "BOOKS · MARGINALIA" },
  { href: "/places", title: { en: "Away from the desk", vi: "Rời bàn làm việc" }, note: { en: "Some coordinates. A lot of little memories.", vi: "Vài tọa độ. Và rất nhiều ký ức nho nhỏ." }, kind: "places", meta: "PLACES · MEMORIES" },
] as const;

export default function HomePage() {
  return <main id="top" className={`world-page world-home ${styles.home}`}>
    <a className="skip-link" href="#collections">Skip to collections / Đến các góc nhỏ</a>
    <SiteHeader />
    <section className={styles.hero} aria-labelledby="home-title">
      <div className={styles.copy}>
        <p className={styles.eyebrow}><span className={styles.sparkle} aria-hidden="true">✳</span><LocalizedText text={{ en: "A SMALL CORNER OF THE INTERNET", vi: "MỘT GÓC NHỎ TRÊN INTERNET" }} /></p>
        <p className={styles.hello}><LocalizedText text={{ en: "Hello, I’m Khoi.", vi: "Chào bạn, mình là Khôi." }} /><svg viewBox="0 0 76 35" fill="none" aria-hidden="true"><path d="M2 13C24 2 53 5 65 21M55 18l12 6-2-13" /></svg></p>
        <h1 id="home-title"><LocalizedText text={{ en: "A little", vi: "Một vũ trụ" }} /><br /><em><LocalizedText text={{ en: "universe.", vi: "nho nhỏ." }} /></em><span className={styles.titleStar} aria-hidden="true">✧</span></h1>
        <p className={styles.intro}><LocalizedText text={{ en: "Built from data, curious thoughts, well-loved books, and the places that stay with me.", vi: "Được ghép từ dữ liệu, những ý nghĩ tò mò, vài cuốn sách thương, và những nơi mình nhớ." }} /></p>
        <div className={styles.actions}><Link href="/work" className={styles.primary}><LocalizedText text={{ en: "Discover my work", vi: "Khám phá công việc" }} /><ArrowUpRight size={17} aria-hidden="true" /></Link><a href="#collections" className={styles.secondary}><LocalizedText text={{ en: "Wander a little", vi: "Dạo một vòng nhé" }} /><ArrowDown size={15} aria-hidden="true" /></a></div>
        <div className={styles.identity}><Radio size={13} aria-hidden="true" /><span>DATA ENGINEER / ANALYST<span className={styles.identityPlace}>SÀI GÒN, EARTH</span></span></div>
      </div>
      <PersonalCosmos />
      <div className={styles.heroFoot}><span><span className="signal-dot" /><LocalizedText text={{ en: "Always a work in progress. Just like me.", vi: "Vẫn đang lớn lên từng ngày. Giống mình." }} /></span><span className={styles.handnote}><LocalizedText text={{ en: "Make yourself at home ↗", vi: "Cứ tự nhiên như ở nhà ↗" }} /></span></div>
    </section>
    <section className={styles.collections} id="collections" aria-labelledby="collections-title">
      <header className={styles.indexHeading}><div><p className={styles.eyebrow}><LocalizedText text={{ en: "DIFFERENT ORBITS. SAME CURIOSITY.", vi: "NHIỀU QUỸ ĐẠO. CHUNG MỘT SỰ TÒ MÒ." }} /></p><h2 id="collections-title"><LocalizedText text={{ en: "What makes up my world.", vi: "Những mảnh ghép của mình." }} /></h2></div><p className={styles.sectionNote}><LocalizedText text={{ en: "Pick somewhere to land.", vi: "Chọn một nơi để hạ cánh." }} /></p></header>
      <div className={styles.cardGrid}>{gateways.map((gateway) => <Link className={styles.card} data-kind={gateway.kind} href={gateway.href} key={gateway.href}>
        <div className={styles.cardTop}><span>{gateway.meta}</span><ArrowUpRight size={19} aria-hidden="true" /></div><OrbitSketch kind={gateway.kind} />
        <h3><LocalizedText text={gateway.title} /></h3><p><LocalizedText text={gateway.note} /></p>
      </Link>)}</div>
      <Link href="/about" className={styles.aboutLink}><span className={styles.smallStar} aria-hidden="true">✧</span><LocalizedText text={{ en: "And the human behind this little universe?", vi: "Còn người đứng sau vũ trụ nho nhỏ này?" }} /><span><LocalizedText text={{ en: "Meet Khoi", vi: "Làm quen với Khôi" }} /><ArrowUpRight size={16} aria-hidden="true" /></span></Link>
    </section>
    <ConstellationGarden /><ArchiveFooter />
  </main>;
}
