import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// 静的エクスポート（output: export）でファイルとして出力するために必須
export const dynamic = "force-static";

// /sitemap.xml を自動生成（検索エンジンにページ構成を伝える）
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
