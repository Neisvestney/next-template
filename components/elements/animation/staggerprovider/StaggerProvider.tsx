"use client";

import {createContext, MutableRefObject, ReactNode, useRef} from "react";

export interface StaggerContext {
    lastChildAnimatedTime: MutableRefObject<number>
}

export const StaggerContext = createContext<StaggerContext | null>(null)

export interface StaggerProviderProps {
    children: ReactNode
}

function StaggerProvider({children}: StaggerProviderProps) {
    const lastChildAnimatedTime = useRef<number>(0);

    return <StaggerContext.Provider value={{lastChildAnimatedTime: lastChildAnimatedTime}}>
        {children}
    </StaggerContext.Provider>
}

export default StaggerProvider;
