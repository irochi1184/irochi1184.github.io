import { site, trainingInquiryLink } from "@/data/site";

const exerciseSteps = [
  ["設計", "要件定義・設計書のレビュー"],
  ["実装", "演習中の質問対応・コードレビュー"],
  ["検証", "テスト・成果発表の支援"],
];

export default function Hero() {
  return (
    <section id="about" className="wrap hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="role">法人向けIT・生成AI研修講師 ／ エンジニア</p>
        <h1 id="hero-title">{site.name}</h1>
        <p className="roman" lang="en">{site.nameEn}</p>
        <p className="lead">企業の新入社員にWebアプリ開発を教えています。生成AIの業務活用研修にも登壇し、自身でもiOSアプリを開発・運用しています。</p>
        <div className="hero-actions">
          <a className="primary" href="#services">研修内容を見る <span aria-hidden="true">↓</span></a>
          {trainingInquiryLink() && <a className="text-link" href="#training-contact">研修のご相談 <span aria-hidden="true">↓</span></a>}
        </div>
      </div>
      <article className="case-panel">
        <p className="role">研修実績</p>
        <h2>システム構築演習</h2>
        <p>受講者がシステムをつくり、発表するまでの各工程を担当しました。</p>
        <dl>
          {exerciseSteps.map(([stage, support]) => (
            <div className="case-row" key={stage}><dt>{stage}</dt><dd>{support}</dd></div>
          ))}
        </dl>
      </article>
    </section>
  );
}
