const systemModules = [
  {
    id: "01",
    title: "Dashboard UI",
    description:
      "Interfaces cockpit inspirées GT3 développées autour d’une architecture claire, rapide et immersive.",
  },
  {
    id: "02",
    title: "Télémétrie",
    description:
      "Système pensé pour la lisibilité pilote, les données temps réel et la cohérence visuelle.",
  },
  {
    id: "03",
    title: "RPM & Lighting",
    description:
      "Retour lumineux subtil inspiré du motorsport moderne sans surcharge gaming.",
  },
  {
    id: "04",
    title: "Architecture Immersive",
    description:
      "Combinaison de hardware, dashboard UI et feedbacks sensoriels pour créer une expérience cockpit cohérente.",
  },
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-[#050505] text-[#f5f5f5]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(185,28,28,0.18),transparent_40%)]" />

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.5))]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-red-500">
              JL Simracing
            </p>

            <h1 className="mt-2 text-lg font-semibold uppercase tracking-[0.18em] text-white">
              Motorsport Engineering
            </h1>
          </div>

          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] text-white/55 md:flex">
            <a
              href="#vision"
              className="transition-all duration-500 hover:text-white"
            >
              Vision
            </a>

            <a
              href="#system"
              className="transition-all duration-500 hover:text-white"
            >
              Système
            </a>

            <a
              href="#philosophy"
              className="transition-all duration-500 hover:text-white"
            >
              Philosophie
            </a>

            <a
              href="#future"
              className="transition-all duration-500 hover:text-white"
            >
              Futur
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 px-6 pb-36 pt-28 md:px-10 md:pb-44 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-red-500/20 bg-red-500/[0.06] px-5 py-2 text-[11px] uppercase tracking-[0.35em] text-red-300 backdrop-blur-sm">
            GT3 • Endurance • Formula Inspired
          </div>

          <div className="mt-10 max-w-5xl">
            <h2 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.05em] md:text-7xl xl:text-[7rem]">
              Construire des
              <span className="block text-red-600">
                Systèmes Cockpit
              </span>
              Immersifs.
            </h2>

            <p className="mt-10 max-w-2xl text-base leading-relaxed text-white/60 md:text-xl">
              JL Simracing développe un environnement cockpit immersif
              inspiré du GT3, de l’endurance et du motorsport moderne
              autour d’une approche engineering développée en solo.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <button className="rounded-2xl border border-red-500/30 bg-red-600 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-500 hover:bg-red-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.25)]">
                Découvrir la Vision
              </button>

              <button className="rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/80 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] hover:text-white">
                Suivre le Développement
              </button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="mt-24 grid gap-6 md:grid-cols-3">
            {[
              "Immersion Motorsport",
              "Engineering Maintenable",
              "Écosystème Progressif",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-sm"
              >
                <div className="mb-4 h-px w-16 bg-red-500" />

                <p className="text-sm uppercase tracking-[0.18em] text-white/70">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section
        id="vision"
        className="relative z-10 border-t border-white/[0.05] px-6 py-28 md:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-red-500">
              Vision
            </p>

            <h3 className="mt-6 max-w-xl text-4xl font-bold leading-tight md:text-5xl">
              Construire une immersion cockpit disciplinée et cohérente.
            </h3>
          </div>

          <div className="space-y-8 text-lg leading-relaxed text-white/60">
            <p>
              JL Simracing explore une approche inspirée du motorsport GT3,
              endurance et Formula moderne autour de l’engineering cockpit.
            </p>

            <p>
              L’objectif est de créer un environnement immersif où hardware,
              dashboard UI, feedbacks et architecture système fonctionnent comme
              un ensemble cohérent.
            </p>
          </div>
        </div>
      </section>

      {/* System */}
      <section
        id="system"
        className="relative z-10 px-6 py-28 md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-red-500">
                Architecture Système
              </p>

              <h3 className="mt-6 max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
                Architecture cockpit modulaire pensée pour évoluer proprement.
              </h3>
            </div>

            <p className="max-w-lg text-base leading-relaxed text-white/55">
              Chaque élément est développé avec une logique d’intégration,
              stabilité et immersion progressive.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {systemModules.map((module) => (
              <div
                key={module.id}
                className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8 transition-all duration-500 hover:border-red-500/30 hover:bg-white/[0.04]"
              >
                <div className="absolute right-0 top-0 h-32 w-32 bg-red-500/5 blur-3xl transition-all duration-500 group-hover:bg-red-500/10" />

                <p className="text-[11px] uppercase tracking-[0.3em] text-red-400">
                  Module Système {module.id}
                </p>

                <div className="mt-6 h-px w-14 bg-red-500" />

                <h4 className="mt-8 text-2xl font-semibold text-white">
                  {module.title}
                </h4>

                <p className="mt-6 leading-relaxed text-white/60">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section
        id="philosophy"
        className="relative z-10 border-t border-white/[0.05] px-6 py-28 md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.35em] text-red-500">
              Philosophie
            </p>

            <h3 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              La précision avant l’excès.
              <br />
              La cohérence avant le bruit.
            </h3>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-10">
              <p className="text-xs uppercase tracking-[0.3em] text-red-500">
                Principes JL
              </p>

              <ul className="mt-10 space-y-6 text-lg text-white/65">
                <li>• Immersion motorsport</li>
                <li>• Engineering maintenable en solo</li>
                <li>• Architecture modulaire</li>
                <li>• Cohérence visuelle technique</li>
                <li>• Vision écosystème progressive</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-10">
              <p className="text-xs uppercase tracking-[0.3em] text-red-500">
                Ce que JL évite
              </p>

              <ul className="mt-10 space-y-6 text-lg text-white/65">
                <li>• RGB gaming chaos</li>
                <li>• Surcharge visuelle</li>
                <li>• Systèmes impossibles à maintenir</li>
                <li>• Esthétique startup générique</li>
                <li>• UX overengineered</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future */}
      <section
        id="future"
        className="relative z-10 px-6 py-32 md:px-10"
      >
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-red-500/15 bg-[linear-gradient(135deg,rgba(185,28,28,0.14),rgba(255,255,255,0.02))] p-10 md:p-20">
          <div className="max-w-5xl">
            <p className="text-xs uppercase tracking-[0.35em] text-red-400">
              Futur Écosystème
            </p>

            <h3 className="mt-8 text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-7xl">
              Plus qu’un setup.
              <br />
              Une identité cockpit complète.
            </h3>

            <p className="mt-10 max-w-3xl text-lg leading-relaxed text-white/65">
              JL Simracing évoluera progressivement vers un environnement
              immersif complet composé de dashboards, telemetry UI, hardware et
              technologies inspirées du motorsport moderne.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.05] px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 text-sm text-white/40 md:flex-row md:items-center">
          <p>
            © JL Simracing — Immersion Motorsport Développée en Solo
          </p>

          <p className="text-[11px] uppercase tracking-[0.3em] text-white/35">
            Construit avec discipline • immersion • cohérence
          </p>
        </div>
      </footer>
    </main>
  );
}