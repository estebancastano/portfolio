"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { name: "Inicio", href: "/" },
        { name: "Proyectos", href: "#projects" },
        { name: "Sobre mí", href: "#about" },
        { name: "Contacto", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="flex items-center justify-between px-6 md:px-12 py-4 max-w-7xl mx-auto">
                <Link href="/" className="text-lg font-semibold tracking-tight">
                    Esteban<span className="text-primary">.</span>
                </Link>

                <div className="flex gap-6">
                    {links.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`
                  relative font-medium transition-all duration-300
                  hover:text-primary hover:translate-y-[-2px] hover:scale-105
                `}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
