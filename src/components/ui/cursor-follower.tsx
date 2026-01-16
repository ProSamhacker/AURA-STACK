"use client";

import { useMousePosition } from '@/lib/hooks/use-mouse-position';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CursorFollower() {
    const { x, y } = useMousePosition();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only show on desktop devices
        const isDesktop = window.matchMedia('(min-width: 768px)').matches;
        setIsVisible(isDesktop);
    }, []);

    if (!isVisible) return null;

    return (
        <>
            <motion.div
                className="fixed w-8 h-8 rounded-full border-2 border-purple-500/50 pointer-events-none z-50 mix-blend-difference"
                animate={{
                    x: x - 16,
                    y: y - 16,
                }}
                transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 200,
                    mass: 0.5,
                }}
            />
            <motion.div
                className="fixed w-1.5 h-1.5 rounded-full bg-purple-400 pointer-events-none z-50 mix-blend-difference"
                animate={{
                    x: x - 3,
                    y: y - 3,
                }}
                transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 500,
                }}
            />
        </>
    );
}
