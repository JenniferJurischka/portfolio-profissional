export default function Skills() {
    return (
        <section id="skills" style={{ padding: "8rem 10rem" }} className="w-full">
            <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-bold mb-4">Habilidades</h2>

            <div>
        <h3 className="text-[var(--text-secondary)] tracking-widest text-sm mb-6">CONHECIMENTO</h3>
        <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full border border-[var(--accent)] text-[var(--accent)] bg-transparent">JavaScript</span>
                <span className="px-4 py-2 rounded-full border border-[var(--accent)] text-[var(--accent)] bg-transparent">React</span>
                <span className="px-4 py-2 rounded-full border border-[var(--accent)] text-[var(--accent)] bg-transparent">Next.js</span>
                <span className="px-4 py-2 rounded-full border border-[var(--accent)] text-[var(--accent)] bg-transparent">HTML/CSS</span>
                <span className="px-4 py-2 rounded-full border border-[var(--accent)] text-[var(--accent)] bg-transparent">TypeScript</span>
                <span className="px-4 py-2 rounded-full border border-[var(--accent)] text-[var(--accent)] bg-transparent">Git e GitHub</span>
                <span className="px-4 py-2 rounded-full border border-[var(--accent)] text-[var(--accent)] bg-transparent">Diagramas UML</span>
</div>
</div>

<div>
            <h3 className="text-2xl font-bold mb-4">Estudando Atualmente</h3>
            <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full border border-[var(--accent)] text-[var(--accent)] bg-transparent">Desenvolvimento Web</span>
                <span className="px-4 py-2 rounded-full border border-[var(--accent)] text-[var(--accent)] bg-transparent">Programação Mobile</span>
                <span className="px-4 py-2 rounded-full border border-[var(--accent)] text-[var(--accent)] bg-transparent">Banco de Dados</span>
                <span className="px-4 py-2 rounded-full border border-[var(--accent)] text-[var(--accent)] bg-transparent">Responsividade</span>
                <span className="px-4 py-2 rounded-full border border-[var(--accent)] text-[var(--accent)] bg-transparent">Lógica de Programação</span>
                </div>
                </div>
                </div>
        </section>    )
}