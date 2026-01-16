"use client";

import { useScroll } from '@/lib/hooks/use-scroll';
import { motion } from 'framer-motion';

export function ScrollProgress() {
    const { scrollProgress } = useScroll();

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 origin-left z-50"
            style={{ scaleX: scrollProgress / 100 }}
            initial={{ scaleX: 0 }}
            transition={{ duration: 0.1 }}
        />
    );
}
