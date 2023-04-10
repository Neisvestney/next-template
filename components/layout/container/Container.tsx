"use client";

import React, {HTMLAttributes} from "react";
import styles from "./Container.module.scss";
import {HTMLMotionProps, motion, Variants} from "framer-motion";
import classNames from "classnames";

const contentVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 100
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            bounce: 0,
            duration: 0.7
        }
    }
}

const contentOpacityVariants: Variants = {
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.7
        }
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.7
        }
    }
}

const variants = {
    "opacity": contentOpacityVariants,
    "slide": contentVariants
}

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode,
    noPadding?: boolean,
    noTopPadding?: boolean,
    as?: "div" | "section" | "nav" | "footer",
    animation?: "opacity" | "slide" | null,
    observerMargin?: string
    contentProps?: HTMLMotionProps<"div">,
    text?: boolean
}

function Container({noPadding, className, children, as, contentProps, animation = "opacity", observerMargin, noTopPadding, text, ...divProps} : ContainerProps) {
    const Tag = as ?? "section";

    return <Tag {...divProps} className={classNames(styles.container, className, {[styles.noPadding]: noPadding, [styles.noTopPadding]: noTopPadding, [styles.text]: text}, {[styles.nav]: as == "nav"})}>
        <motion.div variants={animation ? variants[animation] : undefined} initial={"hidden"} animate={"hidden"} whileInView={"show"} viewport={{once: true, margin: observerMargin ?? "0px"}} {...contentProps} className={classNames(styles.content, contentProps?.className)}>
            {children}
        </motion.div>
    </Tag>
}

export default Container;
