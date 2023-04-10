"use client";

import styles from "./Navbar.module.scss";
import {useEffect, useState} from "react";
import {AnimatePresence, motion, Variants} from "framer-motion";
import {links} from "@/components/blocks/general/navbar/Navbar";
import TransitionLink from "@/components/elements/animation/transitionlink/TransitionLink";
import {Toggle} from "@/components/blocks/general/toggle/Toggle";

const mobileNavVariants: Variants = {
    show: {
        opacity: 1,
        transition: {
            bounce: 0,
            staggerChildren: 0.05
        }
    },
    hidden: {
        opacity: 0,
        transition: {
            bounce: 0,
            staggerChildren: 0.05
        }
    }
}

const mobileNavItemVariants: Variants = {
    show: {
        y: 0,
        opacity: 1
    },
    hidden: {
        y: 20,
        opacity: 0
    }
}

export interface NavbarClientProps {

}

const MotionLink = motion(TransitionLink)

function NavbarClient({}: NavbarClientProps) {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        if (showMobileMenu) {
            const scrollY = window.scrollY
            document.body.style.setProperty("overflow-y", "hidden")
            document.body.style.setProperty("height", innerHeight + "px")
            document.body.style.setProperty("position", "fixed")
            document.body.style.setProperty("top", -scrollY + "px")
        } else {
            const scrollY = -parseFloat(document.body.style.getPropertyValue("top").split('px')[0])
            document.body.style.removeProperty("overflow")
            document.body.style.removeProperty("height")
            document.body.style.removeProperty("position")
            document.body.style.removeProperty("top")
            window.scrollTo(0, scrollY)
        }
    }, [showMobileMenu]);

    return <>
        <TransitionLink href={"/"} className={styles.logo} onClick={() => setShowMobileMenu(false)}>
            Logo
        </TransitionLink>
        <div className={styles.mobileButtons}>
            <Toggle toggle={() => setShowMobileMenu(!showMobileMenu)} toggled={showMobileMenu}/>
        </div>
        <AnimatePresence>
            {showMobileMenu && <motion.div key={"menu"} variants={mobileNavVariants} initial={"hidden"} animate={"show"}
                              exit={"hidden"} className={styles.mobileMenu}>
                {links.map((e, i) =>
                    <MotionLink onClick={() => setShowMobileMenu(false)} className={styles.link} variants={mobileNavItemVariants} href={e.href} key={i}>{e.text}</MotionLink>
                )}
            </motion.div>}
        </AnimatePresence>
    </>
}

export default NavbarClient;
