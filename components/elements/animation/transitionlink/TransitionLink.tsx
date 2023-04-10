"use client";

import Link from "next/link";
import React from "react";
import {useTransitionRouter} from "@/lib/hooks/useTransitionRouter";
import {GetComponentProps} from "@/lib/GetComponentProps";

export interface TransitionLinkProps extends GetComponentProps<typeof Link> {

}

const TransitionLink = React.forwardRef<HTMLAnchorElement, TransitionLinkProps>(({children, href, onClick, ...props}, ref) => {
    const router = useTransitionRouter()

    return <Link ref={ref} href={href} {...props} onClick={(e) => {
        onClick?.(e)

        e.preventDefault()

        const url = typeof href == "string" ? href : `${href.pathname}${href.search ?? ""}${href.hash ? `#${href.hash}` : ''}`
        router.push(url)
    }}>
        {children}
    </Link>
});

TransitionLink.displayName = "TransitionLink";

export default TransitionLink;
