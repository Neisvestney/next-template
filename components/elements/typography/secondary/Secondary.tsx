import styles from "./Secondary.module.scss"
import {HTMLAttributes} from "react";
import classNames from "classnames";

export interface SecondaryProps extends HTMLAttributes<HTMLElement> {

}

function Secondary({children, className, ...props}: SecondaryProps) {
    return <span {...props} className={classNames(styles.secondary, className)}>
        {children}
    </span>
}

export default Secondary;
