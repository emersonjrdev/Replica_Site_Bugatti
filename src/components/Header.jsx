import { useState, useEffect } from 'react'
import SideMenu from './SideMenu'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevenir scroll quando menu está aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'
        }`}
        style={{ zIndex: 9998 }}
      >
        <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
          {/* Menu Hamburger */}
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setMenuOpen(!menuOpen)
            }}
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors z-50 relative"
            aria-label="Menu"
            style={{ zIndex: 9999, position: 'relative' }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="text-xs sm:text-sm font-light tracking-[0.15em] uppercase">
              MENU
            </span>
          </button>

          {/* Logo BUGATTI */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <a
              href="/"
              className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-white hover:text-gray-300 transition-colors uppercase"
              style={{ 
                letterSpacing: '0.5em',
                fontFamily: 'Arial, Helvetica, sans-serif'
              }}
            >
              BUGATTI
            </a>
          </div>

          {/* Store Icon */}
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              console.log('Store clicked')
            }}
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors relative"
            aria-label="Store"
            style={{ zIndex: 9999, position: 'relative' }}
          >
            <span className="text-xs sm:text-sm font-light tracking-[0.15em] uppercase">
              STORE
            </span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
        </nav>
      </header>

      {/* Side Menu */}
      <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

export default Header
