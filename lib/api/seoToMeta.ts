import {components} from "@/lib/api/schema";
import {Metadata} from "next";
import {strapiUrl} from "@/lib/runtimeConfig";

type SharedSeoComponent = components["schemas"]["SharedSeoComponent"]
type CommonResponseAttributes = Exclude<components["schemas"]["CommonResponse"]["data"], undefined>["attributes"]

export default function seoToMeta(seo?: SharedSeoComponent, common?: CommonResponseAttributes): Metadata {
    return {
        title: seo?.metaTitle ? seo.metaTitle + (common?.seo?.titleAfter ?? "") : common?.seo?.defaultTitle,
        description: seo?.metaDescription,
        keywords: seo?.keywords,
        applicationName: common?.seo?.siteName,
        openGraph: {
            title: seo?.metaTitle ?? common?.seo?.defaultTitle,
            description: seo?.metaDescription,
            ...(seo?.metaImage?.data?.attributes && {
                images: {
                    url: strapiUrl + seo?.metaImage.data.attributes.url,
                    width: seo?.metaImage.data.attributes.width,
                    height: seo?.metaImage.data.attributes.height,
                    alt: seo?.metaImage.data.attributes.alternativeText,
                }
            })
        }
    }
}
