"use client";

import styles from "./HighlightedLink.module.scss"
import TransitionLink, {TransitionLinkProps} from "@/components/elements/animation/transitionlink/TransitionLink";
import {useSelectedLayoutSegment} from "next/navigation";
import classNames from "classnames";

export interface HighlightedLinkProps extends TransitionLinkProps {
    targetSegment?: ReturnType<typeof useSelectedLayoutSegment>
}

function HighlightedLink({children, className, targetSegment, ...props}: HighlightedLinkProps) {
    const segment = useSelectedLayoutSegment()

    return <TransitionLink className={classNames(className, targetSegment === segment && styles.active)} {...props}>
        {children}
    </TransitionLink>
}

export default HighlightedLink;
