export default function Projetos() {
    return (
        <section id="projetos" style={{ padding: "8rem 10rem" }} className="w-full">
            <h2 className="text-4xl font-light mb-12">Projetos</h2>
            
            <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-4 p-8 rounded-2xl border border-[var(--accent)]/30 hover:border-[var(--accent)] transition-all">
                    <h3 className="text-xl font-medium">Sistema automático para RPG</h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">Um sistema para que meus players possam gerenciar suas fichas de personagens, anotações, e outros elementos do jogo.</p>
                    <a href="#" className="text-[var(--accent)] hover:underline mt-auto">Ver projeto →</a>
                </div>

                <div className="flex flex-col gap-4 p-8 rounded-2xl border border-[var(--accent)]/30 hover:border-[var(--accent)] transition-all">
                    <h3 className="text-xl font-medium">Banco de dados Supabase</h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">Banco de dados criado com Supabase, integrado ao projeto do Sistema automático para RPG.</p>
                    <a href="#" className="text-[var(--accent)] hover:underline mt-auto">Ver projeto →</a>
                </div>

                <div className="flex flex-col gap-4 p-8 rounded-2xl border border-[var(--accent)]/30 hover:border-[var(--accent)] transition-all">
                    <h3 className="text-xl font-medium">Diagramas do Sistema RPG</h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">Diagramas UML que representam a estrutura e o funcionamento do sistema automático para RPG.</p>
                    <a href="#" className="text-[var(--accent)] hover:underline mt-auto">Ver diagramas →</a>
                </div>

                <div className="flex flex-col gap-4 p-8 rounded-2xl border border-[var(--accent)]/30 hover:border-[var(--accent)] transition-all">
                    <h3 className="text-xl font-medium">Este Portfólio</h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">Portfólio profissional desenvolvido com Next.js, TypeScript e Tailwind CSS.</p>
                    <a href="#" className="text-[var(--accent)] hover:underline mt-auto">Ver projeto →</a>
                </div>
            </div>
        </section>
    )
}