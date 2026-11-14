import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { careerHighlights, skillGroups, works } from "@/data/site";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">本文へ移動</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <section id="services" className="wrap section" aria-labelledby="training-title">
          <div className="section-head"><h2 id="training-title">法人向け研修事業</h2></div>
          <div className="training-grid">
            <article className="training-card">
              <p className="role">新入社員・開発未経験者向け</p>
              <h3>新人IT研修</h3>
              <p>Javaとデータベースの基礎から、Webアプリを設計・実装する演習まで担当しています。演習では設計書とコードを確認し、受講者の疑問に答えながらテスト・成果発表まで支援します。</p>
            </article>
            <article className="training-card">
              <p className="role">業務で生成AIを使う方向け</p>
              <h3>生成AI活用研修</h3>
              <p>生成AIの基礎と業務での使い方を教えています。業務のどの場面で使うか、質問をどう組み立てるか、入力する情報をどう扱うかを、演習を通して伝えます。</p>
            </article>
          </div>
          <p id="next" className="training-note">現在は、非エンジニア向けの法人研修として、業務の棚卸しから始める独自のプログラムと実践教材を準備しています。</p>
        </section>
        <section id="works" className="wrap section" aria-labelledby="works-title">
          <div className="section-head">
            <h2 id="works-title">公開アプリ</h2>
            <p>企画から実装、App Storeでの公開・運用まで個人で担当しています。</p>
          </div>
          <div className="app-grid">
            {works.map((work) => (
              <article key={work.title} className={`app-card ${work.visual === "clock" ? "clock" : "kakebo"}`}>
                <div className="app-heading">
                  <div className="app-mark" aria-hidden="true">
                    {work.image
                      ? <Image src={work.image} alt="" width={84} height={84} />
                      : "12:48:06"}
                </div>
                  <h3 lang="en">{work.title}</h3>
                </div>
                <p>{work.description}</p>
                <ul className="tags" aria-label="開発技術">
                  {work.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <a className="app-link" href={work.link} aria-label={`${work.title}をApp Storeで見る`}>{work.linkLabel} <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
        </section>
        <section id="experience" className="wrap section" aria-labelledby="history-title">
          <div className="section-head"><h2 id="history-title">経歴と担当業務</h2></div>
          {careerHighlights.toReversed().map((entry) => (
            <article key={entry.title} className="history-row">
              <p className="period">{entry.period}</p>
              <div><h3>{entry.title}</h3><p>{entry.description}</p></div>
            </article>
          ))}
        </section>
        <section id="skills" className="wrap section" aria-labelledby="skills-title">
          <div className="section-head"><h2 id="skills-title">研修・開発で扱う技術</h2></div>
          {skillGroups.map((group) => (
            <div key={group.category} className="skills-row">
              <h3>{group.category}</h3><p>{group.items.join(" ／ ")}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
