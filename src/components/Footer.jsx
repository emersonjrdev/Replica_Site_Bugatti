const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-white/10 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* HYPER SPORTS CARS */}
          <div>
            <h3 className="text-xs font-light tracking-wider text-gray-500 uppercase mb-4">
              HYPER SPORTS CARS
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                  Current Models
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                  Contemporary Models
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                  Classic Icons
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                  Individualization
                </a>
              </li>
            </ul>
          </div>

          {/* LA MARQUE */}
          <div>
            <h3 className="text-xs font-light tracking-wider text-gray-500 uppercase mb-4">
              LA MARQUE
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                  Newsroom
                </a>
              </li>
            </ul>
          </div>

          {/* OWNERSHIP */}
          <div>
            <h3 className="text-xs font-light tracking-wider text-gray-500 uppercase mb-4">
              OWNERSHIP
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                  Dealer Finder
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                  Customer Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                  La Maison Pur Sang
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
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                  Collections
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                  BUGATTI Store
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/50 text-sm">
            © {new Date().getFullYear()} Bugatti Automobiles S.A.S. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">
              Legal Notice
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

