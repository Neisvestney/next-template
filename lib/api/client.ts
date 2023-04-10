import {paths} from "@/lib/api/schema";
import {strapiUrl} from "@/lib/runtimeConfig";
import {Fetcher} from "openapi-typescript-fetch";

const fetcher = Fetcher.for<paths>()

// global configuration
fetcher.configure({
    baseUrl: strapiUrl + "/api",
    init: {
        cache: "no-cache"
    }
})


export { fetcher }
