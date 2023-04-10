import styles from "./Footer.module.scss";
import {FC} from "react";
import Container from "@/components/layout/container/Container";

export interface FooterProps {

}

async function Footer({}: FooterProps) {
    return <Container as={"footer"} className={styles.footer} contentProps={{className: styles.content}}>
        Footer
    </Container>
}

export default Footer as unknown as FC;
