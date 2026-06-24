export default function Contato() {
    return (
        <section id="contato">
            <h2>Contato</h2>
            <form>
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="assunto">Assunto:</label>
                <input type="text" id="assunto" name="assunto" required />
                <label htmlFor="mensagem">Mensagem:</label>
                <textarea id="mensagem" name="mensagem" required></textarea>
                <button type="submit">Enviar</button>
            </form>

            <a href="https://linkedin.com/in/Jennifer-Jurischka">LinkedIn</a>
<a href="https://github.com/JenniferJurischka">GitHub</a>
<a href="mailto:jennifer.jurischka@gmail.com">Email</a>
        </section>    )
}