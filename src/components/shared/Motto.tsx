import React, { useState, useEffect } from 'react';

const Motto: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(true); // Show the motto
            setTimeout(() => {
                setIsVisible(false); // Hide the motto after 1 minute
            }, 60000); // Display for 1 minute
        }, 60000); // Trigger every 5 minutes (300,000 ms)

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <div
            className={`transition-opacity duration-1000 ease-in-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
                animation: isVisible
                    ? 'fadeInText 1s ease-in forwards'
                    : 'fadeOutText 1s ease-out forwards',
            }}
        >
            <div className="flex lg:justify-left" style={{ animationDelay: '0.2s' }}>
                <div className="inline-flex items-center px-3 py-1 border border-white/50 rounded-full bg-white/5 backdrop-blur-lg gap-1">
                    <div className="w-2 h-2 rounded-full bg-background" />
                    <div className="bg-[linear-gradient(to_right,_#8b5cf6,_#06b6d4,_#8b5cf6,_#06b6d4)] bg-[length:300%_auto] animate-gradient bg-clip-text text-transparent">
                        <div className="flex items-center underline">
                            <span className="hidden md:inline ml-2 font-playwrite-dk-loopet text-zinc-700 text-xl tracking-wider">
                                "our conviction is in the code"
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Motto;