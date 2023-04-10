import Navbar from "@/components/blocks/general/navbar/Navbar";
import Footer from "@/components/blocks/general/footer/Footer";
import PageTransition from "@/components/elements/animation/pagetransition/PageTransition";
import PageTransitionContextProvider
    from "@/components/elements/animation/pagetransitioncontextprovider/PageTransitionContextProvider";
import {FC, ReactNode} from "react";

export const revalidate = 10;

export interface MainLayoutProps {
    children: ReactNode
}

async function MainLayout({children}: MainLayoutProps) {
    return (
        <PageTransitionContextProvider>
            <Navbar/>
            <PageTransition>
                {children}
                <Footer/>
            </PageTransition>
        </PageTransitionContextProvider>
    )
}

export default MainLayout as unknown as FC<MainLayoutProps>;
