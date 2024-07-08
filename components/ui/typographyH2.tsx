import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TypographyH2Props {
    children: ReactNode;
    className?: string;
}

export default function TypographyH2({ children, className = '' }: TypographyH2Props) {
    return (
        <h2 className={cn("scroll-m-20 text-3xl font-semibold tracking-tight text-white", className)}>
            {children}
        </h2>
    )
}
