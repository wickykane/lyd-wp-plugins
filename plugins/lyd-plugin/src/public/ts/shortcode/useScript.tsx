import { useEffect } from "react";

const useScript = (url: string, debounceTime = 0) => {
    useEffect(() => {
        const script = document.createElement("script");

        script.src = url;
        script.async = true;
        setTimeout(() => {
            document.body.appendChild(script);
        }, debounceTime);

        return () => {
            document.body.removeChild(script);
        };
    }, [url]);
};

export { useScript };
