import styles from "./Button.module.scss";
import React, {ButtonHTMLAttributes} from "react";
import classNames from "classnames";
import {ReactComponentLike} from "prop-types";
import TransitionLink from "@/components/elements/animation/transitionlink/TransitionLink";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: "black",
    icon?: "arrow",
    filled?: boolean,
    direction?: "left" | "right" | "up" | "down",
    as?: "button" | "a" | "link",
    [prop: string]: any
}

function Button({className, children, color = "black", as = "button", icon, direction = "right", filled = false, ...props}: ButtonProps) {
    let Tag: ReactComponentLike = as == "link" ? TransitionLink : as;

    return <Tag {...props} className={classNames(styles.button, className, styles[color + (filled ? "-filled" : "")], styles[direction], children && styles.text)}>
        {children && <span className={classNames(icon && styles.withIcon)}>{children}</span>}
        {icon && <i className={classNames(styles.icon, styles[icon])}/>}
    </Tag>
}

export default Button;
