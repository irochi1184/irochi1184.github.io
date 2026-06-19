import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site, services, skillGroups, works, stats } from "@/data/site";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="flex-1">
        {/* ===== Hero ===== */}
        <section className="relative overflow-hidden bg-ink text-white">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(600px circle at 20% 10%, rgba(37,99,235,0.35), transparent 60%), radial-gradient(500px circle at 90% 80%, rgba(59,130,246,0.25), transparent 55%)",
            }}
          />
          <div className="relative mx-auto max-w-5xl px-5 py-24 sm:py-32">
            <p className="mb-4 inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-blue-200">
              個人事業主 / 新人研修講師
            </p>
            <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl">
              {site.tagline}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {site.intro}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-500"
              >
                研修のご相談
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                研修メニューを見る
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-2xl font-black text-white sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs text-slate-400 sm:text-sm">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ===== About ===== */}
        <section id="about" className="mx-auto max-w-5xl px-5 py-20">
          <SectionTitle label="About" title="講師について" />
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            <div className="md:col-span-2 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                {site.name}（{site.nameEn}）です。個人事業主として、企業の新入社員研修を専門に活動しています。
              </p>
              <p>
                主力は <strong className="text-foreground">Java を用いた新人研修</strong> です。プログラミング未経験の新入社員が、研修を終える頃には自分でコードを書き、現場に配属されても自走できる——そのゴールから逆算したカリキュラムを設計し、手を動かす演習を中心に指導します。
              </p>
              <p>
                Java にとどまらず、IT 基礎知識・ネットワーク・データベース、Spring Boot や Laravel を用いた Web アプリ開発、Linux・Docker・AWS といったインフラ領域まで、幅広い研修テーマに対応します。自身でも iOS アプリを個人開発・運用しており、現場感のある指導を大切にしています。
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <p className="text-sm font-bold text-foreground">対応形態</p>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li className="flex gap-2">
                  <Check /> オンライン / オンサイト研修
                </li>
                <li className="flex gap-2">
                  <Check /> カリキュラムのカスタマイズ
                </li>
                <li className="flex gap-2">
                  <Check /> 未経験者向けの基礎徹底
                </li>
                <li className="flex gap-2">
                  <Check /> 演習・課題ベースの指導
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== Services ===== */}
        <section id="services" className="bg-white">
          <div className="mx-auto max-w-5xl px-5 py-20">
            <SectionTitle label="Services" title="研修メニュー" />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article
                  key={s.title}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-foreground">
                      {s.title}
                    </h3>
                    {s.badge && (
                      <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-bold text-accent">
                        {s.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {s.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Skills ===== */}
        <section id="skills" className="mx-auto max-w-5xl px-5 py-20">
          <SectionTitle label="Skills" title="技術スタック" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {skillGroups.map((g) => (
              <div
                key={g.category}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <p className="text-sm font-bold text-accent">{g.category}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Works ===== */}
        <section id="works" className="bg-white">
          <div className="mx-auto max-w-5xl px-5 py-20">
            <SectionTitle label="Works" title="開発実績" />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {works.map((w) => (
                <article
                  key={w.title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <p className="text-xs font-bold uppercase tracking-wide text-accent">
                    {w.type}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-foreground">
                    {w.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {w.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {w.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Contact ===== */}
        <section id="contact" className="mx-auto max-w-5xl px-5 py-20">
          <div className="overflow-hidden rounded-3xl bg-ink px-6 py-14 text-center text-white sm:px-12">
            <SectionTitle label="Contact" title="お問い合わせ" centered dark />
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-slate-300">
              {site.contact.note}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {site.contact.email && (
                <a
                  href={`mailto:${site.contact.email}`}
                  className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-500"
                >
                  メールで相談する
                </a>
              )}
              {site.contact.github && (
                <a
                  href={site.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* ---- 小さな共通パーツ ---- */

function SectionTitle({
  label,
  title,
  centered = false,
  dark = false,
}: {
  label: string;
  title: string;
  centered?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p
        className={`text-sm font-bold uppercase tracking-widest ${
          dark ? "text-blue-300" : "text-accent"
        }`}
      >
        {label}
      </p>
      <h2
        className={`mt-2 text-2xl font-black tracking-tight sm:text-3xl ${
          dark ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

function Check() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.29 6.8-6.8a1 1 0 0 1 1.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
