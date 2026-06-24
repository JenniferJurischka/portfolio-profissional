import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Projetos from './components/Projetos'
import Skills from './components/Skills'
import Contato from './components/Contato'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main>
    <Navbar />
    <Hero />
    <Sobre />
    <Skills />
    <Projetos />
    <Contato />
    </main>
  )
}
