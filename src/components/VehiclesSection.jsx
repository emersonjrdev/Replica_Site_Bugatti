import { useEffect, useRef } from 'react'

const vehicles = [
  {
    id: 'tourbillon',
    name: 'TOURBILLON',
    video: 'https://bugatti.imgix.video/689485bb9fe9b36d36421e76/250807-solitaire-brouillard-video-trailer-landscape.mp4?fm=mp4&w=1920',
    image: 'https://bugatti.imgix.net/6733871ced9d56f31c5f0182/bugatti-tourbillon-card.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=16:9&w=1920',
  },
  {
    id: 'mistral',
    name: 'W16 MISTRAL',
    video: null,
    image: 'https://bugatti.imgix.net/677e8130e825e63ca2bd56fe/bugatti-w16mistral-card_v3.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=16:9&w=1920',
  },
  {
    id: 'bolide',
    name: 'BOLIDE',
    video: null,
    image: 'https://bugatti.imgix.net/6733878496f2c0c4a773f58b/bugatti-bolide-card.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=16:9&w=1920',
  },
  {
    id: 'chiron',
    name: 'CHIRON',
    video: null,
    image: 'https://bugatti.imgix.net/67338aa2ed9d56f31c5f0689/bugatti-chiron-card-02.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=16:9&w=1920',
  },
  {
    id: 'divo',
    name: 'DIVO',
    video: null,
    image: 'https://bugatti.imgix.net/673387e8ed9d56f31c5f01c5/bugatti-divo-card.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=16:9&w=1920',
  },
  {
    id: 'centodieci',
    name: 'CENTODIECI',
    video: null,
    image: 'https://bugatti.imgix.net/6733881f96f2c0c4a773f5b2/bugatti-centodieci-card.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=16:9&w=1920',
  },
]

const VehiclesSection = () => {
  const sectionRef = useRef(null)
  const videoRefs = useRef({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const video = entry.target.querySelector('video')
            if (video) {
              video.play().catch(() => {})
            }
          } else {
            const video = entry.target.querySelector('video')
            if (video) {
              video.pause()
            }
          }
        })
      },
      { threshold: 0.5 }
    )

    const cards = document.querySelectorAll('.vehicle-card')
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {vehicles.map((vehicle, index) => (
        <section
          key={vehicle.id}
          ref={index === 0 ? sectionRef : null}
          className="vehicle-card group relative h-screen w-full bg-black overflow-hidden cursor-pointer"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {/* Subtle border on hover */}
            <div className="absolute inset-0 border border-transparent group-hover:border-white/10 transition-all duration-700 z-20 pointer-events-none"></div>
            {/* Video or Image Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {vehicle.video ? (
                <video
                  ref={(el) => (videoRefs.current[vehicle.id] = el)}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                >
                  <source src={vehicle.video} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                />
              )}
              {/* Overlay gradient - mais sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              {/* Hover overlay - efeito mais sutil */}
              <div className="absolute inset-0 bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>

            {/* Vehicle Name - Large text bottom left */}
            <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 z-10 pointer-events-none">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[10rem] font-extralight tracking-tight text-white transform group-hover:translate-x-3 sm:group-hover:translate-x-6 transition-transform duration-700 leading-none">
                {vehicle.name}
              </h2>
            </div>
            {/* Clickable link overlay - deve estar por último para estar acima de tudo */}
            <a
              href={`#${vehicle.id}`}
              className="absolute inset-0 cursor-pointer"
              style={{ zIndex: 10 }}
              aria-label={`View ${vehicle.name}`}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                console.log(`Clicked ${vehicle.name}`)
                // Scroll suave para a seção
                const element = document.getElementById(vehicle.id)
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            ></a>
          </section>
        ))}
    </>
  )
}

export default VehiclesSection
