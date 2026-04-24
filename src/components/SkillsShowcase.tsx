import React from 'react'
import ToolStack from '../hooks/ToolStack'
import RevealOnScroll from './RevealOnScroll'

const SkillsShowcase = () => {
    return (
        <>
            <section id="skills" className="py-20 md:py-28 bg-parchment">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <RevealOnScroll delay={100}>
                        <div className="text-center mb-12">
                            <div className="inline-block px-3 py-1 bg-ivory rounded-full text-xs font-mono text-terracotta border border-border-cream">toolchain & stacks</div>
                            <h2 className="font-serif text-4xl md:text-5xl font-medium mt-4 text-near-black">Fluency across paradigms</h2>
                            <p className="text-olive-gray max-w-2xl mx-auto mt-4 text-lg">Laravel · Rust · Zig · Python · React ecosystem + UnrealCV research</p>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll delay={200}>
                        <ToolStack />
                    </RevealOnScroll>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
                        <RevealOnScroll delay={300}>
                            <div className="bg-ivory p-7 rounded-2xl border border-border-cream whisper-shadow h-full">
                                <h3 className="font-serif text-2xl font-medium mb-3">Backend master</h3>
                                <p className="text-olive-gray">Optimized REST APIs, JWT/OAuth, database indexing, queue workers, and livewire components. Experienced with high-concurrency simulation & caching strategies.</p>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll delay={400}>
                            <div className="bg-ivory p-7 rounded-2xl border border-border-cream whisper-shadow h-full">
                                <h3 className="font-serif text-2xl font-medium mb-3">Systems & performance</h3>
                                <p className="text-olive-gray">Writing safe Rust, Zig FFI, performance profiling, memory optimization, and bridging low-level systems with high-level Python ML pipelines.</p>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SkillsShowcase