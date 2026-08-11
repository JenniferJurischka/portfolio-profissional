export default function Contato() {
    return(
        <section id="contato" style={{ padding: "8rem 10rem" }} className="w-full">
            <h2 className="text-4xl font-light mb-12">Contato</h2>

            <div className="flex gap-16 items-start">

            <form className="flex flex-col gap-6 flex-1">
             <div className="flex flex-col gap-2">
                <label htmlFor="nome" className="text-sm tracking-widest text-[var(--text-secondary)]">Nome</label>
                <input type="text" id="nome" name="nome" required
                 className="bg-transparent border-b border-[var(--accent)]/40 py-3 outline-none focus:border-[var(--accent)] transition-all text-[var(--text-primary)]" />

                    </div>

             <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm tracking-widest text-[var(--text-secondary)]">Email</label>
                <input type="email" id="email" name="email" required
                 className="bg-transparent border-b border-[var(--accent)]/40 py-3 outline-none focus:border-[var(--accent)] transition-all text-[var(--text-primary)]" />
             </div>

             <div className="flex flex-col gap-2">
                <label htmlFor="assunto" className="text-sm tracking-widest text-[var(--text-secondary)]">Assunto</label>
                <input type="text" id="assunto" name="assunto" required
                 className="bg-transparent border-b border-[var(--accent)]/40 py-3 outline-none focus:border-[var(--accent)] transition-all text-[var(--text-primary)]" />
             </div>

             <div className="flex flex-col gap-2">
                <label htmlFor="mensagem" className="text-sm tracking-widest text-[var(--text-secondary)]">Mensagem</label>
                <textarea id="mensagem" name="mensagem" rows={5} required
                 className="bg-transparent border-b border-[var(--accent)]/40 py-3 outline-none focus:border-[var(--accent)] transition-all resize-none text-[var(--text-primary)]" />
             </div>

             <button type="submit" className="self-start px-8 py-3 bg-[var(--accent)] text-white rounded-full hover:bg-[var(--accent-soft)] transition-all">
                Enviar Mensagem
              </button>
                </form>

                <div className="flex flex-col gap-6 pt-4">
                    <p className="text-sm tracking-widest text-[var(--text-secondary)]">REDES</p>
                    <a href="https://linkedin.com/in/Jennifer-Jurischka" className="text-lg hover:text-[var(--accent)] transition-all">LinkedIn →</a>
                    <a href="https://github.com/JenniferJurischka" className="text-lg hover:text-[var(--accent)] transition-all">GitHub →</a>
                    <a href="mailto:jennifer.jurischka@gmail.com" className="text-lg hover:text-[var(--accent)] transition-all">Email →</a>
                </div>

            </div>
        </section>
    )
}