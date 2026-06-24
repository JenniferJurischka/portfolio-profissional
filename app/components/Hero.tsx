export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-4 text-center px-8">
      <p className="text-sm tracking-widest text-[var(--text-secondary)]">Olá, eu sou</p>
      <h1 className="text-6xl font-light tracking-wide">Jennifer Jurischka</h1>
      <p className="text-xl text-[var(--text-secondary)]">Desenvolvedora Full Stack</p>
      <a href="#projetos" className="mt-4 px-6 py-3 text-[var(--accent)] rounded-full hover:bg-[var(--accent)] hover:text-white transition-all">
        Ver projetos →
      </a>
    </section>
  )
}