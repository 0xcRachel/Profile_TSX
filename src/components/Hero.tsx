import RevealOnScroll from './RevealOnScroll';

const Hero = () => (
  <section className="max-w-7xl mx-auto px-6 md:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
    <div className="flex flex-col lg:flex-row gap-12 items-center">
      <div className="flex-1 space-y-6">
        <RevealOnScroll delay={100}>
          <div className="inline-block px-4 py-1.5 bg-ivory rounded-full text-terracotta text-sm font-medium border border-border-cream">
            ✦ backend architect & full-stack engineer
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={200}>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-7xl font-medium tracking-tight text-near-black leading-[1.15]">
            Rachel<span className="text-terracotta">.</span><br />Crafting robust systems
          </h1>
        </RevealOnScroll>
        <RevealOnScroll delay={300}>
          <p className="text-olive-gray text-xl md:text-2xl leading-relaxed max-w-xl">
            Hi, I'm <span className="font-semibold text-near-black">Tùng Dương (0xcRachel)</span> — backend developer with a GPA of 3.65/4.0,
            passionate about Laravel, Rust, Zig and modern web infrastructure.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={400}>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="bg-near-black text-warm-silver px-6 py-3 rounded-xl font-medium ring-warm hover:bg-dark-surface transition-all flex items-center gap-2">
              Explore work <span>→</span>
            </a>
            <a href="https://github.com/0xcRachel" target="_blank" className="bg-warm-sand text-charcoal-warm px-6 py-3 rounded-xl font-medium ring-warm hover:bg-border-warm transition-all flex items-center gap-2">
              GitHub profile
            </a>
          </div>
        </RevealOnScroll>
        {/* stats row */}
        <RevealOnScroll delay={500}>
          <div className="flex gap-8 pt-8 border-t border-border-cream mt-6">
            <div><span className="font-serif text-3xl font-medium">3.65</span><span className="text-olive-gray ml-1">/4.0 GPA</span></div>
            <div><span className="font-serif text-3xl font-medium">6+</span><span className="text-olive-gray ml-1">major projects</span></div>
            <div><span className="font-serif text-3xl font-medium">∞</span><span className="text-olive-gray ml-1">curiosity</span></div>
          </div>
        </RevealOnScroll>
      </div>
      <div className="flex-1 relative flex justify-center">
        <RevealOnScroll delay={600}>
          <img
            className="h-[620px] drop-shadow-xl drop-shadow-black/20 transition-all duration-700 ease-in-out hover:-translate-y-3 hover:scale-[1.02] hover:drop-shadow-[0_20px_35px_rgba(201,100,66,0.15)] cursor-pointer"
            src="./img/98291a.png"
            alt=""
          />
        </RevealOnScroll>
      </div>
    </div>
  </section>
);

export default Hero;
