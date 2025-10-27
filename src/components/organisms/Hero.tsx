"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HeroContent } from "@/components/molecules/HeroContent";
import Image from "next/image";

export const Hero = () => {
    const ref = useRef(null);
    const { scrollY } = useScroll();

    // Movimiento parallax y escala
    const y = useTransform(scrollY, [0, 300], [0, 100]);
    const scale = useTransform(scrollY, [0, 300], [1, 0.9]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0.7]);

    return (
        <section
            ref={ref}
            className="relative w-screen min-h-screen flex flex-col justify-center items-center overflow-hidden bg-background"
        >
            {/* Fondo animado parallax */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 bg-linear-to-b from-primary/10 via-background to-background opacity-90"
            >
                <div className="absolute top-20 left-20 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-32 right-32 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
            </motion.div>

            {/* Contenido principal */}
            <motion.div
                style={{ scale, opacity }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-12 lg:px-24"
            >
                {/* Texto */}
                <div className="md:w-1/2 text-center md:text-left">
                    <HeroContent
                        title="Esteban Castaño"
                        subtitle="Desarrollador Web Fullstack — creando experiencias digitales elegantes, eficientes y con propósito."
                        buttonText="Ver proyectos"
                        labelText="Disponible para trabajar"
                        onButtonClick={() =>
                            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
                        }
                    />
                </div>

                {/* Imagen */}
                <motion.div
                    className="relative md:w-80 md:h-80 w-56 h-56 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    {/* Aura luminosa detrás */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/40 via-secondary/30 to-transparent blur-3xl animate-pulse" />

                    {/* Imagen principal */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-primary/40 shadow-lg">
                        <Image
                            src="/images/hero/me.png"
                            alt="Esteban Castaño"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};
