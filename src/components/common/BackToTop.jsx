import React, { useState, useEffect } from "react";
import { BackToTopSvg } from "../../utils/icons";
const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) setIsVisible(true);
            else setIsVisible(false);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 p-3 bg-[#112D49] text-white rounded-full shadow-lg hover:bg-[#18314F] transition-all duration-300"
                    aria-label="Back to Top"
                >
                    <BackToTopSvg className="h-6 w-6" />
                </button>
            )}
        </>
    );
};

export default BackToTop;
