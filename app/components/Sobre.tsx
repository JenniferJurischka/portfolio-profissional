export default function Sobre() {
    return (
        <section id="sobre" style={{ padding: "8rem 10rem" }} className="flex justify-between items-center gap-16 px-32 w-full">
            
            <div className="flex flex-col gap-6 flex-1">
                <h2 className="text-4xl font-light">Sobre</h2>
                <p className="text-lg leading-relaxed">
                    Olá! Sou estudante de ADS, apaixonada por tecnologia, programação e desenvolvimento de soluções criativas. Estou construindo minha carreira na área de desenvolvimento web, sempre buscando aprender novas tecnologias e aprimorar minhas habilidades através de projetos práticos.
                </p>
                <p className="text-lg leading-relaxed">
                    Tenho facilidade para aprender, gosto de trabalhar em equipe e estou constantemente desenvolvendo meu conhecimento para criar aplicações cada vez mais completas e bem estruturadas.
                </p>
            </div>

            <div className="flex flex-col gap-6 bg-[var(--accent)] text-white p-14 px-16 rounded-2xl shadow-md w-[480px] shrink-0 min-h-[320px] justify-center">
                <h2 className="text-2xl font-light">Informações</h2>
                <p>☁ ADS — Uninter → UniCuritiba</p>
                <p>☁ Inglês: Intermediário-Avançado</p>
                <p>☁ Curitiba, PR</p>
                <p>☁ Disponível para oportunidades</p>
            </div>

        </section>
    )
}