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

<header className="sticky top-0 z-50 px-4 pt-4 md:px-8">
  <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/[0.08] bg-black/45 px-6 py-5 backdrop-blur-2xl">
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
        href="/vision"
        className="transition-all duration-500 hover:text-white"
      >
        Vision
      </a>

      <a
        href="/systems"
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
        
        <a
  href="/development"
  className="transition-all duration-500 hover:text-white"
>
  Development
</a>
    </nav>
  </div>
</header>

      {/* Hero */}
      <section className="relative z-10 overflow-hidden px-6 pb-36 pt-28 md:px-10 md:pb-44 md:pt-40">
        {/* Hero Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/cockpit-bg.jpg')] bg-cover bg-center opacity-[0.35]" />

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.45),rgba(0,0,0,0.92))]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.75))]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-red-500/20 bg-red-500/[0.06] px-5 py-2 text-[11px] uppercase tracking-[0.35em] text-red-300 backdrop-blur-sm">
            GT3 • Endurance • Formula Inspired
          </div>

          <div className="mt-10 grid gap-16 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
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

{/* Engineering Panel */}
<div className="rounded-[2rem] border border-white/[0.08] bg-black/40 p-8 backdrop-blur-xl">
  <div className="flex items-center justify-between">
    <p className="text-xs uppercase tracking-[0.3em] text-red-500">
      System Status
    </p>

    <div className="h-3 w-3 rounded-full bg-green-500" />
  </div>

  <div className="mt-8 h-px w-full bg-white/[0.08]" />

  <div className="mt-8 space-y-8">
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-white/35">
        Architecture
      </p>

      <p className="mt-3 text-xl font-semibold text-white">
        GT3 Inspired
      </p>
    </div>

    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-white/35">
        Development
      </p>

      <p className="mt-3 text-xl font-semibold text-white">
        Solo Engineered
      </p>
    </div>

    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-white/35">
        Platform
      </p>

      <p className="mt-3 text-xl font-semibold text-white">
        Next.js Ecosystem
      </p>
    </div>

    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-white/35">
        Status
      </p>

      <p className="mt-3 text-xl font-semibold text-red-400">
        Active Development
      </p>
    </div>
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
                className="rounded-3xl border border-white/[0.08] bg-black/40 p-6 backdrop-blur-xl"
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

{/* Engineering Approach */}
<section className="relative z-10 border-t border-white/[0.05] px-6 py-32 md:px-10">
  <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-2">
    <div>
      <p className="text-xs uppercase tracking-[0.35em] text-red-500">
        Engineering Approach
      </p>

      <h3 className="mt-6 max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
        Une approche inspirée du motorsport moderne et de la cohérence système.
      </h3>
    </div>

    <div className="space-y-10">
      <div className="border-l border-red-500/30 pl-6">
        <p className="text-sm uppercase tracking-[0.25em] text-red-400">
          Immersion First
        </p>

        <p className="mt-4 text-lg leading-relaxed text-white/60">
          Chaque élément visuel et système est pensé pour renforcer
          l’immersion cockpit sans surcharge ni distraction inutile.
        </p>
      </div>

      <div className="border-l border-red-500/30 pl-6">
        <p className="text-sm uppercase tracking-[0.25em] text-red-400">
          Progressive Architecture
        </p>

        <p className="mt-4 text-lg leading-relaxed text-white/60">
          JL Simracing évolue progressivement autour d’une logique
          maintenable, modulaire et réaliste pour un développement solo.
        </p>
      </div>

      <div className="border-l border-red-500/30 pl-6">
        <p className="text-sm uppercase tracking-[0.25em] text-red-400">
          Motorsport DNA
        </p>

        <p className="mt-4 text-lg leading-relaxed text-white/60">
          GT3, endurance et engineering européen inspirent l’ensemble
          de l’identité visuelle et de la philosophie cockpit.
        </p>
      </div>
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

{/* Current Development */}
<section className="relative z-10 border-t border-white/[0.05] px-6 py-28 md:px-10">
  <div className="mx-auto max-w-7xl">
    <div className="mb-20">
      <p className="text-xs uppercase tracking-[0.35em] text-red-500">
        Current Development
      </p>

      <h3 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
        Développement progressif d’un environnement cockpit
        inspiré du motorsport moderne.
      </h3>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      {/* Card 1 */}
      <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-10">
        <div className="flex items-center justify-between">
          <p className="text-sm uppercase tracking-[0.25em] text-red-500">
            Dashboard UI 
          </p>

          <p className="text-xs uppercase tracking-[0.2em] text-white/35">
            Active
          </p>
        </div>

        <div className="mt-8 h-px w-16 bg-red-500" />

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60">
          Refonte progressive d’une interface cockpit plus lisible,
          immersive et inspirée des environnements GT3 endurance
          modernes.
        </p>
      </div>

      {/* Card 2 */}
      <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-10">
        <div className="flex items-center justify-between">
          <p className="text-sm uppercase tracking-[0.25em] text-red-500">
            Telemetry System
          </p>

          <p className="text-xs uppercase tracking-[0.2em] text-white/35">
            Research
          </p>
        </div>

        <div className="mt-8 h-px w-16 bg-red-500" />

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60">
          Exploration d’une architecture télémétrique cohérente
          pensée pour la lisibilité pilote et l’analyse temps réel.
        </p>
      </div>

      {/* Card 3 */}
      <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-10">
        <div className="flex items-center justify-between">
          <p className="text-sm uppercase tracking-[0.25em] text-red-500">
            RPM Lighting
          </p>

          <p className="text-xs uppercase tracking-[0.2em] text-white/35">
            Prototype
          </p>
        </div>

        <div className="mt-8 h-px w-16 bg-red-500" />

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60">
          Développement d’un système lumineux inspiré du motorsport
          moderne avec approche immersive sobre et non intrusive.
        </p>
      </div>

      {/* Card 4 */}
      <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-10">
        <div className="flex items-center justify-between">
          <p className="text-sm uppercase tracking-[0.25em] text-red-500">
            Cockpit Architecture
          </p>

          <p className="text-xs uppercase tracking-[0.2em] text-white/35">
            Ongoing
          </p>
        </div>

        <div className="mt-8 h-px w-16 bg-red-500" />

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60">
          Construction progressive d’un écosystème cockpit cohérent
          combinant hardware, dashboard UI et immersion système.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Roadmap */}
<section className="relative z-10 border-t border-white/[0.05] px-6 py-32 md:px-10">
  <div className="mx-auto max-w-7xl">
    <div className="mb-20">
      <p className="text-xs uppercase tracking-[0.35em] text-red-500">
        Development Roadmap
      </p>

      <h3 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
        Construire progressivement un environnement cockpit complet.
      </h3>
    </div>

    <div className="relative space-y-12 border-l border-white/[0.08] pl-10">
      {/* Step 1 */}
      <div className="relative">
        <div className="absolute -left-[49px] top-1 h-5 w-5 rounded-full border border-red-500 bg-black" />

        <p className="text-sm uppercase tracking-[0.25em] text-red-500">
          Phase 01
        </p>

        <h4 className="mt-4 text-2xl font-semibold text-white">
          Foundation Architecture
        </h4>

        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
          Création de l’identité JL Simracing, architecture web,
          direction artistique et cohérence système initiale.
        </p>
      </div>

      {/* Step 2 */}
      <div className="relative">
        <div className="absolute -left-[49px] top-1 h-5 w-5 rounded-full border border-red-500 bg-black" />

        <p className="text-sm uppercase tracking-[0.25em] text-red-500">
          Phase 02
        </p>

        <h4 className="mt-4 text-2xl font-semibold text-white">
          Dashboard & Telemetry
        </h4>

        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
          Développement progressif des interfaces cockpit,
          dashboards immersifs et systèmes télémétriques.
        </p>
      </div>

      {/* Step 3 */}
      <div className="relative">
        <div className="absolute -left-[49px] top-1 h-5 w-5 rounded-full border border-red-500 bg-black" />

        <p className="text-sm uppercase tracking-[0.25em] text-red-500">
          Phase 03
        </p>

        <h4 className="mt-4 text-2xl font-semibold text-white">
          Hardware Ecosystem
        </h4>

        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
          Intégration progressive des éléments hardware,
          feedback immersif et logique cockpit globale.
        </p>
      </div>

      {/* Step 4 */}
      <div className="relative">
        <div className="absolute -left-[49px] top-1 h-5 w-5 rounded-full border border-red-500 bg-black" />

        <p className="text-sm uppercase tracking-[0.25em] text-red-500">
          Phase 04
        </p>

        <h4 className="mt-4 text-2xl font-semibold text-white">
          Full Immersive Platform
        </h4>

        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
          Construction d’un environnement cockpit cohérent
          inspiré du motorsport moderne et de l’endurance.
        </p>
      </div>
    </div>
  </div>
</section>

{/* System Status */}
<section className="relative z-10 border-t border-white/[0.05] px-6 py-32 md:px-10">
  <div className="mx-auto max-w-7xl">
    <div className="mb-20 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-red-500">
          System Status
        </p>

        <h3 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Architecture cockpit en développement continu.
        </h3>
      </div>

      <p className="max-w-lg text-lg leading-relaxed text-white/50">
        Suivi progressif des systèmes actuellement développés
        dans l’écosystème JL Simracing.
      </p>
    </div>

    <div className="grid gap-6 xl:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-[2rem] border border-white/[0.08] bg-black/30 p-8 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <p className="text-sm uppercase tracking-[0.25em] text-red-400">
            Dashboard Core
          </p>

          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <div className="mt-8 h-px w-16 bg-red-500" />

        <p className="mt-8 text-3xl font-bold text-white">
          78%
        </p>

        <p className="mt-4 text-white/55">
          Architecture UI cockpit immersive actuellement en développement.
        </p>
      </div>

      {/* Card 2 */}
      <div className="rounded-[2rem] border border-white/[0.08] bg-black/30 p-8 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <p className="text-sm uppercase tracking-[0.25em] text-red-400">
            Telemetry Logic
          </p>

          <div className="h-3 w-3 rounded-full bg-yellow-500" />
        </div>

        <div className="mt-8 h-px w-16 bg-red-500" />

        <p className="mt-8 text-3xl font-bold text-white">
          Research
        </p>

        <p className="mt-4 text-white/55">
          Étude des flux de données et de la cohérence télémétrique.
        </p>
      </div>

      {/* Card 3 */}
      <div className="rounded-[2rem] border border-white/[0.08] bg-black/30 p-8 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <p className="text-sm uppercase tracking-[0.25em] text-red-400">
            Immersion Systems
          </p>

          <div className="h-3 w-3 rounded-full bg-red-500" />
        </div>

        <div className="mt-8 h-px w-16 bg-red-500" />

        <p className="mt-8 text-3xl font-bold text-white">
          Prototype
        </p>

        <p className="mt-4 text-white/55">
          Développement des systèmes lumineux et feedback immersif.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Cockpit Preview */}
<section className="relative z-10 border-t border-white/[0.05] px-6 py-32 md:px-10">
  <div className="mx-auto max-w-7xl">
    <div className="mb-20 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-red-500">
          Cockpit Preview
        </p>

        <h3 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Aperçu de l’univers visuel JL Simracing.
        </h3>
      </div>

      <p className="max-w-lg text-lg leading-relaxed text-white/50">
        Exploration visuelle inspirée du GT3, de l’endurance
        et des environnements motorsport modernes.
      </p>
    </div>

    <div className="grid gap-6 lg:grid-cols-3">
      {/* Image 1 */}
      <div className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08]">
        <img
          src="/cockpit-bg.jpg"
          alt="JL Simracing Cockpit"
          className="h-[420px] w-full object-cover transition-all duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85),transparent)]" />

        <div className="absolute bottom-0 left-0 p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-red-400">
            GT3 Atmosphere
          </p>

          <h4 className="mt-4 text-2xl font-semibold text-white">
            Immersion Cockpit
          </h4>
        </div>
      </div>

      {/* Image 2 */}
      <div className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08]">
        <img
          src="/cockpit-bg.jpg"
          alt="Telemetry"
          className="h-[420px] w-full object-cover transition-all duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85),transparent)]" />

        <div className="absolute bottom-0 left-0 p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-red-400">
            Telemetry UI
          </p>

          <h4 className="mt-4 text-2xl font-semibold text-white">
            Motorsport Interface
          </h4>
        </div>
      </div>

      {/* Image 3 */}
      <div className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08]">
        <img
          src="/cockpit-bg.jpg"
          alt="Engineering"
          className="h-[420px] w-full object-cover transition-all duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85),transparent)]" />

        <div className="absolute bottom-0 left-0 p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-red-400">
            Engineering DNA
          </p>

          <h4 className="mt-4 text-2xl font-semibold text-white">
            System Coherence
          </h4>
        </div>
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

{/* Development Log */}
<section className="relative z-10 border-t border-white/[0.05] px-6 py-32 md:px-10">
  <div className="mx-auto max-w-7xl">
    <div className="mb-20">
      <p className="text-xs uppercase tracking-[0.35em] text-red-500">
        Development Log
      </p>

      <h3 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
        Journal de développement JL Simracing.
      </h3>
    </div>

    <div className="space-y-6">
      {/* Log 1 */}
      <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-red-500">
              Dashboard Architecture
            </p>

            <h4 className="mt-3 text-2xl font-semibold text-white">
              Refonte progressive de l’interface cockpit
            </h4>
          </div>

          <p className="text-sm uppercase tracking-[0.2em] text-white/35">
            Mai 2026
          </p>
        </div>

        <p className="mt-8 max-w-4xl text-lg leading-relaxed text-white/60">
          Développement d’une architecture UI plus immersive,
          plus lisible et inspirée des environnements GT3 endurance modernes.
        </p>
      </div>

      {/* Log 2 */}
      <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-red-500">
              Website Identity
            </p>

            <h4 className="mt-3 text-2xl font-semibold text-white">
              Construction de l’identité visuelle JL
            </h4>
          </div>

          <p className="text-sm uppercase tracking-[0.2em] text-white/35">
            Mai 2026
          </p>
        </div>

        <p className="mt-8 max-w-4xl text-lg leading-relaxed text-white/60">
          Mise en place d’une direction artistique sobre,
          immersive et inspirée du motorsport moderne.
        </p>
      </div>

      {/* Log 3 */}
      <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-red-500">
              Immersion Systems
            </p>

            <h4 className="mt-3 text-2xl font-semibold text-white">
              Recherche autour des systèmes immersifs cockpit
            </h4>
          </div>

          <p className="text-sm uppercase tracking-[0.2em] text-white/35">
            Ongoing
          </p>
        </div>

        <p className="mt-8 max-w-4xl text-lg leading-relaxed text-white/60">
          Exploration progressive des systèmes lumineux,
          feedbacks immersifs et cohérence sensorielle.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="relative z-10 border-t border-white/[0.05] px-6 py-16 md:px-10">
  <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
    <div>
      <p className="text-xs uppercase tracking-[0.35em] text-red-500">
        JL Simracing
      </p>

      <h3 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white">
        Motorsport Engineering
      </h3>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/50">
        Projet cockpit immersif inspiré du GT3,
        endurance racing et engineering moderne.
      </p>
    </div>

    <div className="flex flex-col gap-4 text-sm uppercase tracking-[0.2em] text-white/35">
      <a
        href="/vision"
        className="transition-all duration-500 hover:text-white"
      >
        Vision
      </a>

      <a
        href="/systems"
        className="transition-all duration-500 hover:text-white"
      >
        Systems
      </a>

      <a
        href="/development"
        className="transition-all duration-500 hover:text-white"
      >
        Development
      </a>
    </div>
  </div>

  <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-4 border-t border-white/[0.05] pt-8 text-sm text-white/25 md:flex-row md:items-center md:justify-between">
    <p>
      © 2026 JL Simracing — Solo Engineered Project
    </p>

    <p>
      Built with Next.js & TailwindCSS
    </p>
  </div>
</footer>
    </main>
  );
}