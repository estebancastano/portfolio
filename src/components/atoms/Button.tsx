"use client";

import * as React from "react";
import { Button as ShadcnButton } from "@/components/ui/button";

type ButtonProps = React.ComponentProps<typeof ShadcnButton>;

export function Button({ children, ...props }: ButtonProps) {
    return <ShadcnButton {...props}>{children}</ShadcnButton>;
}
