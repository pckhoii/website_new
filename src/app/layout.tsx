import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, JetBrains_Mono, Newsreader } from "next/font/google";
import { RouteTransition } from "@/components/route-transition";
import "./globals.css";
import "./archive.css";
import "./artifacts.css";
import "./archive-ui.css";

const display = Newsreader({ variable: "--font-display", subsets: ["latin", "vietnamese"], display: "swap" });
const body = Be_Vietnam_Pro({ variable: "--font-body", subsets: ["latin", "vietnamese"], weight: ["300", "400", "500", "600"], display: "swap" });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin", "vietnamese"], weight: ["400", "500"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "Phạm Công Nguyễn Khôi — Universe of Signals", template: "%s — Universe of Signals" },
  description: "Portfolio of Phạm Công Nguyễn Khôi, a Data Engineer and Data Analyst working with banking BI, data pipelines, operational analytics, SQL, Python, PySpark, and Power BI.",
  openGraph: { title: "Phạm Công Nguyễn Khôi — Data Engineer & Data Analyst", description: "Banking BI systems, data pipelines, operational analytics, and selected data projects.", type: "website" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#07090d", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const languageBootstrap = `try{const l=localStorage.getItem('personal-universe-language');if(l==='vi'){document.documentElement.dataset.language='vi';document.documentElement.lang='vi'}}catch(e){}`;
  return <html lang="en" data-language="en" data-scroll-behavior="smooth" suppressHydrationWarning className={`${display.variable} ${body.variable} ${mono.variable}`}><head><script id="language-bootstrap" dangerouslySetInnerHTML={{ __html: languageBootstrap }} /></head><body><RouteTransition>{children}</RouteTransition></body></html>;
}
