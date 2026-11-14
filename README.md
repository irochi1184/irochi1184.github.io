# irochi1184.github.io

有田 健一郎 のポートフォリオサイト（IT・生成AI研修講師 / エンジニア）。

Next.js（App Router）で構築し、静的エクスポートして **GitHub Pages** で公開しています。

## 技術構成

- Next.js 16（App Router / `output: "export"` による静的エクスポート）
- React 19 / TypeScript
- グローバルCSSと端末の日本語フォント

## 開発

```bash
npm ci
npm run dev      # http://localhost:3000 で確認
npm run build    # out/ に静的ファイルを生成
```

## コンテンツの編集

氏名、公開アプリ、経歴、技術一覧、GitHubリンクは `src/data/site.ts` で管理します。
冒頭の研修実績は `src/components/Hero.tsx`、研修事業の紹介は `src/app/page.tsx`、配色とレイアウトは `src/app/globals.css` を編集してください。

## デプロイ

`main` ブランチへ push すると、GitHub Actions（`.github/workflows/deploy.yml`）が
自動でビルドし GitHub Pages へデプロイします。

初回のみ GitHub リポジトリの **Settings → Pages → Build and deployment → Source** を
**「GitHub Actions」** に設定してください。

公開URL: https://irochi1184.github.io/
