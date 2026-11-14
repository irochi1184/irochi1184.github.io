import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { careerHighlights, skillGroups, site, trainingInquiryLink, works } from "@/data/site";

export default function Home() {
  const inquiry = trainingInquiryLink();
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
              <dl className="training-details">
                <dt>演習例</dt>
                <dd>備品の貸出を記録するWebアプリを作ります。備品名と借りた人を入力すると一覧に反映される画面をJavaで実装し、未入力のまま登録したときの動作もテストします。</dd>
                <dt>受講後に目指すこと</dt>
                <dd>簡単な業務要件を画面とデータベースの項目に落とし込み、登録機能を実装できます。期待した動作とテスト結果を照らし合わせ、修正した箇所を説明できます。</dd>
              </dl>
            </article>
            <article className="training-card">
              <p className="role">業務で生成AIを使う方向け</p>
              <h3>生成AI活用研修</h3>
              <p>生成AIの基礎と業務での使い方を教えています。業務のどの場面で使うか、質問をどう組み立てるか、入力する情報をどう扱うかを、演習を通して伝えます。</p>
              <dl className="training-details">
                <dt>演習例</dt>
                <dd>架空の会議メモから、担当者・期限・作業内容をまとめた一覧を作ります。生成AIに出力形式を指定し、メモと照合して、期限が決まっていない項目には「未定」と記します。</dd>
                <dt>受講後に目指すこと</dt>
                <dd>目的に合う指示を書き、入力してよい情報を選べます。回答を元の資料と照合し、抜けや推測を修正して、社内で共有できる下書きに整えられます。</dd>
              </dl>
            </article>
          </div>
          <p id="next" className="training-note">現在は、非エンジニア向けの法人研修として、業務の棚卸しから始める独自のプログラムと実践教材を準備しています。</p>
          {inquiry && (
            <aside id="training-contact" className="training-contact" aria-labelledby="inquiry-heading">
              <div>
                <h3 id="inquiry-heading">研修のご相談</h3>
                <p>受講される方や、研修で身につけてほしいことをお聞かせください。人数や時期は、決まっている範囲でお知らせください。</p>
              </div>
              <div className="inquiry-action">
                <a className="primary" href={inquiry}>{site.contact.trainingForm ? "相談フォームを開く" : "メールで相談する"} <span aria-hidden="true">↗</span></a>
                {!site.contact.trainingForm && <small>{site.contact.email}</small>}
              </div>
            </aside>
          )}
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
                  <Image className="app-icon" src={work.image} alt="" width={84} height={84} />
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
