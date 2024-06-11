import {ReactNode} from "react";

interface TypographyH4Props {
    children: ReactNode;
}

export function TypographyH4({children}:TypographyH4Props) {
    return (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-white">
            {children}
        </h4>
    )
}
