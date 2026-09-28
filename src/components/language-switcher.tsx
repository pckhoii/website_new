"use client";

import { useSyncExternalStore } from "react";

type Language = "en" | "vi";
const storageKey = "personal-universe-language";

export function LanguageSwitcher() {
  const language = useSyncExternalStore(
    (onChange) => {
      window.addEventListener("personal-universe-language-change", onChange);
      return () => window.removeEventListener("personal-universe-language-change", onChange);
    },
    () => document.documentElement.dataset.language === "vi" ? "vi" : "en",
    () => "en",
  );

  const selectLanguage = (nextLanguage: Language) => {
    if (nextLanguage === language) return;

    const applyLanguage = () => {
      document.documentElement.dataset.language = nextLanguage;
      document.documentElement.lang = nextLanguage;
      try { localStorage.setItem(storageKey, nextLanguage); } catch { /* Keep the session language even when storage is unavailable. */ }
      window.dispatchEvent(new Event("personal-universe-language-change"));
    };
    const documentWithTransitions = document as Document & {
      startViewTransition?: (update: () => void) => void;
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) applyLanguage();
    else if (documentWithTransitions.startViewTransition) documentWithTransitions.startViewTransition(applyLanguage);
    else applyLanguage();
  };

  return (
    <div className="language-switcher" aria-label="Language / Ngôn ngữ">
      <button type="button" className="focus-ring" aria-pressed={language === "en"} onClick={() => selectLanguage("en")}>EN</button>
      <span aria-hidden="true">/</span>
      <button type="button" className="focus-ring" aria-pressed={language === "vi"} onClick={() => selectLanguage("vi")}>VI</button>
    </div>
  );
}
