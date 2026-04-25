import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // increased duration slightly to allow the beautiful intro animation to play
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2200);
        return () => clearTimeout(timer);
    }, []);

    const text = "oxcRachel";

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="fixed inset-0 z-[100] bg-parchment flex flex-col items-center justify-center overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        y: -50,
                        filter: "blur(10px)",
                        transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                >
                    <div className="flex flex-col items-center gap-8">
                        {/* Elegant spinning rings */}
                        <div className="relative w-16 h-16">
                            <motion.span
                                className="absolute inset-0 border-[1px] border-terracotta/30 rounded-full"
                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.span
                                className="absolute inset-2 border-t-2 border-r-2 border-transparent border-t-terracotta rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.span
                                className="absolute inset-4 bg-warm-sand/30 rounded-full"
                                animate={{ scale: [0.8, 1.2, 0.8] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            />
                        </div>

                        {/* Staggered text reveal */}
                        <div className="flex flex-col items-center gap-3">
                            <motion.div
                                className="font-serif text-near-black text-2xl tracking-widest uppercase flex overflow-hidden"
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.1,
                                            delayChildren: 0.2
                                        }
                                    }
                                }}
                            >
                                {text.split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={{
                                            hidden: { y: 40, opacity: 0, rotateX: -90 },
                                            visible: {
                                                y: 0,
                                                opacity: 1,
                                                rotateX: 0,
                                                transition: { type: "spring", damping: 12, stiffness: 100 }
                                            }
                                        }}
                                        style={{ transformOrigin: "bottom" }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.div>

                            <motion.div
                                className="h-px bg-terracotta/50"
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: "120px", opacity: 1 }}
                                transition={{ duration: 1.5, delay: 0.8, ease: "circOut" }}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default PageLoader;
