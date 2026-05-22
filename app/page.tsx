export default function JLSimracingLanding() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.12),transparent_40%)] pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-sm">
        <div>
          <h1 className="text-2xl font-bold tracking-[0.3em] uppercase">
            JL Simracing
          </h1>
          <p className="text-sm text-white/50 mt-1 tracking-wide">
            Engineering Cockpit Immersif
          </p>
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-white/70 uppercase tracking-wider">
          <a href="#vision" className="hover:text-white transition-colors">
            Vision
          </a>
          <a href="#system" className="hover:text-white transition-colors">
            Système
          </a>
          <a href="#philosophy" className="hover:text-white transition-colors">
            Philosophie
          </a>
          <a href="#future" className="hover:text-white transition-colors">
            Futur
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 px-8 md:px-20 py-28 md:py-40">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 border border-red-500/30 bg-red-500/10 rounded-full px-4 py-2 text-xs uppercase tracking-[0.25em] text-red-300 mb-8">
            GT3 • Endurance • Formula Inspired
          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-none tracking-tight max-w-4xl">
            Construire un
            <span className="text-red-500"> Cockpit </span>
            Vivant.
          </h2>

          <p className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
            JL Simracing est un projet simracing développé en solo, centré sur
            l’immersion cockpit, l’engineering intelligent, les sensations
            pilote et une architecture inspirée du motorsport réel.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-500 transition-colors text-sm uppercase tracking-wider font-semibold shadow-lg shadow-red-500/20">
              Découvrir la Vision
            </button>

            <button className="px-6 py-3 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition-colors text-sm uppercase tracking-wider font-semibold">
              Suivre le Développement
            </button>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section
        id="vision"
        className="relative z-10 px-8 md:px-20 py-20 border-t border-white/5"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-red-400 uppercase tracking-[0.25em] text-sm mb-4">
              Vision
            </p>

            <h3 className="text-4xl font-bold leading-tight max-w-xl">
              Une immersion motorsport pensée avec simplicité intelligente.
            </h3>
          </div>

          <div className="space-y-6 text-white/70 leading-relaxed text-lg">
            <p>
              JL Simracing ne cherche pas à devenir un simple setup gaming RGB.
              Chaque décision est guidée par l’immersion, la cohérence système,
              les sensations mécaniques et un engineering maintenable.
            </p>

            <p>
              L’objectif est de créer une expérience cockpit inspirée des
              machines GT3, endurance et Formula modernes, tout en restant
              accessible grâce à des solutions DIY intelligentes et optimisées
              coût/performance.
            </p>
          </div>
        </div>
      </section>

      {/* System Cards */}
      <section
        id="system"
        className="relative z-10 px-8 md:px-20 py-20"
      >
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            {
              title: 'Dashboard UI',
              text: 'Dashboards motorsport ultra lisibles développés autour de l’ESP32-S3 et LVGL.',
            },
            {
              title: 'RPM LEDs',
              text: 'Retour visuel périphérique conçu pour accompagner naturellement le pilotage.',
            },
            {
              title: 'Haptics',
              text: 'Sensations mécaniques subtiles inspirées des véritables voitures de course.',
            },
            {
              title: 'Architecture Système',
              text: 'Engineering modulaire centré sur la stabilité, la simplicité et la faible latence.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-red-500/30 transition-all"
            >
              <div className="h-1 w-12 bg-red-500 rounded-full mb-6" />

              <h4 className="text-2xl font-semibold mb-4">{item.title}</h4>

              <p className="text-white/65 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section
        id="philosophy"
        className="relative z-10 px-8 md:px-20 py-20 border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-red-400 uppercase tracking-[0.25em] text-sm mb-4">
              Philosophie
            </p>

            <h3 className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight">
              Le premium par l’expérience.
              <br />
              Pas par l’excès.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-white/10 p-8 bg-white/[0.03]">
              <h4 className="text-2xl font-semibold mb-6 text-red-400">
                Priorités JL Simracing
              </h4>

              <ul className="space-y-4 text-white/70 text-lg">
                <li>• Immersion et sensations pilote</li>
                <li>• Systèmes maintenables en solo</li>
                <li>• Solutions intelligentes low-cost</li>
                <li>• UX inspirée du motorsport</li>
                <li>• Architecture modulaire long terme</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 p-8 bg-white/[0.03]">
              <h4 className="text-2xl font-semibold mb-6 text-red-400">
                Ce que JL évite
              </h4>

              <ul className="space-y-4 text-white/70 text-lg">
                <li>• RGB gaming chaos</li>
                <li>• Complexité inutile</li>
                <li>• Surcharge de fonctionnalités</li>
                <li>• Systèmes impossibles à maintenir</li>
                <li>• Gadgets sans utilité réelle</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future */}
      <section
        id="future"
        className="relative z-10 px-8 md:px-20 py-24"
      >
        <div className="rounded-[2rem] border border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent p-10 md:p-16">
          <p className="text-red-400 uppercase tracking-[0.25em] text-sm mb-4">
            Futur Écosystème
          </p>

          <h3 className="text-4xl md:text-6xl font-black leading-tight max-w-4xl">
            Plus qu’un volant.
            <br />
            Une véritable identité cockpit.
          </h3>

          <p className="mt-8 text-lg text-white/70 max-w-3xl leading-relaxed">
            JL Simracing évolue vers un écosystème cohérent de technologies
            cockpit immersives, de systèmes d’interactions intelligents et
            d’expériences inspirées du motorsport moderne.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-8 md:px-20 py-10 border-t border-white/5 text-white/40 text-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          © JL Simracing — Expérience Motorsport Développée en Solo
        </div>

        <div className="uppercase tracking-[0.2em] text-xs">
          Construit avec passion, discipline et simplicité intelligente.
        </div>
      </footer>
    </div>
  )
}