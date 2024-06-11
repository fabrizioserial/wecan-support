import Image from "next/image";
import TypographyH2 from "@/components/ui/typographyH2";
import TypographyH6 from "@/components/ui/typographyH6";
import {Logo} from "@/assets/Logo";
import Body2 from "@/components/ui/body2";
import ContactForm from "@/components/ContactForm";
import {Button} from "@/components/ui/button";
import React, {Suspense} from "react";

const SupportPage = () => {



    return (
        <div className={'flex flex-col items-center gap-10 px-4 pb-8'}>

            <div className={'w-full flex flex-col items-center justify-center z-10'}>
                <div className={'flex flex-col gap-4 items-center py-6 sm:py-0' }>

                    <div className={'hidden sm:block'}>
                        <Logo/>
                    </div>

                    <div className={'flex flex-col items-center' }>
                        <TypographyH2>Tuviste un problema?</TypographyH2>
                        <TypographyH6 className={'text-gray-400'}>Estamos para ayudarte</TypographyH6>
                    </div>
                </div>

            </div>
            <div className={'max-w-[550px] w-full rounded-3xl bg-gray-200 px-6 py-8 z-10'}>
                <div className={'mb-4'}>
                    <TypographyH6 className={'font-bold text-gray-900'}>Contanos tu problema</TypographyH6>
                    <Body2 className={'text-gray-500'}>Completa los datos y carga una imagen con el error que te aparece</Body2>
                </div>
                <Suspense fallback={<div></div>}>
                    <ContactForm/>
                </Suspense>
            </div>
            <Image src={'/elipse.png'} width={600} height={600} alt={'elipse'}
                   className={'blur-[80px] sm:blur-[200px] absolute m-auto left-0 right-0 bottom-0 sm:bottom-[-50px] z-0'}/>

        </div>
    )
}

export default SupportPage;
