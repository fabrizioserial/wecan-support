import React from 'react'
import {cn} from "@/lib/utils";

interface Body1Props {
    children: React.ReactNode;
    className?: string;
}

export default function Body2({children,className}:Body1Props) {
    return(
        <p className={cn('scroll-m-20 text-sm font-normal tracking-tight text-white ', className)}>
            {children}
        </p>
    )
}
