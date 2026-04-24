
import RevealOnScroll from './RevealOnScroll'

const ContactCommunity = () => {
    return (
        <>
            <section id="contact" className="bg-near-black text-ivory py-20 md:py-24">
                <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
                    <RevealOnScroll delay={100}>
                        <div className="inline-block px-4 py-1.5 bg-dark-surface rounded-full text-warm-silver text-sm border border-[#30302e] mb-6">· Discord community ·</div>
                        <h2 className="font-serif text-4xl md:text-5xl font-medium text-ivory mb-5">Let's architect the future</h2>
                    </RevealOnScroll>
                    <RevealOnScroll delay={200}>
                        <p className="text-warm-silver text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                            Active member of Discord dev hubs, open source contributor, and always curious about new tech.
                            Reach out for collaborations, Rust meetups, or just to talk about distributed systems.
                        </p>
                    </RevealOnScroll>
                    <RevealOnScroll delay={300}>
                        <div className="flex flex-wrap justify-center gap-5">
                            <a href="https://github.com/0xcRachel" target="_blank" className="bg-dark-surface/60 hover:bg-dark-surface border border-[#30302e] rounded-xl px-6 py-3 flex items-center gap-2 transition-all text-warm-silver">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.21.68-.48 0-.24-.01-1.04-.01-1.89-2.78.6-3.37-1.2-3.37-1.2-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.11-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.21 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z" /></svg>
                                GitHub / 0xcRachel
                            </a>
                            <a href="mailto:tungxeko912@gmail.com" className="bg-terracotta hover:bg-coral-accent text-ivory rounded-xl px-6 py-3 flex items-center gap-2 transition-all">
                                tungxeko912@gmail.com
                            </a>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll delay={400}>
                        <div className="mt-12 text-sm text-stone-gray border-t border-dark-surface/50 pt-8">
                            <span>Discord: 0xcRachel • always open for backend collaborations & system design talks</span>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>
        </>
    )
}

export default ContactCommunity