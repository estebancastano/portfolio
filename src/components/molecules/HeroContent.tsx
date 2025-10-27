import { Button } from "@/components/atoms/Button";
import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";

interface HeroContentProps {
    title: string;
    subtitle: string;
    buttonText: string;
    labelText: string;
    onButtonClick?: () => void;
}

export const HeroContent = ({
    title,
    subtitle,
    buttonText,
    labelText,
    onButtonClick,
}: HeroContentProps) => {
    return (
        <div className="max-w-3xl text-center space-y-4">
            {/* 🔵 Etiqueta de disponibilidad */}
            <div className="inline-flex items-center justify-center gap-2 bg-gray-200 rounded-2xl px-3 py-1 mx-auto">
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-md text-muted-foreground font-medium">
                    {labelText}
                </span>
            </div>

            <Heading as="h1" className="text-5xl md:text-6xl font-bold mb-4">
                {title}
            </Heading>

            <Text className="text-lg md:text-xl text-muted-foreground mb-6">
                {subtitle}
            </Text>

            <Button
                variant="default"
                size="lg"
                onClick={onButtonClick}
                className="cursor-pointer"
            >
                {buttonText}
            </Button>
        </div>
    );
};
