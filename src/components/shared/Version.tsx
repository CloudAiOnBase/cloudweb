import React from 'react';

const Version: React.FC = () => {
    return (
        <div className="flex lg:justify-left" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center px-3 py-1 border border-white/50 rounded-full bg-white/5 backdrop-blur-lg gap-1">
                <div className="w-2 h-2 rounded-full bg-background" />
                <a href='/' className='bg-[linear-gradient(to_right,_#8b5cf6,_#06b6d4,_#8b5cf6,_#06b6d4)] bg-[length:300%_auto] animate-gradient bg-clip-text text-transparent'>
                    <h6>v1.0 is live!</h6>
                </a>
                <span className="hidden md:inline ml-2 font-mono sm:text-sm text-zinc-700 tracking-wider">Start your Journey here!</span>
            </div>
        </div>
    );
};

export default Version;