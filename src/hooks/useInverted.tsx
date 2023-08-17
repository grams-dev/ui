import { useState, useEffect } from "react";

export const useInverted = () => {

    const [inverted, setInverted] = useState<boolean>(false);

    const setColorScheme = e => {
        setInverted(!!e.matches);
    }

    useEffect(() => {
        const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");

        setColorScheme(matchMedia);
        matchMedia.addEventListener("change", setColorScheme);

        return () => matchMedia.removeEventListener("change", setColorScheme);
    }, []);

    return inverted;

}
