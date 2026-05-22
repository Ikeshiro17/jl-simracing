export default function DevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-24 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
  <a
    href="/"
    className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-3 text-xs uppercase tracking-[0.25em] text-white/60 transition-all duration-500 hover:border-red-500/30 hover:text-white"
  >
    ← Retour Accueil
    
  </a>
</div>
        {/* Header */}
        <div className="mb-24">
          <p className="text-xs uppercase tracking-[0.35em] text-red-500">
            JL Simracing
          </p>

          <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.04em] md:text-7xl">
            Development
            <span className="block text-red-600">
              Journal
            </span>
          </h1>

          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-white/60">
            Suivi progressif du développement cockpit,
            dashboards, immersion systems et architecture JL Simracing.
          </p>
        </div>

        {/* Logs */}
        <div className="space-y-8">
          {/* Log */}
          <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-red-500">
                  Dashboard UI
                </p>

                <h2 className="mt-4 text-3xl font-bold text-white">
                  Refonte progressive de l’interface cockpit
                </h2>
              </div>

              <p className="text-sm uppercase tracking-[0.2em] text-white/35">
                Mai 2026
              </p>
            </div>

            <div className="mt-8 h-px w-16 bg-red-500" />

            <p className="mt-8 max-w-4xl text-lg leading-relaxed text-white/60">
              Développement d’une interface plus immersive,
              plus lisible et inspirée des environnements GT3 endurance modernes.
            </p>
          </div>

          {/* Log */}
          <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-red-500">
                  Website Identity
                </p>

                <h2 className="mt-4 text-3xl font-bold text-white">
                  Construction de la direction artistique JL
                </h2>
              </div>

              <p className="text-sm uppercase tracking-[0.2em] text-white/35">
                Mai 2026
              </p>
            </div>

            <div className="mt-8 h-px w-16 bg-red-500" />

            <p className="mt-8 max-w-4xl text-lg leading-relaxed text-white/60">
              Mise en place d’une identité immersive sobre inspirée
              du motorsport moderne et des environnements endurance.
            </p>
          </div>

          {/* Log */}
          <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-red-500">
                  Immersion Systems
                </p>

                <h2 className="mt-4 text-3xl font-bold text-white">
                  Recherche autour des systèmes immersifs cockpit
                </h2>
              </div>

              <p className="text-sm uppercase tracking-[0.2em] text-white/35">
                Ongoing
              </p>
            </div>

            <div className="mt-8 h-px w-16 bg-red-500" />

            <p className="mt-8 max-w-4xl text-lg leading-relaxed text-white/60">
              Exploration des systèmes lumineux,
              feedbacks immersifs et cohérence sensorielle.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}