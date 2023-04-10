import parse, {domToReact, Element, HTMLReactParserOptions} from 'html-react-parser';
import React from "react";
import styles from "./HtmlRender.module.scss";
import classNames from "classnames";
import Header from "@/components/elements/typography/header/Header";
import {getStrapiUrl} from "@/lib/api/image";

export interface HtmlRenderProps {
    children?: string,
    preset?: "main" | "textBlock"
}

function HtmlRender({children, preset = "main"}: HtmlRenderProps) {
    const options: HTMLReactParserOptions = {
        replace: (domNode) => {
            if (domNode instanceof Element && domNode.attributes) {
                let classNamesArr = []

                if (domNode.attribs["style"]?.includes("text-align:right")) {
                    classNamesArr.push(styles.right)
                }

                delete domNode.attribs["style"]

                if (domNode.name.startsWith("h") && domNode.name.length == 2) {
                    return <Header className={classNames(...classNamesArr, styles[domNode.name])} l={domNode.name as any} textMargins>{domToReact(domNode.children, options)}</Header>
                }
                if (domNode.tagName == "img") {
                    return <span className={styles.image}>
                        <img src={getStrapiUrl(domNode.attribs.src)} alt={domNode.attribs.alt}/>
                    </span>
                }

                if (domNode.tagName == "a") {
                    return <a target={"_blank"} rel={"noreferrer"} className={classNames(...classNamesArr, domNode.attribs.className)} {...domNode.attribs}>{domToReact(domNode.children, options)}</a>
                }

                if (domNode.tagName != "br") {
                    const Tag = domNode.tagName as keyof JSX.IntrinsicElements
                    return <Tag className={classNames(...classNamesArr, domNode.attribs.className)} {...domNode.attribs}>{domToReact(domNode.children, options)}</Tag>
                }
            }
        }
    }

    return <div className={classNames(styles.content, styles[preset])}>
        {parse(children ?? "", options)}
    </div>
}

export default HtmlRender;
