import { motion, type Variants } from 'framer-motion';

const Hero = () => {
  // We add a 2.4s initial delay to wait for the PageLoader to finish its beautiful intro
  const initDelay = 2.4;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: initDelay,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0, filter: "blur(5px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 80, damping: 20 }
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      <motion.div 
        className="flex flex-col lg:flex-row gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex-1 space-y-6">
          <motion.div variants={itemVariants}>
            <div className="inline-block px-4 py-1.5 bg-ivory rounded-full text-terracotta text-sm font-medium border border-border-cream">
              ✦ backend architect & full-stack engineer
            </div>
          </motion.div>
          
          <motion.h1 
            className="font-serif text-5xl md:text-7xl lg:text-7xl font-medium tracking-tight text-near-black leading-[1.15]"
            variants={itemVariants}
          >
            <motion.span 
              className="inline-block"
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ type: "spring", damping: 12, delay: initDelay + 0.1 }}
              style={{ transformOrigin: "bottom" }}
            >
            Rachel
            </motion.span>
            <motion.span 
              className="text-terracotta inline-block"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", damping: 10, delay: initDelay + 0.6 }}
            >
              .
            </motion.span>
            <br />
            <span className="overflow-hidden inline-block mt-2">
              <motion.span 
                className="inline-block"
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: initDelay + 0.3 }}
              >
                Crafting robust systems
              </motion.span>
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-olive-gray text-xl md:text-2xl leading-relaxed max-w-xl"
            variants={itemVariants}
          >
            Hi, I'm <span className="font-semibold text-near-black">Tùng Dương (0xcRachel)</span> — backend developer with a GPA of 3.65/4.0,
            passionate about Laravel, Rust, Zig and modern web infrastructure.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 pt-4"
            variants={itemVariants}
          >
            <a href="#projects" className="bg-near-black text-warm-silver px-6 py-3 rounded-xl font-medium ring-warm hover:bg-dark-surface transition-all flex items-center gap-2 group">
              Explore work <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="https://github.com/0xcRachel" target="_blank" rel="noreferrer" className="bg-warm-sand text-charcoal-warm px-6 py-3 rounded-xl font-medium ring-warm hover:bg-border-warm transition-all flex items-center gap-2">
              GitHub profile
            </a>
          </motion.div>
          
          {/* stats row */}
          <motion.div 
            className="flex gap-8 pt-8 border-t border-border-cream mt-6"
            variants={itemVariants}
          >
            <div><span className="font-serif text-3xl font-medium">3.65</span><span className="text-olive-gray ml-1">/4.0 GPA</span></div>
            <div><span className="font-serif text-3xl font-medium">6+</span><span className="text-olive-gray ml-1">major projects</span></div>
            <div><span className="font-serif text-3xl font-medium">∞</span><span className="text-olive-gray ml-1">curiosity</span></div>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex-1 relative flex justify-center perspective-[1000px]"
          initial={{ opacity: 0, x: 80, scale: 0.9, rotateY: 15 }}
          animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 20, delay: initDelay + 0.4 }}
        >
          <motion.img
            className="h-[620px] drop-shadow-xl drop-shadow-black/20 cursor-pointer"
            src="./img/98291a.png"
            alt="0xcRachel Profile"
            whileHover={{ 
              y: -15, 
              scale: 1.03, 
              filter: "drop-shadow(0 25px 40px rgba(201,100,66,0.25))" 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
