export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-4 text-center px-8">
      <p className="text-sm tracking-widest text-[var(--text-secondary)]">Olá, eu sou</p>
      <h1 className="text-6xl font-light tracking-wide">Jennifer Jurischka</h1>
      <p className="text-xl text-[var(--text-secondary)]">Desenvolvedora Full Stack</p>
     <a
  href="#projetos"
  className="
    mt-16
    inline-flex
    items-center
    gap-2
    h-8
    px-5
    rounded-full
    text-[var(--accent)]
    transition-all
    duration-300
    hover:bg-[var(--accent)]
    hover:text-white
    hover:shadow-lg
    hover:-translate-y-1
  "
>
  Ver projetos
  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</a>
    </section>
  )
}