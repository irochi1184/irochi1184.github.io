// サイト全体のコンテンツをこのファイルに集約。
// 文言・実績・連絡先を変えたい場合は基本ここだけを編集すればよい。

export const site = {
  url: "https://irochi1184.github.io",
  name: "有田 健一郎",
  nameNoSpace: "有田健一郎",
  nameEn: "Kenichiro Arita",
  role: "新人研修講師 / エンジニア",
  tagline: ["企業の新人を、", "戦力になる", "エンジニアへ。"],
  lead: "Java を中心とした実践的な新人研修。未経験から、自走できるエンジニアへ。",
  contact: {
    email: "", // 例: "ariken3602@gmail.com"（公開する場合のみ表示される）
    github: "https://github.com/irochi1184",
    note: "研修のご相談・お見積もりはお気軽に。",
  },
};

// 上部に流すキーワード（マーキー表示）
export const marquee = [
  "Java",
  "Spring Boot",
  "PHP",
  "Laravel",
  "Docker",
  "AWS",
  "Linux",
  "MySQL",
  "ネットワーク",
  "新人研修",
];

// ヒーロー下の指標（実数に合わせて編集可）
export const stats = [
  { value: "Java", label: "中心の新人研修" },
  { value: "実践", label: "演習ベースで指導" },
  { value: "現場", label: "経験にもとづく" },
];

// 提供している研修メニュー（icon は Icons.tsx のキー）
export const services = [
  {
    icon: "java",
    title: "Java 新人研修",
    badge: "主力",
    description: "未経験から基礎・オブジェクト指向まで、演習中心で自走力を育てる。",
    tags: ["Java", "OOP", "演習"],
  },
  {
    icon: "web",
    title: "Web アプリ開発",
    description: "Spring Boot × MySQL で業務システム開発の流れを体感。",
    tags: ["Spring Boot", "MySQL", "REST"],
  },
  {
    icon: "php",
    title: "PHP / Laravel",
    description: "PHP の基礎から Laravel の MVC 開発まで実装で学ぶ。",
    tags: ["PHP", "Laravel", "MVC"],
  },
  {
    icon: "basics",
    title: "IT 基礎知識",
    description: "ネットワーク・DB など、エンジニアの土台をやさしく。",
    tags: ["IT 全般", "ネットワーク", "DB"],
  },
  {
    icon: "infra",
    title: "インフラ / クラウド",
    description: "Linux・Docker・AWS を実機演習で身につける。",
    tags: ["Linux", "Docker", "AWS"],
  },
  {
    icon: "db",
    title: "データベース",
    description: "MySQL で SQL・設計・トランザクションを実習。",
    tags: ["MySQL", "SQL", "設計"],
  },
];

// 技術スタック
export const skillGroups = [
  { category: "言語 / FW", items: ["Java", "Spring Boot", "PHP", "Laravel", "SwiftUI"] },
  { category: "データベース", items: ["MySQL", "SQL / 設計"] },
  { category: "インフラ", items: ["Linux", "Docker", "AWS"] },
  { category: "基礎領域", items: ["IT 基礎", "ネットワーク", "Web 構築"] },
];

// 個人開発などの実績
export const works = [
  {
    title: "KaKeBo",
    type: "iOS アプリ / 個人開発",
    description: "SwiftUI 製の家計簿アプリ。CloudKit 共有・レシート OCR・課金を実装し App Store で運用中。",
    tags: ["Swift", "SwiftUI", "CloudKit"],
    image: "/kakebo-icon.png",
    link: "https://apps.apple.com/us/app/kakebo-%E3%82%B7%E3%83%B3%E3%83%97%E3%83%AB%E5%AE%B6%E8%A8%88%E7%B0%BF-%E6%94%AF%E5%87%BA%E7%AE%A1%E7%90%86%E3%82%A2%E3%83%97%E3%83%AA/id6754249349",
    linkLabel: "App Store で見る",
  },
];
