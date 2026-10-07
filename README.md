# irochi1184.github.io

有田 健一郎 のポートフォリオサイト（IT・生成AI研修講師 / エンジニア）。

Next.js（App Router）で構築し、静的エクスポートして **GitHub Pages** で公開しています。

## 技術構成

- Next.js 16（App Router / `output: "export"` による静的エクスポート）
- React 19 / TypeScript
- Tailwind CSS v4
- Noto Sans JP（`next/font`）

## 開発

```bash
npm ci
npm run dev      # http://localhost:3000 で確認
npm run build    # out/ に静的ファイルを生成
```

## コンテンツの編集

サイトの文言・研修メニュー・実績・連絡先は **`src/data/site.ts`** に集約しています。
基本的にこのファイルだけを編集すれば内容を更新できます。

- `site.contact.github` … 活動紹介のGitHubリンク
- `offerings` … 支援領域のカード
- `nextSteps` … 取り組み・準備中の計画
- `skillGroups` … 技術スタックのバッジ
- `works` … 開発実績
- `careerHighlights` … 経歴
- `site.contact.email` / `site.contact.x` … 連絡先の保管欄（現時点では未設定・表示なし）

## デプロイ

`main` ブランチへ push すると、GitHub Actions（`.github/workflows/deploy.yml`）が
自動でビルドし GitHub Pages へデプロイします。

初回のみ GitHub リポジトリの **Settings → Pages → Build and deployment → Source** を
**「GitHub Actions」** に設定してください。

公開URL: https://irochi1184.github.io/

ビルドは `next build --webpack` を使用しています。Next.js 16.2.9 のTurbopackで日本語Google Fontsの解決に失敗するため、検証済みのWebpackで静的出力します。
