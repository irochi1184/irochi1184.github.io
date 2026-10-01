import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const titleText = `${site.name}（${site.nameEn}）| IT研修講師・エンジニア・iOSアプリ開発`;
const descriptionText = `${site.nameNoSpace}（${site.name}）のポートフォリオ。企業向けIT研修でJava・Web開発・クラウド・生成AIを担当し、個人ではSwiftUIでiOSアプリを開発してApp Storeで公開しています。`;

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
        alt: `${site.name}｜IT研修講師・エンジニア・iOSアプリ開発`,
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
  jobTitle: "IT研修講師 / エンジニア / iOSアプリ開発",
  description: descriptionText,
  sameAs: [site.contact.github].filter(Boolean),
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
