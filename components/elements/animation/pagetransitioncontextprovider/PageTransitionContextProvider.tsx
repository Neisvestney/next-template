"use client";

import React, {useState} from "react";

export type StartExit = (callback: () => void) => void
export interface PageTransitionContext {
    startExit: StartExit,
    exiting: boolean,
    setExiting: React.Dispatch<React.SetStateAction<boolean>>,
    callback?: () => void,
    setCallback: React.Dispatch<React.SetStateAction<(() => void) | undefined>>,
}

export const PageTransitionContext = React.createContext<PageTransitionContext | null>(null)

export interface PageTransitionContextProviderProps {
    children?: React.ReactNode
}

function PageTransitionContextProvider({children}: PageTransitionContextProviderProps) {
    const [exiting, setExiting] = useState(false);
    const [callback, setCallback] = useState<() => void>();

    const startExit: StartExit = (callback) => {
        if (!exiting) {
            setExiting(true)
            setCallback(() => callback)
        }
    }

    return <PageTransitionContext.Provider value={{startExit, exiting, setExiting, callback, setCallback}}>
        {children}
    </PageTransitionContext.Provider>
}

export default PageTransitionContextProvider;