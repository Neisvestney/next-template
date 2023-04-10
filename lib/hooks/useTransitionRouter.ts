import {useRouter} from "next/navigation";
import {useContext} from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context";
import {
    PageTransitionContext
} from "@/components/elements/animation/pagetransitioncontextprovider/PageTransitionContextProvider";

interface NavigateOptions {
    forceOptimisticNavigation?: boolean;
}

export const useTransitionRouter: () => AppRouterInstance = () => {
    const router = useRouter()
    const transitionContext = useContext(PageTransitionContext)

    return {
        ...router,
        push(href: string, options?: NavigateOptions) {
            const url = new URL(href, window.location.protocol + "//" + window.location.host)
            if (url.pathname != window.location.pathname) {
                if (!transitionContext?.exiting) {
                    transitionContext?.startExit(() => {
                        router.push(href, options)
                    })
                }
            } else {
                router.push(href, options)
            }
        }
    }
}