import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { LocalizedText } from "@/components/localized-text";
import { navigation } from "@/lib/content";

type SiteHeaderProps = { activeSection?: string };

export function SiteHeader({ activeSection }: SiteHeaderProps) {
  return (
    <header className="site-header" data-active-section={activeSection}>
      <Link className="site-mark focus-ring" href="/" aria-label="Universe of Signals, home">
        <span aria-hidden="true" />
        Universe of Signals
      </Link>

      <div className="desktop-header-tools">
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link className="nav-link focus-ring" data-section={item.href.slice(1)} aria-current={activeSection === item.href.slice(1) ? "page" : undefined} href={item.href} key={item.href}>
              <LocalizedText text={item.label} />
            </Link>
          ))}
        </nav>
        <LanguageSwitcher />
      </div>

      <div className="mobile-header-tools">
        <LanguageSwitcher />
        <details className="mobile-nav">
          <summary className="focus-ring">
            <span><span className="lang-en">Menu</span><span className="lang-vi" lang="vi">Mục</span></span>
            <span className="menu-lines" aria-hidden="true" />
          </summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <Link className="focus-ring" aria-current={activeSection === item.href.slice(1) ? "page" : undefined} href={item.href} key={item.href}>
                <span aria-hidden="true">0{index + 1}</span>
                <LocalizedText text={item.label} />
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
