import styles from "./Contact.module.scss"
import {HTMLAttributes} from "react";
import classNames from "classnames";

export interface ContactProps extends HTMLAttributes<HTMLElement> {
    children?: string
}

function Contact({children, className, ...props}: ContactProps) {
    let href = "";

    if (children) {
        if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(children))
            href = `mailto:${children}`
        if (children.startsWith("+7") || children.startsWith("8"))
            href = `tel:${children
                .replace(/^\s|\(|\)|-/mg, "").replace(/ /g, "")
            }`
    }

    return <a {...props} href={href} className={classNames(styles.contact, className)}>
        {children}
    </a>
}

export default Contact;
