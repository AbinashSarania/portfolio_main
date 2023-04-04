import React, { useState, useEffect } from 'react';
import Hero from './Home';

const ProgressBar = () => {
    const [scrollHeight, setScrollHeight] = useState(0);
    const [maxHeight, setMaxHeight] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const currentHeight = window.pageYOffset;
            const fullHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            setScrollHeight(currentHeight);
            setMaxHeight(fullHeight);
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    const progress = (scrollHeight / maxHeight) * 100;

    return (
        <div className="w-full h-2 bg-gray-200 fixed top-0 left-0 z-50">
            <div className="h-full transition-all duration-300" style={{ width: `${progress}%`, background: 'linear-gradient(to right, #8a2387, #e94057, #f27121)' }}></div>
        </div>

    );
};

const LandingPage = () => {
    return (
        <div>
            <ProgressBar />
            <Hero />
        </div>
    );
};

export default LandingPage;
