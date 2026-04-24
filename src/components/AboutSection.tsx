
import RevealOnScroll from './RevealOnScroll'

const AboutSection = () => {
    return (
        <>
            <section id="about" className="bg-ivory border-y border-border-cream py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <RevealOnScroll>
                        <div className="max-w-3xl mx-auto text-center md:text-left md:mx-0">
                            <span className="text-terracotta text-sm font-medium uppercase tracking-wider">· Philosophy</span>
                            <h2 className="font-serif text-4xl md:text-5xl font-medium mt-3 mb-6 text-near-black">Code that breathes, systems that endure</h2>
                            <p className="text-olive-gray text-lg leading-relaxed mb-6">
                                I’m a backend-focused developer who believes in clean architecture, type safety, and human-centric performance.
                                Graduated with high distinction, I’ve been leading full-stack Laravel projects, building bridges between Zig and Python,
                                and contributing to the Discord dev community. My journey from PHP monoliths to Rust microservices taught me
                                that great engineering is both art and empathy.
                            </p>
                            <p className="text-charcoal-warm">
                                <span className="inline-block bg-warm-sand/40 px-3 py-1 rounded-full text-sm">🏆 core values: reliability · clarity · craftsmanship</span>
                            </p>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>
        </>
    )
}

export default AboutSection