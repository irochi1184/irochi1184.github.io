import { site } from "@/data/site";
import { ArrowIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" />IT EDUCATION × GENERATIVE AI × DEVELOPMENT</p>
          <h1 id="hero-title">{site.tagline[0]}<br /><span>{site.tagline[1]}</span></h1>
          <p className="hero-name">{site.name}<span>{site.nameEn}</span></p>
          <p className="hero-lead">{site.lead}</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#services">できることを見る <ArrowIcon aria-hidden="true" /></a>
            <a className="text-link" href="#works">開発実績を見る <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-art" role="img" aria-label="教える、つくる、活かす。研修と開発の実践をつなぐサイクル。">
          <div className="art-top"><span>LEARNING INTO PRACTICE</span><span>↗</span></div>
          <svg className="orbit" viewBox="0 0 500 500" aria-hidden="true">
            <circle cx="250" cy="250" r="168" fill="none" stroke="currentColor" strokeWidth="1" />
            <ellipse cx="250" cy="250" rx="208" ry="112" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(-35 250 250)" />
            <ellipse cx="250" cy="250" rx="208" ry="112" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(35 250 250)" />
            <circle cx="250" cy="82" r="6" fill="#d9ec95" /><circle cx="395" cy="334" r="6" fill="#d9ec95" /><circle cx="105" cy="334" r="6" fill="#d9ec95" />
          </svg>
          <div className="art-title"><span>Teach.</span><span>Build.</span><span className="art-accent">Apply.</span></div>
          <span className="orbit-label label-teach">教える</span><span className="orbit-label label-build">つくる</span><span className="orbit-label label-apply">活かす</span>
          <div className="art-bottom"><span>知識を、実践へ。<br />実践を、次の学びへ。</span><span className="art-star" aria-hidden="true">✳</span></div>
        </div>
      </div>
      <div className="container hero-summary">
        <div><strong>2023<span>—</span></strong><p>企業向けIT研修に従事</p></div>
        <div><strong>IT × AI</strong><p>基礎から、業務での活用へ</p></div>
        <div><strong>2 Apps</strong><p>iOSアプリを公開・運用</p></div>
        <a href="#about" className="scroll-cue">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}
