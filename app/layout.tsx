import type {Metadata} from "next";
import {Raleway as FontSans} from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import {Navbar} from "@/components/Navbar";


export const metadata: Metadata = {
    title: "WeCAN - Support",
    description: "This website is a support page for WeCAN",
    icons: "favicon.ico",
};

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/favicon.ico" sizes="any"/>

        </head>
        <body
            className={
                cn(
                        "min-h-screen bg-background font-sans antialiased bg-primary-400",
                        fontSans.variable
                    )
                }
            >
                <Navbar/>
                {children}
            </body>
        </html>
    );
}
