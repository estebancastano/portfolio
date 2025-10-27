"use client";

import { Atom, Database, Code, Server, Layout, Cloud, GitBranch, Wrench } from "lucide-react";
import SkillBadge from "@/components/molecules/SkillBadge";
import { motion } from "framer-motion";

export default function SkillsSection() {
    return (
        <section id="about" className="w-full py-16 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-8 text-primary"
            >
                Habilidades y Tecnologías
            </motion.h2>

            {/* Subtítulo */}
            <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
                Combino tecnologías modernas para crear aplicaciones rápidas, seguras y bien estructuradas,
                tanto en frontend como en backend.
            </p>

            {/* Categorías */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-12 lg:px-24">
                {/* Frontend */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-6 rounded-2xl border border-border shadow-sm bg-card"
                >
                    <h3 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2 text-primary">
                        <Layout className="w-5 h-5" /> Frontend
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        <SkillBadge label="React"  />
                        <SkillBadge label="Next.js" />
                        <SkillBadge label="Angular" />
                        <SkillBadge label="TypeScript"  />
                        <SkillBadge label="Tailwind CSS" />
                    </div>
                </motion.div>

                {/* Backend */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-6 rounded-2xl border border-border shadow-sm bg-card"
                >
                    <h3 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2 text-primary">
                        <Server className="w-5 h-5" /> Backend
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        <SkillBadge label="Spring Boot" />
                        <SkillBadge label="Node.js" />
                        <SkillBadge label="REST APIs" />
                        <SkillBadge label="SQL / PostgreSQL" />
                        <SkillBadge label="Prisma" />
                    </div>
                </motion.div>

                {/* Herramientas */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-6 rounded-2xl border border-border shadow-sm bg-card"
                >
                    <h3 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2 text-primary">
                        <Wrench className="w-5 h-5" /> Herramientas
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        <SkillBadge label="Git / GitHub"  />
                        <SkillBadge label="Docker"  />
                        <SkillBadge label="Postman" />
                        <SkillBadge label="Vite / Gradle" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
