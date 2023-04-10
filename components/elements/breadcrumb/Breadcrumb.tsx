import styles from "./Breadcrumb.module.scss"
import TransitionLink from "@/components/elements/animation/transitionlink/TransitionLink";
import classNames from "classnames";
import {BreadcrumbList} from "schema-dts";
import LdScript from "@/components/elements/ldscript/LdScript";

export interface PathEntry {
    text?: string,
    href?: string,
    clickable?: boolean
}

export interface BreadcrumbProps {
    path: PathEntry[]
}

function Breadcrumb({path}: BreadcrumbProps) {
    const eToHref = (e: PathEntry, i: number) => e.href?.startsWith("/") ? e.href : path.slice(0, i + 1).map(e => e.href).join("")

    const breadcrumbSchema: BreadcrumbList = {
        "@type": "BreadcrumbList",
        itemListElement: path.filter(e => e.clickable ?? true).map((e, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: e.text,
            item: eToHref(e, i)
        }))
    }

    return <div className={styles.breadcrumb}>
        {path.map((e, i) =>
            (e.clickable ?? true)
                ? <TransitionLink scroll={false} className={classNames(styles.part, {[styles.active]: i == path.length - 1})} key={i} href={
                    !e.href
                        ? "#"
                        : eToHref(e, i)
                }>
                    {e.text}<span>{i != path.length - 1 && " — "}</span>
                </TransitionLink>
                : <span className={classNames(styles.part, {[styles.active]: i == path.length - 1})} key={i}>
                    {e.text}<span>{i != path.length - 1 && " — "}</span>
                </span>
        )}
        <LdScript data={breadcrumbSchema}/>
    </div>
}

export default Breadcrumb;
