import styles from "./Header.module.scss"
import {HTMLAttributes} from "react";
import classNames from "classnames";

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
    l?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
    textMargins?: boolean,
    color?: "black" | "light"
}

function Header({as, children, className, l = "h2", textMargins = false, color = "black", ...props}: HeaderProps) {
    const Tag = as ?? l;

    return <Tag className={classNames(className, styles[l ?? "h2"], styles.header, {[styles.textMargins]: textMargins}, styles[color])} {...props}>
        {children}
    </Tag>
}

export default Header;
