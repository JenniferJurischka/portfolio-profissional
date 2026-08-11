import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Projetos from './components/Projetos'
import Skills from './components/Skills'
import Contato from './components/Contato'
import Navbar from './components/Navbar'
import NuvemDivisoria from './components/NuvemDivisoria'

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <NuvemDivisoria />
      <Sobre />
      <NuvemDivisoria />
      <Skills />
      <NuvemDivisoria />
      <Projetos />
      <NuvemDivisoria />
      <Contato />
    </main>
  )
}