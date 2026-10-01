import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { serviceIcons, GithubIcon, MailIcon, ArrowIcon, AppleIcon } from "@/components/Icons";
import { site, services, skillGroups, works, careerHighlights } from "@/data/site";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="flex-1">
        <Hero />

        <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <Reveal>
              <Eyebrow>About</Eyebrow>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                {site.name}
              </h2>
              <p className="mt-2 text-sm font-medium text-accent">{site.nameEn}</p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="space-y-5 text-[15px] leading-8 text-muted sm:text-base">
                <p>
                  有田 健一郎です。普段は企業向けのIT研修で、新入社員や未経験の方に
                  Java、Web開発、データベース、クラウドなどを教えています。
                </p>
                <p>
                  研修では、説明して終わりにするのではなく、受講者自身が手を動かして
                  「なぜこうなるのか」まで理解できることを大切にしています。演習中の質問対応や
                  コードレビュー、設計書の確認も含めて、開発の流れ全体を支援しています。
                </p>
                <p>
                  講師の仕事と並行して、自分でもSwiftUIを使ったiOSアプリを開発しています。
                  教える側にいるからこそ、自分も手を動かし続けたいと思っています。
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {["企業向けIT研修", "Java / Web開発", "生成AI", "iOSアプリ開発"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-white px-3.5 py-2 text-xs font-bold text-foreground shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="services" className="border-y border-border bg-white">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
            <Reveal>
              <Eyebrow>What I Do</Eyebrow>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                できること
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                現在の仕事と、これまで実際に経験してきた内容を中心にまとめています。
              </p>
            </Reveal>

            <Stagger className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = serviceIcons[service.icon];
                return (
                  <StaggerItem key={service.title}>
                    <article className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_50px_rgba(15,139,141,0.10)]">
                      <div className="flex items-center justify-between gap-4">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                          {Icon && <Icon />}
                        </span>
                        {service.badge && (
                          <span className="rounded-full bg-accent-soft px-3 py-1 text-[11px] font-bold text-accent-dark">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-5 text-lg font-bold text-foreground">{service.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-background px-2 py-1 text-xs font-medium text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </article>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </section>

        <section id="works" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <Reveal>
            <Eyebrow>Works</Eyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              開発実績
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted">
              個人開発では、作って終わりではなく、App Storeへの公開とその後の改善まで行っています。
            </p>
          </Reveal>

          <Stagger className="mt-10 grid gap-5 md:grid-cols-2">
            {works.map((work) => (
              <StaggerItem key={work.title}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,60,60,0.12)]">
                  <div
                    className={`relative flex h-52 items-center justify-center overflow-hidden ${
                      work.visual === "clock"
                        ? "bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900"
                        : "bg-gradient-to-br from-teal-950 via-emerald-900 to-teal-800"
                    }`}
                  >
                    <div className="dot-grid absolute inset-0 opacity-20" />
                    {work.visual === "clock" ? (
                      <div className="relative text-center text-white">
                        <div className="rounded-3xl border border-white/15 bg-black/25 px-8 py-6 shadow-2xl backdrop-blur-sm">
                          <p className="font-mono text-4xl font-semibold tracking-tight sm:text-5xl">
                            18:42<span className="text-teal-300">:37</span>
                          </p>
                          <p className="mt-3 text-[11px] tracking-[0.28em] text-teal-100/70">
                            SECOND CLOCK
                          </p>
                        </div>
                      </div>
                    ) : work.image ? (
                      <img
                        src={work.image}
                        alt={`${work.title} アプリアイコン`}
                        width={104}
                        height={104}
                        className="relative h-28 w-28 rounded-[25px] bg-white shadow-2xl ring-1 ring-white/30 transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : null}
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="text-xs font-bold tracking-wide text-accent">{work.type}</p>
                    <h3 className="mt-2 text-2xl font-black tracking-tight text-foreground">{work.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-muted">{work.description}</p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent-dark"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-accent"
                    >
                      <AppleIcon />
                      {work.linkLabel}
                      <ArrowIcon />
                    </a>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <section id="experience" className="border-y border-border bg-white">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
            <Reveal>
              <Eyebrow>Experience</Eyebrow>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                これまでの経験
              </h2>
            </Reveal>

            <div className="mt-10 border-l border-border pl-6 sm:pl-8">
              {careerHighlights.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.06}>
                  <article className="relative pb-10 last:pb-0">
                    <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border-2 border-white bg-accent shadow-[0_0_0_4px_rgba(15,139,141,0.12)] sm:-left-[39px]" />
                    <p className="text-xs font-bold tracking-wide text-accent">{item.period}</p>
                    <h3 className="mt-1 text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">{item.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <Reveal>
            <Eyebrow>Skills</Eyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              技術・経験領域
            </h2>
          </Reveal>

          <Stagger className="mt-10 grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <StaggerItem key={group.category}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <p className="flex items-center gap-2 text-sm font-bold text-accent-dark">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    {group.category}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-border bg-white px-3 py-1.5 text-sm font-medium text-foreground"
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

        <section id="contact" className="px-5 pb-20 sm:pb-24">
          <Reveal>
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-ink px-6 py-14 text-center text-white sm:px-12 sm:py-16">
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl" />
                <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-emerald-400/15 blur-3xl" />
              </div>
              <div className="relative">
                <p className="text-sm font-bold tracking-[0.2em] text-teal-200">CONTACT</p>
                <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-4xl">
                  研修・開発のご相談
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-teal-50/70">
                  {site.contact.note}
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  {site.contact.email && (
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-500"
                    >
                      <MailIcon />
                      メールで相談
                      <ArrowIcon />
                    </a>
                  )}
                  {site.contact.github && (
                    <a
                      href={site.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
                    >
                      <GithubIcon />
                      GitHubを見る
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

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-accent">
      <span className="h-px w-7 bg-accent" />
      {children}
    </span>
  );
}
