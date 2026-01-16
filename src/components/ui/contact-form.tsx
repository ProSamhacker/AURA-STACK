"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: 'aurionstack@gmail.com',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        // In a real app, you would send the data to your backend here
        console.log('Form submitted:', formData);

        setSubmitStatus('success');
        setIsSubmitting(false);

        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({ name: '', email: 'aurionstack@gmail.com', message: '' });
            setSubmitStatus('idle');
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder-gray-500"
                    placeholder="Your name"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder-gray-500"
                    placeholder="your.email@example.com"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-white placeholder-gray-500 resize-none"
                    placeholder="Tell me about your project..."
                />
            </div>

            <motion.button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full px-6 py-3.5 rounded-lg font-medium transition-all shadow-lg ${submitStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-600 shadow-green-500/25'
                    : 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 shadow-purple-500/25 hover:shadow-purple-500/40'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
                {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                    </span>
                ) : submitStatus === 'success' ? (
                    <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Message Sent!
                    </span>
                ) : (
                    'Send Message'
                )}
            </motion.button>

            {submitStatus === 'error' && (
                <p className="text-red-400 text-sm text-center">
                    Something went wrong. Please try again.
                </p>
            )}
        </form>
    );
}
