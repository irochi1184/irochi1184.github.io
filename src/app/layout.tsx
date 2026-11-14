import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/data/site";

const titleText = `${site.name}｜企業向けIT・生成AI研修と開発実績`;
const descriptionText = `${site.nameNoSpace}のポートフォリオ。新入社員向けのWeb開発研修、生成AIの業務活用研修、システム構築演習での担当内容と、個人開発したiOSアプリを紹介します。`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: titleText,
  description: descriptionText,
  keywords: [
    "有田健一郎",
    "有田 健一郎",
    "Kenichiro Arita",
    "IT研修講師",
    "新人研修",
    "Java研修",
    "Spring Boot",
    "生成AI研修",
    "AWS",
    "Docker",
    "MySQL",
    "SwiftUI",
    "iOSアプリ開発",
    "App Store",
    "エンジニア育成",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
  ...(site.googleVerification
    ? { verification: { google: site.googleVerification } }
    : {}),
  openGraph: {
    title: titleText,
    description: descriptionText,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${site.name}｜IT・生成AI研修講師 / エンジニア`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titleText,
    description: descriptionText,
    images: ["/og.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.nameNoSpace,
  alternateName: [site.name, site.nameEn],
  url: site.url,
  jobTitle: site.role,
  description: descriptionText,
  sameAs: [site.contact.github, site.contact.x].filter(Boolean),
  knowsAbout: [
    "Java",
    "Spring Boot",
    "生成AI",
    "AWS",
    "Docker",
    "Linux",
    "MySQL",
    "Swift",
    "SwiftUI",
    "WidgetKit",
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
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
