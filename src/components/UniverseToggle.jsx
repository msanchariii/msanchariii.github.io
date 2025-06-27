"use client";
import { useEffect, useRef } from "react";
// import { useTheme } from "../context/theme-context";
import { Sun, Moon, Star, StarHalf } from "lucide-react";
import gsap from "gsap";
import { useTheme } from "@/contexts/theme";
import { useUniverse } from "@/contexts/universe";
// import { useTheme } from "../../../context/theme-context";

export default function UniverseToggle() {
    const { toggleVisibility, visible } = useUniverse();
    const { theme } = useTheme();
    const iconRef = useRef(null);
    const buttonRef = useRef(null);

    // useEffect(() => {
    //     const root = document.documentElement;
    //     root.setAttribute("data-theme", theme);
    //     localStorage.setItem("theme", theme);

    //     // Animate the icon on theme change
    //     if (iconRef.current) {
    //         gsap.fromTo(
    //             iconRef.current,
    //             { rotate: 0, opacity: 0 },
    //             { rotate: 360, opacity: 1, duration: 1, ease: "elastic.out" },
    //         );
    //     }
    // }, []);

    return (
        <button
            ref={buttonRef}
            onClick={() => {
                // Button bounce animation
                gsap.fromTo(
                    buttonRef.current,
                    { scale: 1 },
                    { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 },
                );
                // toggleTheme();
                toggleVisibility();
            }}
            className="flex cursor-pointer items-center gap-2 rounded-sm px-3 py-1 transition-colors"
        >
            <span ref={iconRef}>
                {/* {visible === true ? ( */}
                <Star
                    size={32}
                    className=""
                    fill={
                        theme === "light"
                            ? visible
                                ? "black"
                                : "white"
                            : visible
                              ? "white"
                              : "black"
                    }
                />
                {/* ) : ( */}
                {/* <Star size={32} className="text-teal-100" /> */}
                {/* )} */}
            </span>
        </button>
    );
}
