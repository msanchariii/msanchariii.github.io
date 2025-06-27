"use client";
import { useEffect, useRef } from "react";
// import { useTheme } from "../context/theme-context";
import { Sun, Moon } from "lucide-react";
import gsap from "gsap";
import { useTheme } from "@/contexts/theme";
// import { useTheme } from "../../../context/theme-context";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const iconRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);

        // Animate the icon on theme change
        if (iconRef.current) {
            gsap.fromTo(
                iconRef.current,
                { rotate: 0, opacity: 0 },
                { rotate: 360, opacity: 1, duration: 1, ease: "elastic.out" }
            );
        }
    }, [theme]);

    return (
        <button
            ref={buttonRef}
            onClick={() => {
                // Button bounce animation
                gsap.fromTo(
                    buttonRef.current,
                    { scale: 1 },
                    { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 }
                );
                toggleTheme();
            }}
            className="px-3 py-1 rounded-sm  flex items-center gap-2 cursor-pointer transition-colors"
        >
            <span ref={iconRef}>
                {theme === "light" ? (
                    <Moon size={32} className="text-teal-600" />
                ) : (
                    <Sun size={32} className="text-teal-100" />
                )}
            </span>
        </button>
    );
}
