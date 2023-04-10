"use client";

import {motion, Variants} from "framer-motion";
import React, {useContext, useEffect} from "react";
import {
    PageTransitionContext
} from "@/components/elements/animation/pagetransitioncontextprovider/PageTransitionContextProvider";
import {useSelectedLayoutSegments} from "next/navigation";

export interface PageTransitionProps {
    children: React.ReactNode
}

const pageTransitionVariant: Variants = {
    show: {
        opacity: 1,
        transition: {
            duration: 0
        }
    },
    hide: {
        opacity: 0,
        transition: {
            duration: 0.4
        }
    }
}

function PageTransition({children}: PageTransitionProps) {
    const context = useContext(PageTransitionContext)
    const segments = useSelectedLayoutSegments()
    const pathname = "/" + segments.join("/")

    useEffect(() => {
        context?.setExiting(false)
    }, [pathname])
    
    if (!context) return <></>;

    return (
        <motion.main variants={pageTransitionVariant} initial={"show"} animate={context.exiting ? "hide" : "show"} onAnimationComplete={() => {
            if (context.exiting) {
                context.callback?.()
                context.setCallback(undefined)
            }
        }}>
            {children}
        </motion.main>
    )
}

export default PageTransition;