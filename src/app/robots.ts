import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// 静的エクスポート（output: export）でファイルとして出力するために必須
export const dynamic = "force-static";

// /robots.txt を自動生成。全クローラーに全許可し、sitemap を案内する
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
