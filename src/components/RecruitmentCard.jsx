import { useState } from 'react'

const RecruitmentCard = () => {
  const [isVisible, setIsVisible] = useState(true)

  const handleClose = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Close button clicked')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div 
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-[calc(100vw-2rem)] sm:w-80 md:w-96 max-w-[calc(100vw-2rem)] sm:max-w-none"
      style={{ zIndex: 10000 }}
    >
      <div className="bg-black/90 backdrop-blur-md border border-white/10 overflow-visible hover:border-white/20 transition-all duration-300 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full backdrop-blur-sm cursor-pointer"
          aria-label="Close"
          type="button"
          style={{ 
            zIndex: 10001,
            pointerEvents: 'auto'
          }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {/* Image - Real recruitment image */}
        <div className="w-full h-48 relative overflow-hidden">
          <img
            src="https://bugatti.imgix.net/675dd71ea55eb753a13b8f55/careers_mission_surmesure.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:3&w=400"
            alt="Careers at Bugatti"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 bg-black/60">
          <h3 className="text-white text-sm sm:text-base font-light mb-3 leading-relaxed">
            Are you ready for a new adventure?
            <br />
            <span className="text-gray-300 font-extralight">We are hiring.</span>
          </h3>
          <a
            href="#careers"
            className="mt-4 w-full py-2.5 border border-white text-white font-light tracking-wider hover:bg-white hover:text-black transition-all duration-300 text-xs sm:text-sm uppercase text-center block"
          >
            EXPLORE OUR OPPORTUNITIES
          </a>
        </div>
      </div>
    </div>
  )
}

export default RecruitmentCard

