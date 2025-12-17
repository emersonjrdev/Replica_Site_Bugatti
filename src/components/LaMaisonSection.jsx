const LaMaisonSection = () => {
  return (
    <section className="relative h-screen w-full bg-black snap-start snap-always overflow-hidden">
      {/* Black section with text */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-extralight tracking-tight text-white text-center">
          LA MAISON BUGATTI
        </h2>
      </div>

      {/* Mansion image at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2/3 z-0">
        <img
          src="https://bugatti.imgix.net/6734a52ceae7ef2f6d1c380c/AB105132_Crop.jpg?auto=format,compress&cs=srgb&sharp=10&w=1920&fit=crop&h=1080"
          alt="La Maison Bugatti"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>
    </section>
  )
}

export default LaMaisonSection

