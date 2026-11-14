import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="wrap footer-inner">
        <p>© {new Date().getFullYear()} {site.nameEn}</p>
        <a href={site.contact.github}>GitHubで開発活動を見る <span aria-hidden="true">↗</span></a>
        <a href="#top">ページの先頭へ <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}
