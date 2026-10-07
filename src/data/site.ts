// サイト全体の文言・実績・連絡先をまとめています。
// 内容を更新するときは、まずこのファイルを編集してください。

export const site = {
  url: "https://irochi1184.github.io",
  googleVerification: "16c2ZYnc_6VCGG3Wvbk57bvt4-dhByaNlfmGWftOkbU",
  name: "有田 健一郎",
  nameNoSpace: "有田健一郎",
  nameEn: "Kenichiro Arita",
  role: "IT・生成AI研修講師 / エンジニア",
  tagline: ["学びを、", "使える力に。"],
  lead: "IT研修で人を育て、自分でもプロダクトをつくる。教える経験と開発の実践をつなぎ、生成AIを仕事で使いこなすための学びへ広げています。",
  contact: {
    email: "",
    github: "https://github.com/irochi1184",
    x: "",
    note: "新人向けIT研修、生成AI活用研修、教材・演習設計に取り組んでいます。公開しているコードや開発の活動は、GitHubでご覧いただけます。",
  },
};

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


// 取り組みの計画。提供済みの実績とは分けて掲載します。
export const nextSteps = [
  { phase: "01", status: "取り組み中", title: "実務から、研修を磨く。", description: "IT・生成AI研修の登壇を続け、受講者がつまずく場面や業務での使い方を教材・演習に反映。Claude Code / Codexを使った実践も深めています。" },
  { phase: "02", status: "準備中", title: "生成AI研修を、自分の商品に。", description: "非エンジニア向けの業務活用を中心に、業務の棚卸し、プロンプト設計、情報管理、実践演習を組み合わせた法人向け研修を設計しています。" },
  { phase: "03", status: "今後の展開", title: "学んだ先の、定着まで。", description: "研修後も業務で使い続けられるよう、効果測定と伴走支援へ広げていく計画です。教材づくりと個人開発も継続し、実践から学びを更新していきます。" },
];


export const offerings = [
  { n: "01", icon: "basics", en: "IT EDUCATION", title: "基礎から、開発の全体像まで。", text: "新入社員・未経験者向けのIT研修を担当。Java、Web開発、データベース、クラウドをつなぎ、設計・実装・テスト・発表まで支援します。", tags: ["Java / Spring Boot", "SQL / MySQL", "Linux / Docker / AWS"], note: "演習支援・コードレビュー・設計書レビュー" },
  { n: "02", icon: "ai", en: "GENERATIVE AI", title: "AIを、日々の仕事に近づける。", text: "非エンジニアにも伝わる言葉で、生成AIの基礎と業務活用を解説。質問の組み立て方や情報の扱い方を、手を動かす演習とともに伝えます。", tags: ["生成AIの基礎", "プロンプト設計", "業務活用"], note: "法人向けの研修商品・実践教材を準備中" },
  { n: "03", icon: "mobile", en: "PRODUCT DEVELOPMENT", title: "自分でつくり、公開して育てる。", text: "SwiftUIによるiOSアプリを企画から公開・改善まで一貫して開発。Webシステムの実装やテストにも携わり、教える内容を実践で更新しています。", tags: ["SwiftUI / WidgetKit", "Webアプリ開発", "テスト / CI/CD"], note: "App Storeで2つのアプリを公開・運用" },
];
