export default function SystemsPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-24 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Back */}
        <div className="mb-16">
          <a
            href="/"
            className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-3 text-xs uppercase tracking-[0.25em] text-white/60 transition-all duration-500 hover:border-red-500/30 hover:text-white"
          >
            ← Retour Accueil
          </a>
        </div>

        {/* Hero */}
        <div className="mb-28">
          <p className="text-xs uppercase tracking-[0.35em] text-red-500">
            Systems Architecture
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.05em] md:text-7xl">
            Architecture cockpit
            <span className="block text-red-600">
              immersive & modulaire
            </span>
          </h1>

          <p className="mt-10 max-w-3xl text-xl leading-relaxed text-white/60">
            JL Simracing développe progressivement un environnement cockpit
            cohérent combinant dashboards, télémétrie,
            immersion systems et logique engineering.
          </p>
        </div>

        {/* Systems Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Card */}
          <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-red-500">
              Dashboard UI
            </p>

            <div className="mt-8 h-px w-16 bg-red-500" />

            <h2 className="mt-8 text-3xl font-bold text-white">
              Interface Cockpit
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/60">
              Développement d’interfaces inspirées du GT3,
              endurance et motorsport moderne.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-red-500">
              Telemetry
            </p>

            <div className="mt-8 h-px w-16 bg-red-500" />

            <h2 className="mt-8 text-3xl font-bold text-white">
              Data & Monitoring
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/60">
              Exploration des systèmes de données,
              lisibilité pilote et cohérence télémétrique.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-red-500">
              Immersion Systems
            </p>

            <div className="mt-8 h-px w-16 bg-red-500" />

            <h2 className="mt-8 text-3xl font-bold text-white">
              Feedback Immersif
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/60">
              Développement progressif des systèmes lumineux
              et feedbacks sensoriels cockpit.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-red-500">
              Architecture
            </p>

            <div className="mt-8 h-px w-16 bg-red-500" />

            <h2 className="mt-8 text-3xl font-bold text-white">
              Progressive Ecosystem
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/60">
              Construction progressive d’un environnement cockpit
              maintenable et évolutif.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}