import React, {ReactNode} from "react";
import Image from "next/image";

interface StyledBackgroundProps{
    children: ReactNode
}

export default function StyledBackground(
    {children}: StyledBackgroundProps
){
    return(
        <div className={'flex flex-col items-center gap-10 px-4 pb-8 pt-[80px]'}>
            {children}
            <Image src={'/elipse.png'} width={600} height={600} alt={'elipse'}
                   className={'blur-[80px] sm:blur-[200px] absolute m-auto left-0 right-0 bottom-0 sm:bottom-[-50px] z-0 opacity-50'}/>
        </div>
        )
}
