import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TypographyH4Props {
    children: ReactNode;
    className?: string;
}

export default function TypographyH4({ children, className = '' }: TypographyH4Props) {
    return (
        <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight text-white", className)}>
            {children}
        </h4>
    )
}
