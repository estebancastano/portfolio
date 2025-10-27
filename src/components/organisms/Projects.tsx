"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import ProjectCard from "@/components/molecules/ProjectCard";
import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";

export default function Projects() {

    useEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = `
        .swiper-button-prev,
        .swiper-button-next {
        width: 50px;          /* tamaño del círculo */
        height: 50px;
        border-radius: 50%;    /* círculo perfecto */
        background: rgba(255, 255, 255, 0.1);
        display: flex;
        justify-content: center;
        align-items: center;
        color: hsl(var(--primary));
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
            background: hsl(var(--primary) / 0.2) !important;
            transform: scale(1.1);
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
            font-size: 1rem 
        }

        .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 2px solid black;
        background: transparent;
        }

        .swiper-pagination-bullet-active {
        background: black;
}
        `;
        document.head.appendChild(style);
    }, []);

    const projects = [
        {
            title: "Lista de Compras",
            description:
                "Lista de compras interactiva desarrollada para gestionar artículos del supermercado de forma práctica. Incluye funcionalidades como añadir, eliminar y marcar elementos como completados, con una interfaz limpia y responsiva.",
            image: "/images/projects/lista-compras.png",
            tech: ["Next.js", "Better-Auth", "Prisma", "Tailwind", "PostgreSQL", "TypeScript"],
            demoLink: "https://lista-mercado-personal.vercel.app/",
            codeLink: "https://github.com/estebancastano/shop-list",
        },
        {
            title: "Catálogo de Productos",
            description:
                "Página web de catálogo de productos con Angular y con la API DummyJSON, que permite a los usuarios explorar, agregar y eliminar ficticiamente un producto, buscar y filtrar productos de manera eficiente.",
            image: "/images/projects/catalogo-producto.png", //imagenes hechas con shots.so
            tech: ["Angular", "DummyJSON", "Angular Material", "TypeScript", "SCSS", "Zone.js", "RxJS"],
            demoLink: "https://products-store-kappa.vercel.app/products",
            codeLink: "https://github.com/estebancastano/products-store",
        },
        {
            title: "Sistema de Ingresos y Gastos",
            description:
                "Aplicación full-stack para gestionar ingresos y egresos financieros, con autenticación de usuarios y visualización de datos mediante gráficos interactivos.",
            image: "/images/projects/sistema-ingreso-egreso.png",
            tech: ["Next.js", "Typescript", "PostgreSQL", "Prisma", "Tailwind", "Better-Auth", "Recharts"],
            demoLink: "https://sistema-ingresos-egresos.vercel.app/login",
            codeLink: "https://github.com/estebancastano/sistema-ingresos-egresos",
        },
    ];

    return (
        <section id="projects" className="py-20 px-5 md:px-10 max-w-6xl mx-auto">
            {/* Título con animación */}
            <div className="text-center mb-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <Heading as="h2" className="text-3xl font-bold mb-3 text-primary">
                        Proyectos Destacados
                    </Heading>
                    <Text variant="muted" className="max-w-2xl mx-auto">
                        Algunos de los proyectos que he desarrollado recientemente, donde combino
                        diseño, funcionalidad y buenas prácticas de desarrollo.
                    </Text>
                </motion.div>
            </div>

            {/* Slider Swiper */}
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="pb-12! overflow-visible"
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex justify-center overflow-visible"> {/* <-- overflow-visible */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="flex justify-center"
                            >
                                <ProjectCard {...project} />
                            </motion.div>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
        </section>
    );
}
