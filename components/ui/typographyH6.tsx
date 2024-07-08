import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TypographyH6Props {
    children: ReactNode;
    className?: string;
}

export default function TypographyH6({ children, className = '' }: TypographyH6Props) {
    return (
        <h6 className={cn("scroll-m-20 text-lg font-semibold tracking-tight text-white", className)}>
            {children}
        </h6>
    )
}
