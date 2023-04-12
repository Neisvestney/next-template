import "../styles/globals.scss";
import "../styles/typography.scss";
import localFont from "next/font/local";
import {ReactNode} from "react";
import VhProvider from "@/components/layout/vhprovider/VhProvider";

const font = localFont({
    src: '../assets/font.ttf',
    display: 'swap'
});

export interface RootLayoutProps {
    children: ReactNode
}

function RootLayout({children}: RootLayoutProps) {
    return (
        <html lang="ru" className={font.className}>
            <body>
                <VhProvider/>
                {children}
            </body>
        </html>
    )
}

export default RootLayout;
