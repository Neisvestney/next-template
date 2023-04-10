import {StaticImageData} from "next/image";
import {strapiUrl} from "@/lib/runtimeConfig";

export type StrapiImage = {
    width?: number
    height?: number
    url?: string
}


export function image(strapiImage: StrapiImage) : StaticImageData
export function image(strapiImage: undefined) :  undefined
export function image(strapiImage: StrapiImage | undefined) : StaticImageData | undefined
export function image(strapiImage: StrapiImage | undefined) : StaticImageData | undefined {
    if (strapiImage == undefined) return undefined

    const staticImage: StaticImageData = {src: strapiUrl + strapiImage.url, width: strapiImage.width || 100, height: strapiImage.height || 100}
    return staticImage
}

export function imageUrl(strapiImage?: StrapiImage) {
    if (!strapiImage) return "";
    return strapiUrl + strapiImage.url
}

export function getStrapiUrl(url?: string) {
    return strapiUrl + url
}
