export default function VisionPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-24 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Back Button */}
        <div className="mb-16">
          <a
            href="/"
            className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-3 text-xs uppercase tracking-[0.25em] text-white/60 transition-all duration-500 hover:border-red-500/30 hover:text-white"
          >
            ← Retour Accueil
          </a>
        </div>

        {/* Hero */}
        <div className="mb-32">
          <p className="text-xs uppercase tracking-[0.35em] text-red-500">
            JL Simracing Vision
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.05em] md:text-7xl">
            Construire une immersion cockpit
            inspirée du motorsport moderne.
          </h1>

          <p className="mt-10 max-w-3xl text-xl leading-relaxed text-white/60">
            JL Simracing explore une approche immersive inspirée
            du GT3, de l’endurance et des environnements cockpit modernes
            autour d’une logique engineering cohérente et maintenable.
          </p>
        </div>

        {/* Philosophy Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1 */}
          <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-red-500">
              Immersion
            </p>

            <div className="mt-8 h-px w-16 bg-red-500" />

            <p className="mt-8 text-lg leading-relaxed text-white/60">
              Chaque système, interface et élément visuel est pensé
              pour renforcer la sensation cockpit sans surcharge
              ni distraction inutile.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-red-500">
              Engineering
            </p>

            <div className="mt-8 h-px w-16 bg-red-500" />

            <p className="mt-8 text-lg leading-relaxed text-white/60">
              L’architecture JL Simracing privilégie la cohérence,
              la simplicité maintenable et l’évolution progressive.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-red-500">
              Motorsport DNA
            </p>

            <div className="mt-8 h-px w-16 bg-red-500" />

            <p className="mt-8 text-lg leading-relaxed text-white/60">
              GT3, endurance et engineering européen inspirent
              l’ensemble de l’identité visuelle et de la philosophie cockpit.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-red-500">
              Progressive Ecosystem
            </p>

            <div className="mt-8 h-px w-16 bg-red-500" />

            <p className="mt-8 text-lg leading-relaxed text-white/60">
              JL Simracing évoluera progressivement vers un environnement
              cockpit immersif plus complet au fil du développement.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}