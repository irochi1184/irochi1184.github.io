import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { ArrowIcon, GithubIcon, serviceIcons } from "@/components/Icons";
import { site, skillGroups, works, careerHighlights, nextSteps, offerings } from "@/data/site";



function SectionHeading({ number, en, children }: { number: string; en: string; children: React.ReactNode }) {
  return <div className="section-heading"><p className="eyebrow"><span>{number}</span>{en}</p><h2>{children}</h2></div>;
}

export default function Home() {
  return <>
    <a className="skip-link" href="#main-content">本文へ移動</a>
    <Header />
    <main id="top">
      <Hero />
      <section id="about" className="section container about-grid">
        <div><SectionHeading number="01" en="ABOUT">教える人であり、<br />つくる人でありたい。</SectionHeading><p className="section-side-note">技術を知ることと、<br />使えることの間をつなぐ。</p></div>
        <div id="main-content" tabIndex={-1} className="about-content">
          <p className="about-intro">有田 健一郎<span>Kenichiro Arita / irochi</span></p>
          <p>企業向けIT研修を中心に活動する講師・エンジニアです。2023年から、新入社員や未経験の方に、ITの基礎からWebアプリ開発までを教えています。</p>
          <p>大切にしているのは、受講者が自分の手で考え、動かし、「なぜこうなるのか」を理解すること。質問対応、コードレビュー、設計書の確認を通して、学んだ知識を使える状態へつなぎます。</p>
          <p>自分でもiOSアプリを開発し、App Storeで公開・運用しています。現在はその経験を生成AI研修にもつなげ、実際の業務に役立つ教材づくりと、法人向け研修の設計に取り組んでいます。</p>
          <div className="about-principle"><span aria-hidden="true">↗</span><p>説明して終わりにせず、<br /><strong>自分でできる、その先まで。</strong></p></div>
        </div>
      </section>
      <section id="services" className="services-section section">
        <div className="container">
          <div className="section-top"><SectionHeading number="02" en="WHAT I DO">学びと実践を、つなぐ仕事。</SectionHeading><p className="section-description">研修の現場と、開発の現場。<br />両方の経験を生かして支援します。</p></div>
          <div className="services-grid">{offerings.map(item => { const Icon = serviceIcons[item.icon]; return <article className="service-card" key={item.n}>
            <div className="service-top"><span>{item.n} /</span><Icon aria-hidden="true" /></div><p className="eyebrow">{item.en}</p><h3>{item.title}</h3><p className="service-description">{item.text}</p><ul className="tag-list">{item.tags.map(tag => <li key={tag}>{tag}</li>)}</ul><p className="service-note">{item.note}</p>
          </article>; })}</div>
        </div>
      </section>
      <section id="works" className="section container">
        <div className="section-top"><SectionHeading number="03" en="SELECTED WORKS">小さな不便を、プロダクトに。</SectionHeading><p className="section-description">企画・実装・公開・改善まで。<br />個人で開発したiOSアプリです。</p></div>
        <div className="works-grid">{works.map((work, i) => <article key={work.title} className="work-card">
          <a className={`work-visual ${i === 0 ? "visual-kakebo" : "visual-clock"}`} href={work.link} target="_blank" rel="noopener noreferrer" aria-label={`${work.title}をApp Storeで見る（新しいタブ）`}>
            <span className="visual-number">0{i + 1} / PERSONAL PRODUCT</span>
            {i === 0 ? <div className="kakebo-art"><Image src="/kakebo-icon.png" alt="" width={80} height={80} /><p>KaKeBo</p><span>記録を、もっと気軽に。</span><div className="kakebo-bars" aria-hidden="true">{[32,58,46,86,68,100,82].map((height,j) => <i key={j} style={{height: `${height}%`}} />)}</div></div> : <div className="clock-art"><span>SECOND CLOCK</span><p>10:24<span>:36</span></p><small>一秒まで、あなたらしく。</small><div className="clock-ticks" aria-hidden="true" /></div>}
            <span className="visual-open" aria-hidden="true">↗</span><span className="visual-caption">{i === 0 ? "APP ICON / CONCEPT VISUAL" : "CONCEPT VISUAL"}</span>
          </a>
          <div className="work-body"><p className="eyebrow">{work.type} <span className="published-label">公開中</span></p><h3>{work.title}</h3><p>{work.description}</p><ul className="tag-list">{work.tags.map(tag => <li key={tag}>{tag}</li>)}</ul><a href={work.link} target="_blank" rel="noopener noreferrer" className="text-link">App Storeで見る <span aria-hidden="true">↗</span></a></div>
        </article>)}</div>
      </section>
      <section id="experience" className="experience-section section">
        <div className="container experience-grid">
          <SectionHeading number="04" en="EXPERIENCE">経験を重ねて、<br />次の実践へ。</SectionHeading>
          <div className="timeline">{careerHighlights.map((item,i) => <article key={item.title} className="timeline-item"><p className="timeline-date">{item.period}<span>0{i + 1}</span></p><div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div>
        </div>
      </section>
      <section id="skills" className="section container skills-section">
        <div className="section-top"><SectionHeading number="05" en="TOOLBOX">教える・つくるための道具。</SectionHeading><p className="section-description">研修・開発で扱ってきた領域。</p></div>
        <div className="skills-table">{skillGroups.map(group => <div className="skills-row" key={group.category}><h3>{group.category}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}<div className="skills-row"><h3>生成AI / 実践を継続</h3><ul>{["ChatGPT", "Claude", "Claude Code", "Codex", "業務自動化", "教材・演習設計"].map(item => <li key={item}>{item}</li>)}</ul></div></div>
      </section>
      <section id="next" className="next-section section">
        <div className="container"><div className="section-top"><SectionHeading number="06" en="WHAT’S NEXT">研修から、仕事の変化へ。</SectionHeading><p className="section-description">これから実践していくこと。<br /><span>2026年10月時点の取り組み・計画</span></p></div>
          <p className="next-lead">IT研修で培った「伝える力」と、開発で磨く「つくる力」。<br className="desktop-break" />その両方を、企業の生成AI活用へつなげていきます。</p>
          <div className="next-grid">{nextSteps.map(step => <article key={step.phase}><div className="next-card-top"><span>{step.phase}</span><p>{step.status}</p></div><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>
        </div>
      </section>
      <section id="contact" className="section container contact-section">
        <div className="contact-heading"><p className="eyebrow">KEEP BUILDING</p><h2>教えることも、<br />つくることも、これからも。</h2></div>
        <div className="contact-content"><p>{site.contact.note}</p><a href={site.contact.github} target="_blank" rel="noopener noreferrer" className="button button-dark"><GithubIcon aria-hidden="true" /> GitHubで活動を見る <ArrowIcon aria-hidden="true" /></a></div>
      </section>
    </main>
    <Footer />
  </>;
}
