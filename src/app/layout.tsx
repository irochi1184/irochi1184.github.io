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

const titleText = `${site.name}（${site.nameEn}）| 新人研修・Java研修講師`;
// 検索で名前がヒットしやすいよう、説明文に氏名（スペース有無の両方）を明記
const descriptionText = `${site.nameNoSpace}（${site.name}）の公式サイト。個人事業主として企業の新人研修を専門に、Java を中心に IT 基礎・Web アプリ開発・インフラまで実践的に指導しています。`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: titleText,
  description: descriptionText,
  keywords: [
    "有田健一郎",
    "有田 健一郎",
    "Kenichiro Arita",
    "新人研修",
    "Java研修",
    "研修講師",
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
  creator: site.name,
  // 検索エンジンにインデックス・リンク追跡を許可
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
  openGraph: {
    title: titleText,
    description: descriptionText,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary",
    title: titleText,
    description: descriptionText,
  },
};

// 構造化データ（Person）：Google に「有田健一郎という人物のサイト」と伝える
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.nameNoSpace,
  alternateName: [site.name, site.nameEn],
  url: site.url,
  jobTitle: "新人研修講師 / エンジニア",
  description: descriptionText,
  sameAs: [site.contact.github].filter(Boolean),
  knowsAbout: [
    "Java",
    "Spring Boot",
    "PHP",
    "Laravel",
    "Docker",
    "AWS",
    "Linux",
    "MySQL",
    "新人研修",
    "エンジニア育成",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
