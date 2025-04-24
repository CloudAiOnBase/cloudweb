import React from 'react';

const Logo: React.FC = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className='bg-[linear-gradient(to_right,_#8b5cf6,_#06b6d4,_#8b5cf6,_#06b6d4)] bg-[length:300%_auto] animate-gradient bg-clip-text text-transparent'>
                <span className='cloud'>Cloud</span>
                <span className='cloud'>AI</span>
            </div>
        </div>
    );
};

export default Logo;