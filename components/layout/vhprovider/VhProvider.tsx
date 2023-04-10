"use client";

import useWindowDimensions from "@/lib/hooks/useWindowDimensions";
import {useEffect} from "react";

export interface VhProviderProps {

}

function VhProvider(props: VhProviderProps) {
    const {height} = useWindowDimensions()

    useEffect(() => {
        if (height)
            document.documentElement.style.setProperty('--vh', `${height / 100}px`);
    }, [height]);

    return <></>;
}

export default VhProvider;