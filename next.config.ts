import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages 向けに静的 HTML としてエクスポートする
  output: "export",
  // 静的エクスポートでは next/image の最適化サーバが使えないため無効化
  images: { unoptimized: true },
  // 各ページを /path/ 形式で出力し、GitHub Pages で index.html が解決されるようにする
  trailingSlash: true,
};

export default nextConfig;
