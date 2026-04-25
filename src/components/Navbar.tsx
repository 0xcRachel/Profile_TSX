const Navbar = () => {
  return (
    <>
        <header className="sticky top-0 z-50 bg-parchment/90 backdrop-blur-sm border-b border-border-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-2xl font-medium tracking-tight text-near-black">0xcRachel</span>
            <span className="text-stone-gray text-sm hidden md:inline-block ml-1">(Tùng Dương)</span>
          </div>
          
          <a href="#contact" className="bg-terracotta text-ivory px-5 py-2 rounded-xl text-sm font-medium shadow-ring-terracotta hover:bg-coral-accent transition-all">
            Let's connect
          </a>
        </div>
      </header>
    </>
  )
}

export default Navbar
