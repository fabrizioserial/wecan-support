import TypographyH2 from "@/components/ui/typographyH2";
import TypographyH6 from "@/components/ui/typographyH6";
import { Logo } from "@/assets/Logo";
import ContactForm from "@/components/ContactForm";
import React, { Suspense } from "react";
import StyledBackground from "@/components/StyledBackground";

const SupportPage = () => {

    return (
        <StyledBackground>
            <div className={'w-full flex flex-col items-center justify-center z-10'}>
                <div className={'flex flex-col gap-4 items-center py-6 sm:py-0'}>

                    <div className={'hidden sm:block'}>
                        <Logo />
                    </div>

                    <div className={'flex flex-col items-center'}>
                        <TypographyH2>¿Tuviste un problema?</TypographyH2>
                        <TypographyH6 className={'text-gray-400'}>Estamos para ayudarte</TypographyH6>
                    </div>
                </div>

            </div>
            <Suspense fallback={<div></div>}>
                <ContactForm />
            </Suspense>
        </StyledBackground>
    )
}

export default SupportPage;
