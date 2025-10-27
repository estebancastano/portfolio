import { cn } from "@/lib/utils";
import React from "react";

interface TextProps<T extends React.ElementType = "p"> {
    as?: T;
    variant?: "default" | "muted" | "small";
    className?: string;
    children: React.ReactNode;
}

export default function Text<T extends React.ElementType = "p">({
    as,
    variant = "default",
    className,
    children,
    ...props
}: TextProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof TextProps<T>>) {
    const Component = as || "p";

    const variants = {
        default: "text-base text-foreground",
        muted: "text-sm text-muted-foreground",
        small: "text-xs text-muted-foreground",
    };

    return (
        <Component className={cn(variants[variant], className)} {...props}>
            {children}
        </Component>
    );
}
