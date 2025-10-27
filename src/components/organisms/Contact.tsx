"use client";

import { motion } from "framer-motion";
import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";
import ContactForm  from "@/components/molecules/ContactForm";

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-20 px-5 md:px-10 max-w-4xl mx-auto text-center"
        >
            {/* Título con animación dinámica (sube/baja) */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mb-10"
            >
                <Heading as="h2" className="text-3xl md:text-4xl font-bold mb-3 text-primary">
                    Contacto
                </Heading>
                <Text variant="muted" className="max-w-2xl mx-auto">
                    Si tienes una idea, colaboración o simplemente quieres saludar, ¡no dudes
                    en escribirme! Estoy abierto a nuevas oportunidades.
                </Text>
            </motion.div>

            {/* Formulario con animación de entrada */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                <ContactForm />
            </motion.div>
        </section>
    );
}
