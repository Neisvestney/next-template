import {Variants} from "framer-motion";

export const opacityVariants: Variants = {
    hide: {
        opacity: 0,
    },
    show: {
        opacity: 1,
    }
}

export const appearFromBottomVariants: Variants = {
    show: {
        y: 0,
        opacity: 1,
    },
    hide: {
        y: 200,
        opacity: 0
    }
}

export const appearFromLeftVariants: Variants = {
    show: {
        x: 0,
        opacity: 1,
    },
    hide: {
        x: -200,
        opacity: 0
    }
}

export const appearFromCenterVariants: Variants = {
    show: {
        scale: 1,
        opacity: 1,
    },
    hide: {
        scale: 0.9,
        opacity: 0
    }
}

export const appearFromTopVariants: Variants = {
    show: {
        y: 0,
        opacity: 1,
    },
    hide: {
        y: -200,
        opacity: 0
    }
}
