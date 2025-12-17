import { useEffect, useRef } from 'react'

const Hero = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    // Tentar reproduzir o vídeo automaticamente
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Ignorar erros de autoplay
      })
    }
  }, [])

  return (
    <section className="relative min-h-screen h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://bugatti.imgix.video/689485bb9fe9b36d36421e76/250807-solitaire-brouillard-video-trailer-landscape.mp4?fm=mp4&w=1920"
            type="video/mp4"
          />
        </video>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10"></div>
      </div>

      {/* Main Content - Solitaire Section */}
      <div className="relative z-20 container mx-auto px-6 pt-32 pb-20 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-6xl">
          {/* Solitaire Wordmark */}
          <div className="mb-8 flex justify-center">
            <img
              src="https://bugatti.imgix.net/689394f09fe9b36d362dec02/Solitaire_Wordmark_black_tight.svg?auto=format,compress&cs=srgb&sharp=10&w=594"
              alt="Solitaire"
              className="h-32 md:h-48 w-auto filter brightness-0 invert"
            />
          </div>

          {/* Slogan */}
          <div className="text-center mb-12">
            <p className="text-sm md:text-base font-light tracking-[0.3em] text-white/90 uppercase mb-4">
              ROOTED IN TRADITION. BUILT TO LEAVE A LEGACY.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center relative z-30">
            <a
              href="#solitaire"
              className="px-8 py-4 border-2 border-white text-white font-light tracking-wider hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase inline-block cursor-pointer relative z-30"
              onClick={(e) => {
                e.preventDefault()
                // Scroll para seção solitaire se existir
                const element = document.getElementById('solitaire')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              DISCOVER THE PROGRAMME SOLITAIRE
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-xs font-light tracking-wider uppercase">
            Scroll
          </span>
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
    </section>
  )
}

export default Hero
