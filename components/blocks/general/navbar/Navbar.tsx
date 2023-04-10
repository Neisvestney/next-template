import styles from "./Navbar.module.scss";
import Container from "@/components/layout/container/Container";
import {LinkProps} from "next/link";
import NavbarClient from "@/components/blocks/general/navbar/NavbarClient";
import {FC} from "react";
import HighlightedLink from "@/components/elements/highlightedlink/HighlightedLink";
import {useSelectedLayoutSegment} from "next/navigation";

export const links: {text: string, href: LinkProps['href'], segment?: ReturnType<typeof useSelectedLayoutSegment>}[] = [
    {text: "Link", href: {pathname: "/"}, segment: null},
]

export interface NavbarProps {

}

async function Navbar({}: NavbarProps) {
    return <Container animation={null} as={"nav"} className={styles.navbar} contentProps={{className: styles.content}}>
        <div className={styles.links}>
                {links.map((e, i) =>
                    <HighlightedLink href={e.href} key={i} targetSegment={e.segment}>{e.text}</HighlightedLink>
                )}
        </div>
        <div className={styles.contacts}>

        </div>
       <NavbarClient/>
    </Container>
}

export default Navbar as unknown as FC;
