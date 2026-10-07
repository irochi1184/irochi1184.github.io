import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a href="#top" className="footer-name">{site.nameEn}<span>IT・生成AI研修講師 / エンジニア</span></a>
        <p>© {new Date().getFullYear()} {site.nameEn}</p>
        <a href="#top" className="back-top">BACK TO TOP <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}
