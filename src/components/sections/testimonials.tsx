"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CEO, TechStart Inc",
        content: "Working with this developer was an absolute pleasure. The attention to detail and commitment to delivering high-quality work exceeded our expectations.",
        rating: 5,
        avatar: "SJ"
    },
    {
        name: "Michael Chen",
        role: "Product Manager, InnovateCo",
        content: "Exceptional technical skills combined with great communication. The project was delivered on time and the code quality was outstanding.",
        rating: 5,
        avatar: "MC"
    },
    {
        name: "Emily Rodriguez",
        role: "Founder, StartupHub",
        content: "Transformed our vision into reality with a beautiful, performant web application. Highly recommended for any serious project!",
        rating: 5,
        avatar: "ER"
    }
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrentIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

    const current = testimonials[currentIndex];

    return (
        <section className="py-24 px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Client Testimonials</h2>
                    <p className="text-gray-400 text-lg">What people say about my work</p>
                </motion.div>

                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-3xl blur-3xl"></div>

                    <div className="relative bg-black/60 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="text-center"
                            >
                                <div className="flex justify-center mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                                        {current.avatar}
                                    </div>
                                </div>

                                <div className="flex justify-center gap-1 mb-6">
                                    {[...Array(current.rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                        </svg>
                                    ))}
                                </div>

                                <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed italic">
                                    "{current.content}"
                                </p>

                                <div>
                                    <p className="font-semibold text-white">{current.name}</p>
                                    <p className="text-sm text-gray-400">{current.role}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation */}
                        <div className="flex justify-center gap-4 mt-8">
                            <button
                                onClick={prev}
                                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
                                aria-label="Previous testimonial"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <div className="flex items-center gap-2">
                                {testimonials.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-purple-500 w-8' : 'bg-white/20'
                                            }`}
                                        aria-label={`Go to testimonial ${idx + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={next}
                                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
                                aria-label="Next testimonial"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
