"use client";

import { motion } from 'framer-motion';

const techStack = [
    {
        category: "Frontend",
        skills: [
            { name: "React", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
            { name: "Next.js", icon: "▲", color: "from-gray-700 to-gray-900" },
            { name: "TypeScript", icon: "TS", color: "from-blue-600 to-blue-700" },
            { name: "Tailwind CSS", icon: "🎨", color: "from-cyan-400 to-blue-500" },
            { name: "Framer Motion", icon: "✨", color: "from-purple-500 to-pink-500" },
        ]
    },
    {
        category: "Backend",
        skills: [
            { name: "Node.js", icon: "🟢", color: "from-green-600 to-green-700" },
            { name: "Python", icon: "🐍", color: "from-yellow-500 to-blue-500" },
            { name: "MongoDB", icon: "🍃", color: "from-green-500 to-green-600" },
            { name: "PostgreSQL", icon: "🐘", color: "from-blue-600 to-blue-700" },
        ]
    },
    {
        category: "Tools & Others",
        skills: [
            { name: "Git", icon: "📦", color: "from-orange-600 to-red-600" },
            { name: "Docker", icon: "🐳", color: "from-blue-500 to-blue-600" },
            { name: "Vercel", icon: "▲", color: "from-black to-gray-800" },
            { name: "AI/ML", icon: "🤖", color: "from-purple-600 to-pink-600" },
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring" as const,
            stiffness: 100
        }
    }
};

export function TechStack() {
    return (
        <section className="py-24 px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Tech Stack</h2>
                    <p className="text-gray-400 text-lg">Technologies I work with</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {techStack.map((section, idx) => (
                        <motion.div
                            key={section.category}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h3 className="text-xl font-semibold text-purple-400 mb-6">
                                {section.category}
                            </h3>

                            <div className="space-y-3">
                                {section.skills.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className="group relative"
                                    >
                                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity`}></div>
                                        <div className="relative flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 group-hover:border-white/20 transition-all">
                                            <div className={`w-10 h-10 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center text-lg font-bold shadow-lg`}>
                                                {skill.icon}
                                            </div>
                                            <span className="font-medium">{skill.name}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
