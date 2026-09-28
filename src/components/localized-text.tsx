import type { Localized } from "@/lib/content";

export function LocalizedText({ text }: { text: Localized }) {
  return (
    <>
      <span className="lang-en">{text.en}</span>
      <span className="lang-vi" lang="vi">{text.vi}</span>
    </>
  );
}
