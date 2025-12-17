import { useState } from 'react'

const menuData = {
  'current-models': [
    { id: 'tourbillon', name: 'TOURBILLON', image: 'https://bugatti.imgix.net/6733871ced9d56f31c5f0182/bugatti-tourbillon-card.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=442' },
    { id: 'mistral', name: 'W16 MISTRAL', image: 'https://bugatti.imgix.net/677e8130e825e63ca2bd56fe/bugatti-w16mistral-card_v3.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=442' },
    { id: 'bolide', name: 'BOLIDE', image: 'https://bugatti.imgix.net/6733878496f2c0c4a773f58b/bugatti-bolide-card.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=442' },
    { id: 'chiron', name: 'CHIRON', image: 'https://bugatti.imgix.net/67338aa2ed9d56f31c5f0689/bugatti-chiron-card-02.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=442' },
  ],
  'contemporary-models': [
    { id: 'divo', name: 'DIVO', image: 'https://bugatti.imgix.net/673387e8ed9d56f31c5f01c5/bugatti-divo-card.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=442' },
    { id: 'centodieci', name: 'CENTODIECI', image: 'https://bugatti.imgix.net/6733881f96f2c0c4a773f5b2/bugatti-centodieci-card.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=442' },
  ],
}

const SideMenu = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState('current-models')
  const [cards, setCards] = useState(menuData['current-models'])

  const handleMenuClick = (sectionKey) => {
    setActiveSection(sectionKey)
    if (menuData[sectionKey]) {
      setCards(menuData[sectionKey])
    }
  }

  return (
    <>
      {/* Backdrop - escurece o fundo mas não bloqueia */}
      <div
        className={`fixed inset-0 bg-black/30 z-[9996] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Menu Container - apenas lado esquerdo - responsivo */}
      <div
        className={`fixed left-0 top-0 bottom-0 bg-white z-[9997] overflow-y-auto transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          width: 'clamp(280px, 66.666vw, 384px)' // ~2/3 da tela no mobile, máximo 384px
        }}
      >
        {/* Menu Content - SEM botão de fechar */}
        <div className="p-4 sm:p-6 pt-16 sm:pt-20">
          {/* HYPER SPORTS CARS */}
          <div className="mb-8">
            <h3 className="text-xs font-light tracking-wider text-gray-500 uppercase mb-4">
              HYPER SPORTS CARS
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleMenuClick('current-models')}
                  className={`w-full flex items-center justify-between p-3 text-left transition-colors group ${
                    activeSection === 'current-models'
                      ? 'bg-black text-white'
                      : 'text-black hover:text-gray-600'
                  }`}
                >
                  <span className="font-medium">Current Models</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleMenuClick('contemporary-models')}
                  className={`w-full flex items-center justify-between p-3 text-left transition-colors group ${
                    activeSection === 'contemporary-models'
                      ? 'bg-black text-white'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  <span>Contemporary Models</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between text-gray-600 hover:text-black transition-colors group p-3"
                >
                  <span>Classic Icons</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between text-black hover:text-gray-600 transition-colors group p-3"
                >
                  <span className="font-medium">Individualization</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* LA MARQUE */}
          <div className="mb-8">
            <h3 className="text-xs font-light tracking-wider text-gray-500 uppercase mb-4">
              LA MARQUE
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between text-gray-600 hover:text-black transition-colors group p-3"
                >
                  <span>Company</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors p-3 block"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors p-3 block"
                >
                  Newsroom
                </a>
              </li>
            </ul>
          </div>

          {/* OWNERSHIP */}
          <div className="mb-8">
            <h3 className="text-xs font-light tracking-wider text-gray-500 uppercase mb-4">
              OWNERSHIP
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between text-gray-600 hover:text-black transition-colors group p-3"
                >
                  <span>Dealer Finder</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between text-gray-600 hover:text-black transition-colors group p-3"
                >
                  <span>Customer Service</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between text-gray-600 hover:text-black transition-colors group p-3"
                >
                  <span>La Maison Pur Sang</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* LIFESTYLE */}
          <div>
            <h3 className="text-xs font-light tracking-wider text-gray-500 uppercase mb-4">
              LIFESTYLE
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between text-gray-600 hover:text-black transition-colors group p-3"
                >
                  <span>Collections</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors p-3 block"
                >
                  BUGATTI Store
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Content Area - Cards - lado direito, visível ao lado do menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-black/95 backdrop-blur-sm overflow-y-auto z-[9996] pointer-events-auto transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          left: 'clamp(280px, 66.666vw, 384px)' // Começa onde o menu termina
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {cards.map((card) => (
              <a
                key={card.id}
                href={`#${card.id}`}
                className="group relative h-[400px] sm:h-[500px] overflow-hidden cursor-pointer block"
                onClick={(e) => {
                  e.preventDefault()
                  console.log(`Clicked on ${card.name}`)
                }}
              >
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 sm:p-8 z-10">
                  <h3 className="text-3xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-white">
                    {card.name}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default SideMenu
