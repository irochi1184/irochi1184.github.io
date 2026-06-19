// サイト全体のコンテンツをこのファイルに集約。
// 文言・実績・連絡先を変えたい場合は基本ここだけを編集すればよい。

export const site = {
  name: "有田 健一郎",
  nameEn: "Kenichiro Arita",
  role: "新人研修講師 / エンジニア",
  tagline: "企業の新人を、現場で戦力になるエンジニアへ。",
  intro:
    "個人事業主として、企業の新人研修を専門に行っています。Java を中心としたプログラミング研修から、IT 基礎知識・ネットワーク・データベース・インフラまで、現場経験にもとづいた実践的なカリキュラムで、未経験の新入社員を独り立ちできるエンジニアへと育成します。",
  // 連絡先：公開したいものだけ true / 値を埋めてください
  contact: {
    email: "", // 例: "ariken3602@gmail.com"（公開する場合のみ）
    github: "https://github.com/irochi1184",
    note: "研修のご相談・お見積もりはお気軽にどうぞ。オンライン／オンサイトどちらにも対応します。",
  },
};

// 提供している研修メニュー
export const services = [
  {
    title: "Java 新人研修",
    badge: "主力",
    description:
      "プログラミング未経験の新入社員を対象に、Java の基礎文法からオブジェクト指向、例外処理、コレクションまでを体系的に指導。手を動かす演習を中心に、自走できるレベルまで引き上げます。",
    tags: ["Java 基礎", "オブジェクト指向", "演習中心"],
  },
  {
    title: "Web アプリ開発研修",
    description:
      "Spring Boot を用いた Web アプリケーション開発を、MySQL との連携を含めて実装演習。MVC・REST・DB アクセスを通して、業務システム開発の流れを体感できます。",
    tags: ["Spring Boot", "MySQL", "REST API"],
  },
  {
    title: "PHP / Laravel 研修",
    description:
      "PHP の基礎から Laravel を用いた MVC フレームワーク開発まで。ルーティング・Eloquent・認証など、現場で使う機能を題材に実践力を養います。",
    tags: ["PHP", "Laravel", "MVC"],
  },
  {
    title: "IT 基礎知識研修",
    description:
      "コンピュータの仕組み、ネットワーク（TCP/IP・HTTP）、データベースの基礎など、エンジニアに必須の土台を非エンジニア出身者にもわかりやすく解説します。",
    tags: ["IT 全般", "ネットワーク", "DB 基礎"],
  },
  {
    title: "インフラ / クラウド研修",
    description:
      "Linux の基本操作から Docker によるコンテナ、AWS を用いたクラウド環境の構築まで。開発環境・本番環境の考え方を実機演習で身につけます。",
    tags: ["Linux", "Docker", "AWS"],
  },
  {
    title: "データベース研修",
    description:
      "MySQL を題材に、SQL の基礎から設計（正規化）、JOIN、トランザクションまでを実習。Web アプリと組み合わせた実践的なデータ操作を学びます。",
    tags: ["MySQL", "SQL", "DB 設計"],
  },
];

// 技術スタック（スキルバッジ）
export const skillGroups = [
  {
    category: "言語 / フレームワーク",
    items: ["Java", "Spring Boot", "PHP", "Laravel", "Swift / SwiftUI"],
  },
  {
    category: "データベース",
    items: ["MySQL", "SQL / DB 設計"],
  },
  {
    category: "インフラ / クラウド",
    items: ["Linux", "Docker", "AWS"],
  },
  {
    category: "基礎領域",
    items: ["IT 基礎知識", "ネットワーク", "Web アプリ構築"],
  },
];

// 個人開発などの実績
export const works = [
  {
    title: "KaKeBo（家計簿アプリ）",
    type: "iOS アプリ / 個人開発",
    description:
      "SwiftUI で開発した家計簿アプリ。CloudKit による共有家計簿、レシート OCR、ウィジェット、StoreKit 2 課金などを実装。App Store でリリース・運用しています。",
    tags: ["Swift", "SwiftUI", "CloudKit", "App Store"],
  },
];

// 研修実績の数値（任意。実数に合わせて編集してください）
export const stats = [
  { value: "Java", label: "中心の新人研修" },
  { value: "実践", label: "演習中心のカリキュラム" },
  { value: "現場", label: "経験にもとづく指導" },
];
