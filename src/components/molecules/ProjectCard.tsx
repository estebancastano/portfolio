"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/atoms/Button";
import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    tech?: string[];
    demoLink?: string;
    codeLink?: string;
    className?: string;
}

export default function ProjectCard({
    title,
    description,
    image,
    tech,
    demoLink,
    codeLink,
    className,
}: ProjectCardProps) {
    return (
        // OUTER card: allow overflow so la imagen puede sobresalir
        <Card
            className={cn(
                "relative overflow-visible border border-border/40 shadow-sm duration-300 p-1 bg-card",
                className
            )}
        >
            {/* INNER wrapper: aquí aplicamos la animación de hover (NOT: no en el Card) */}
            <div className="group relative transition-transform duration-300 ease-out hover:-translate-y-1">
                {/* Header / imagen */}
                <CardHeader className="p-0 relative z-10 overflow-visible">
                    <div className="relative w-full h-64 md:h-56 overflow-visible">
                        {/* Image wrapper: z-30 para que quede por encima del contenido */}
                        <div className="relative z-30 w-full h-full rounded-lg overflow-hidden">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover w-full h-full transition-transform duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-1"
                                priority
                            />
                        </div>
                    </div>
                </CardHeader>

                {/* Content with lower z so image can overlap */}
                <CardContent className="p-5 space-y-2 relative z-20">
                    <Heading as="h3" className="text-xl font-semibold">
                        {title}
                    </Heading>
                    <Text variant="muted">{description}</Text>

                    {tech && (
                        <div className="flex flex-wrap gap-2 mt-2">
                            {tech.map((t, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    )}
                </CardContent>

                <CardFooter className="flex gap-3 px-5 pb-5 relative z-20">
                    {demoLink && (
                        <Button asChild className="transition hover:shadow-lg hover:-translate-y-2 duration-200">
                            <a href={demoLink} target="_blank" rel="noopener noreferrer">
                                Demo
                            </a>
                        </Button>
                    )}
                    {codeLink && (
                        <Button
                            variant="outline"
                            asChild
                            className="transition hover:shadow-lg hover:-translate-y-2 duration-200"
                        >
                            <a href={codeLink} target="_blank" rel="noopener noreferrer">
                                Código
                            </a>
                        </Button>
                    )}
                </CardFooter>
            </div>
        </Card>
    );
}
