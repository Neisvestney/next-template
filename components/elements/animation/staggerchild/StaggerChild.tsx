"use client";

import {motion, useInView, Variants} from "framer-motion";
import {ReactNode, useContext, useEffect, useRef, useState} from "react";
import {StaggerContext} from "@/components/elements/animation/staggerprovider/StaggerProvider";

export interface StaggerChildProps {
    children: ReactNode,
    variants: Variants,
    className?: string
}

function StaggerChild({children, variants, ...props}: StaggerChildProps) {
    const context = useContext(StaggerContext)
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const [delay, setDelay] = useState(0);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (isInView && context) {
            const now = new Date().valueOf()
            setAnimate(true)
            const delay = Math.max(0, 200 - (now - context.lastChildAnimatedTime.current))
            setDelay(delay)
            context.lastChildAnimatedTime.current = now + delay
        }
    }, [context, isInView]);

    if (!context) return <li {...props}>{children}</li>;

    return <motion.li {...props} ref={ref} transition={{delay: delay / 1000, type: "tween", ease: "easeOut", duration: 0.7}} variants={variants} initial={"hide"} animate={animate ? "show" : "hide"}>
        {children}
    </motion.li>
}

export default StaggerChild;
