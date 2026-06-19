import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { serviceIcons, GithubIcon, MailIcon, ArrowIcon } from "@/components/Icons";
import { site, services, skillGroups, works } from "@/data/site";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="flex-1">
        <Hero />

        {/* ===== About ===== */}
        <section id="about" className="mx-auto max-w-5xl px-5 py-24">
          <div className="grid items-center gap-12 md:grid-cols-[auto_1fr]">
            <Reveal className="flex justify-center">
              <div className="relative">
                <div className="flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br from-accent to-indigo-600 text-5xl font-black text-white shadow-xl shadow-blue-200">
                  有田
                </div>
                <div className="absolute -bottom-3 -right-3 rounded-2xl border border-border bg-white px-3 py-1.5 text-xs font-bold text-accent shadow-md">
                  Java 講師
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Eyebrow>About</Eyebrow>
              <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                未経験を、現場へ。
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-muted">
                個人事業主として企業の新人研修を専門に活動。Java を軸に、IT 基礎からインフラまで、現場感のある実践指導を行っています。
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["オンライン / オンサイト", "カリキュラム設計", "演習中心", "未経験者対応"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== Services ===== */}
        <section id="services" className="relative bg-white">
          <div className="mx-auto max-w-5xl px-5 py-24">
            <Reveal>
              <Eyebrow>Services</Eyebrow>
              <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                研修メニュー
              </h2>
            </Reveal>
            <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => {
                const Icon = serviceIcons[s.icon];
                return (
                  <StaggerItem key={s.title}>
                    <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg">
                      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/5 transition-transform duration-500 group-hover:scale-150" />
                      <div className="relative">
                        <div className="flex items-center justify-between">
                          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                            {Icon && <Icon />}
                          </span>
                          {s.badge && (
                            <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-bold text-white">
                              {s.badge}
                            </span>
                          )}
                        </div>
                        <h3 className="mt-4 text-lg font-bold text-foreground">
                          {s.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {s.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {s.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </section>

        {/* ===== Skills ===== */}
        <section id="skills" className="mx-auto max-w-5xl px-5 py-24">
          <Reveal>
            <Eyebrow>Skills</Eyebrow>
            <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
              技術スタック
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2">
            {skillGroups.map((g) => (
              <StaggerItem key={g.category}>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <p className="flex items-center gap-2 text-sm font-bold text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {g.category}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* ===== Works ===== */}
        <section id="works" className="bg-white">
          <div className="mx-auto max-w-5xl px-5 py-24">
            <Reveal>
              <Eyebrow>Works</Eyebrow>
              <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                開発実績
              </h2>
            </Reveal>
            <Stagger className="mt-12 grid gap-5 sm:grid-cols-2">
              {works.map((w) => (
                <StaggerItem key={w.title}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                    {/* アプリのモック風ビジュアル */}
                    <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-indigo-900">
                      <div className="dot-grid absolute inset-0 opacity-20" />
                      <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-white/10 text-2xl font-black text-white backdrop-blur transition-transform duration-500 group-hover:scale-110">
                        ¥
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-xs font-bold uppercase tracking-wide text-accent">
                        {w.type}
                      </p>
                      <h3 className="mt-1 text-lg font-bold text-foreground">
                        {w.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                        {w.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {w.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ===== Contact ===== */}
        <section id="contact" className="mx-auto max-w-5xl px-5 py-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center text-white sm:px-12">
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="animate-blob absolute -left-10 top-0 h-56 w-56 rounded-full bg-blue-600/40 blur-3xl" />
                <div className="animate-blob absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-indigo-500/30 blur-3xl [animation-delay:-5s]" />
              </div>
              <div className="relative">
                <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
                  Contact
                </p>
                <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-4xl">
                  研修のご相談、承ります
                </h2>
                <p className="mx-auto mt-4 max-w-md text-sm text-slate-300">
                  {site.contact.note}
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  {site.contact.email && (
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-blue-500"
                    >
                      <MailIcon />
                      メールで相談
                      <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
                    </a>
                  )}
                  {site.contact.github && (
                    <a
                      href={site.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
                    >
                      <GithubIcon />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* ---- 共通パーツ ---- */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent">
      <span className="h-px w-6 bg-accent" />
      {children}
    </span>
  );
}
