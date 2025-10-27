import { cn } from "@/lib/utils";
import React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function Heading({
    as: Tag = "h2",
    className,
    children,
    ...props
}: HeadingProps) {
    const baseStyles = {
        h1: "text-4xl md:text-5xl font-bold tracking-tight",
        h2: "text-3xl md:text-4xl font-semibold tracking-tight",
        h3: "text-2xl font-semibold",
        h4: "text-xl font-medium",
        h5: "text-lg font-medium",
        h6: "text-base font-medium",
    };

    return (
        <Tag className={cn(baseStyles[Tag], className)} {...props}>
            {children}
        </Tag>
    );
}
