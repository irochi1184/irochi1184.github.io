import { site } from "@/data/site";

export default function Header() {
  return (
    <header id="top" className="site-header">
      <div className="wrap header-inner">
        <a className="wordmark" href="#top">{site.name}</a>
        <nav aria-label="メインナビゲーション">
          <a href="#services">研修事業</a>
          <a href="#works">公開アプリ</a>
          <a href="#experience">経歴</a>
          <a href={site.contact.github}>GitHub <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  );
}
