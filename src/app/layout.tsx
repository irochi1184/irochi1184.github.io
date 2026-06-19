import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

// 日本語サイトのため Noto Sans JP を利用
const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} | 新人研修・Java研修講師`,
  description: site.lead,
  keywords: [
    "新人研修",
    "Java研修",
    "Spring Boot",
    "PHP",
    "Laravel",
    "Docker",
    "AWS",
    "Linux",
    "MySQL",
    "エンジニア育成",
    "個人事業主",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} | 新人研修・Java研修講師`,
    description: site.tagline.join(""),
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
