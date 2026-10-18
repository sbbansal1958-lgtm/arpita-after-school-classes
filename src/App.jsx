import { LangProvider } from './i18n.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import About from './components/About.jsx'
import Classes from './components/Classes.jsx'
import WhyUs from './components/WhyUs.jsx'
import Gallery from './components/Gallery.jsx'
import Teachers from './components/Teachers.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FloatingActions from './components/FloatingActions.jsx'

export default function App() {
  return (
    <LangProvider>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Classes />
        <WhyUs />
        <Gallery />
        <Teachers />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </LangProvider>
  )
}
