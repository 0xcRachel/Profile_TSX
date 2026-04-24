import React, { useEffect, useState } from 'react';

const PageLoader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`fixed inset-0 z-[100] bg-parchment flex items-center justify-center transition-all duration-1000 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-warm-sand border-t-terracotta rounded-full animate-spin"></div>
                <div className="font-serif text-near-black text-xl tracking-widest uppercase">0xcRachel.</div>
            </div>
        </div>
    );
}

export default PageLoader;
