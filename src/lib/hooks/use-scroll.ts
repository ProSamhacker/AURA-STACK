"use client";

import { useState, useEffect } from 'react';

export function useScroll() {
    const [scrollY, setScrollY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const updateScroll = () => {
            const currentScrollY = window.pageYOffset;
            const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (currentScrollY / documentHeight) * 100;

            setScrollY(currentScrollY);
            setScrollProgress(progress);
            setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', updateScroll, { passive: true });
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);

    return { scrollY, scrollDirection, scrollProgress };
}
