import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import VehiclesSection from './components/VehiclesSection'
import LaMaisonSection from './components/LaMaisonSection'
import QuoteSection from './components/QuoteSection'
import NewsSection from './components/NewsSection'
import Footer from './components/Footer'
import RecruitmentCard from './components/RecruitmentCard'

function App() {
  useEffect(() => {
    // Smooth scroll behavior com easing customizado
    const handleScroll = () => {
      const scrolled = window.scrollY
      const parallaxElements = document.querySelectorAll('[data-parallax]')
      
      parallaxElements.forEach((element) => {
        const speed = element.dataset.speed || 0.5
        const yPos = -(scrolled * speed)
        element.style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Debug: verificar se há elementos bloqueando
  useEffect(() => {
    const checkBlockingElements = () => {
      const allElements = document.querySelectorAll('*')
      allElements.forEach((el) => {
        const style = window.getComputedStyle(el)
        if (style.pointerEvents === 'none' && style.zIndex && parseInt(style.zIndex) > 100) {
          console.log('Potentially blocking element:', el, style.zIndex)
        }
      })
    }
    setTimeout(checkBlockingElements, 1000)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <VehiclesSection />
        <LaMaisonSection />
        <QuoteSection />
        <NewsSection />
      </main>
      <Footer />
      <RecruitmentCard />
    </div>
  )
}

export default App

