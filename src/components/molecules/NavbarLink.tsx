"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface NavbarLinkProps {
    href: string;
    label: string;
    isActive?: boolean;
    onClick?: () => void;
}

export const NavbarLink = ({ href, label, isActive = false, onClick }: NavbarLinkProps) => {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={cn(
                "relative group transition-colors duration-300",
                isActive ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
            )}
        >
            <motion.span
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="text-base font-medium"
            >
                {label}
            </motion.span>

            {/* Línea animada debajo del link */}
            <span
                className={cn(
                    "absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full",
                    isActive && "w-full"
                )}
            />
        </Link>
    );
};
