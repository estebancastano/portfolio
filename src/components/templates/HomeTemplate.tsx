"use client";

import Navbar from "@/components/organisms/Navbar";
import { Hero } from "@/components/organisms/Hero";
import About from "@/components/organisms/About";
import Projects from "@/components/organisms/Projects";
import Contact from "@/components/organisms/Contact";

export const HomeTemplate = () => {
    return (
        <main className="flex flex-col min-h-screen bg-background text-foreground">
            {/* 💫 Hero Section */}
            <Hero />

            {/* 🚀 Projects Section */}
            <Projects />
            
            {/* 👨‍💻 About Section */}
            <About />

            {/* 📬 Contact Section */}
            <Contact />
        </main>
    );
};
