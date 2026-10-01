// サイト全体の文言・実績・連絡先をまとめています。
// 内容を更新するときは、まずこのファイルを編集してください。

export const site = {
  url: "https://irochi1184.github.io",
  googleVerification: "16c2ZYnc_6VCGG3Wvbk57bvt4-dhByaNlfmGWftOkbU",
  name: "有田 健一郎",
  nameNoSpace: "有田健一郎",
  nameEn: "Kenichiro Arita",
  role: "IT研修講師 / エンジニア / iOSアプリ開発",
  tagline: ["教える仕事と、", "つくる仕事を、", "どちらも続けています。"],
  lead: "企業向けのIT研修では、Java・Web開発・クラウド基礎などを担当しています。個人ではiOSアプリを企画・開発し、App Storeで公開しています。",
  contact: {
    email: "",
    github: "https://github.com/irochi1184",
    note: "IT研修の講師業務や開発に関するご相談がありましたら、GitHubからご連絡ください。",
  },
};

export const marquee = [
  "Java",
  "Spring Boot",
  "生成AI",
  "AWS",
  "Docker",
  "MySQL",
  "SwiftUI",
  "WidgetKit",
  "App Store",
  "新人研修",
];

export const stats = [
  { value: "2023 -", label: "IT研修講師として活動" },
  { value: "App Store", label: "iOSアプリを公開・運用" },
  { value: "Java / AI", label: "企業研修で担当" },
];

export const services = [
  {
    icon: "basics",
    title: "企業向けIT研修",
    badge: "主な業務",
    description:
      "新入社員や未経験の方を対象に、ITの基礎から開発演習まで担当しています。説明だけで終わらず、自分で手を動かして理解できる進め方を大切にしています。",
    tags: ["新人研修", "演習支援", "コードレビュー"],
  },
  {
    icon: "java",
    title: "Java / Web開発研修",
    description:
      "Javaの基礎、オブジェクト指向、Spring Boot、MySQLを使ったWebアプリ開発まで指導しています。設計・実装・テストまで一連の流れを扱います。",
    tags: ["Java", "Spring Boot", "MySQL"],
  },
  {
    icon: "infra",
    title: "クラウド・インフラ基礎",
    description:
      "Linux、Docker、AWS、ネットワークなど、開発者にも必要になる基盤分野を扱います。初学者がつまずきやすい部分をかみ砕いて説明します。",
    tags: ["Linux", "Docker", "AWS"],
  },
  {
    icon: "ai",
    title: "生成AI活用研修",
    description:
      "生成AIの基本的な考え方から、業務での使い方、質問の組み立て方まで扱います。非エンジニアを含む受講者にも分かる言葉で進めます。",
    tags: ["生成AI", "業務活用", "プロンプト"],
  },
  {
    icon: "mobile",
    title: "iOSアプリ開発",
    description:
      "SwiftUIを使って、企画・実装・App Store公開・改善まで自分で行っています。公開後の利用者の声も見ながら継続して更新しています。",
    tags: ["SwiftUI", "WidgetKit", "App Store"],
  },
  {
    icon: "web",
    title: "開発・テスト支援",
    description:
      "業務向けWebシステムの実装や、テスト結果の集計・可視化、自動テストなども経験しています。必要に応じて調査から実装まで対応します。",
    tags: ["Web開発", "自動テスト", "可視化"],
  },
];

export const skillGroups = [
  {
    category: "研修・指導",
    items: ["新人研修", "生成AI研修", "演習支援", "コードレビュー", "設計書レビュー"],
  },
  {
    category: "Web開発",
    items: ["Java", "Spring Boot", "PHP", "Laravel", "HTML", "CSS", "JavaScript"],
  },
  {
    category: "iOS",
    items: ["Swift", "SwiftUI", "SwiftData", "CloudKit", "WidgetKit", "StoreKit"],
  },
  {
    category: "基盤 / 開発環境",
    items: ["MySQL", "Linux", "Docker", "AWS", "GitHub", "Jenkins"],
  },
  {
    category: "テスト",
    items: ["Mock", "Selenide", "DBUnit", "単体テスト", "結合テスト"],
  },
];

export const works = [
  {
    title: "KaKeBo",
    type: "iOSアプリ / 個人開発",
    description:
      "「すぐ記録できる」をテーマにした家計簿アプリです。支出入力、予算管理、グラフ、レシート読み取り、ウィジェット、iCloudバックアップなどを実装し、App Storeで公開・運用しています。",
    tags: ["SwiftUI", "SwiftData", "CloudKit"],
    visual: "image",
    image: "/kakebo-icon.png",
    link: "https://apps.apple.com/jp/app/kakebo-%E3%82%B7%E3%83%B3%E3%83%97%E3%83%AB%E5%AE%B6%E8%A8%88%E7%B0%BF-%E6%94%AF%E5%87%BA%E7%AE%A1%E7%90%86%E3%82%A2%E3%83%97%E3%83%AA/id6754249349",
    linkLabel: "App Storeで見る",
  },
  {
    title: "SecondClock",
    type: "iOSアプリ / 個人開発",
    description:
      "現在時刻を秒まで大きく表示する時計アプリです。全画面・横向き表示、ホーム画面とロック画面のウィジェット、プリセット切替、背景や書体のカスタマイズなどを実装しています。",
    tags: ["SwiftUI", "WidgetKit", "StoreKit"],
    visual: "clock",
    image: "",
    link: "https://apps.apple.com/jp/app/secondclock-%E7%A7%92%E3%81%BE%E3%81%A7%E8%A6%8B%E3%81%88%E3%82%8B%E6%99%82%E8%A8%88/id6806014208",
    linkLabel: "App Storeで見る",
  },
];

export const careerHighlights = [
  {
    period: "2023 -",
    title: "企業向けIT研修",
    description:
      "新人研修を中心に、Java、Webアプリ開発、データベース、クラウドなどを担当。演習中の質問対応、コードレビュー、設計書の確認まで行っています。",
  },
  {
    period: "2025 - 2026",
    title: "システム開発・テスト",
    description:
      "テスト結果を取り込み、一覧・絞り込み・傾向グラフを確認できる社内向けシステムの構築や、テスト業務に携わりました。",
  },
  {
    period: "2026",
    title: "生成AI研修・システム構築演習",
    description:
      "生成AIの基礎・業務活用を扱う研修や、要件定義から実装・テスト・成果発表まで行うシステム構築演習を担当しました。",
  },
];
