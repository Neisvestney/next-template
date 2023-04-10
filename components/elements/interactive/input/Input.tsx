"use client";

import styles from "./Input.module.scss"
import InputMask, {Props as InputMaskProps} from 'react-input-mask-format';
import React, {ForwardedRef, RefObject, useImperativeHandle, useRef, useState} from "react";
import classNames from "classnames";

export interface InputProps extends InputMaskProps {
    label: string,
    error?: boolean,
    alwaysMask?: boolean,
}

export interface InputRef {
    inputRef: RefObject<HTMLInputElement>
}

const Input = React.forwardRef(({label, onChange, value, error, alwaysMask, className, ...input}: InputProps, ref: ForwardedRef<InputRef>) => {
    const [innerValue, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => ({
        inputRef
    }));

    const classes = classNames(styles.input, error && styles.error, className)

    return <>
        {input.mask || alwaysMask
            ? <InputMask className={classes} placeholder={label} inputRef={inputRef} value={value ?? innerValue}
                         onChange={e => onChange ? onChange(e) : setValue(e.target.value)} {...input}
            />
            : <input className={classes} placeholder={label} ref={inputRef} value={value ?? innerValue}
                     onChange={e => onChange ? onChange(e) : setValue(e.target.value)} {...input}
            />
        }
    </>
});

Input.displayName = "Input";

export default Input;
