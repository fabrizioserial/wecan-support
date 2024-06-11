import {ReactNode} from "react";

interface TypographyH2Props {
    children: ReactNode;
}

export default function TypographyH2({children}:TypographyH2Props){
    return (
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight text-white">
            {children}
        </h2>
    )
}
