import { useRef, useEffect } from 'react'

const newsItems = [
  {
    id: 1,
    title: 'Type 35: Making of a Champion',
    image:
      'https://bugatti.imgix.net/6734a28b8d33578d8bd2af36/01%20BUGATTI_Type%2035%20Making%20of%20a%20Champion_edit.jpg?auto=format,compress&cs=srgb&sharp=10&w=798',
  },
  {
    id: 2,
    title: 'Customer Car Gathering',
    image:
      'https://bugatti.imgix.net/6734a2b6eae7ef2f6d1c330d/02%20BUGATTI_Custmer-Car-Gathering.jpg?auto=format,compress&cs=srgb&sharp=10&w=798',
  },
  {
    id: 3,
    title: 'Bugatti Heritage',
    image:
      'https://bugatti.imgix.net/6734a52ceae7ef2f6d1c380c/AB105132_Crop.jpg?auto=format,compress&cs=srgb&sharp=10&w=798',
  },
]

const NewsSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll('.news-item')
      items.forEach((item) => observer.observe(item))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-32 bg-black overflow-hidden flex items-center"
    >
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-extralight tracking-tight text-white mb-4">
            NEWS
          </h2>
          <div className="w-24 h-px bg-white/30 mx-auto"></div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {newsItems.map((item, index) => (
            <a
              key={item.id}
              href={`#news-${item.id}`}
              className="news-item group relative overflow-hidden bg-black border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer block"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
              onClick={(e) => {
                e.preventDefault()
                console.log(`News item ${item.id} clicked`)
              }}
            >
              {/* News Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>

              {/* News Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-xl font-light tracking-wide text-white">
                  {item.title}
                </h3>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsSection

