import React, { ReactNode } from "react";
import Image from "next/image";

interface StyledBackgroundProps {
    children: ReactNode
}

export default function StyledBackground(
    { children }: StyledBackgroundProps
) {
    return (
        <div className={'flex flex-col items-center gap-10 px-4 pb-8 pt-16'}>
            {children}
            <Image
                src={'/elipse.png'}
                width={600}
                height={600}
                alt={'elipse'}
                className={
                    'blur-[200px] sm:blur-[200px] fixed m-auto left-0 right-0 bottom-0 sm:bottom-[-50px] z-0 opacity-40'
                }
            />
        </div>
    )
}
