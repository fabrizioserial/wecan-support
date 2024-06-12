import {TypographyH4} from "@/components/ui/typographyH4";
import {Logo} from "@/assets/Logo";
import Body1 from "@/components/ui/body1";

export function Navbar() {
    return(
        <div className={'px-4 py-2 w-full flex flex-row items-center justify-center sm:justify-start sticky top-0 bg-primary-900 z-20 bg-opacity-80 backdrop-blur-[2px]'}>
            <Logo/>
            <Body1 className={'font-bold'}>
                Lerni
            </Body1>
            <Body1>
                {` - Support`}
            </Body1>
        </div>
    )
}

