import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface SkillBadgeProps {
    label: string;
    icon?: LucideIcon;
    className?: string;
}

export default function SkillBadge({ label, icon: Icon, className }: SkillBadgeProps) {
    return (
        <Badge
            variant="secondary"
            className={cn(
                "flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full transition hover:bg-primary/10",
                className
            )}
        >
            {Icon && <Icon size={16} className="text-primary" />}
            {label}
        </Badge>
    );
}
