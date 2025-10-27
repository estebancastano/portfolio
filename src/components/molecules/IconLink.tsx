import Link from "next/link";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

interface IconLinkProps {
    href: string;
    icon: LucideIcon;
    label?: string;
    className?: string;
}

export default function IconLink({ href, icon: Icon, label, className }: IconLinkProps) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors",
                className
            )}
        >
            <Icon size={18} />
            {label && <span className="text-sm font-medium">{label}</span>}
        </Link>
    );
}
