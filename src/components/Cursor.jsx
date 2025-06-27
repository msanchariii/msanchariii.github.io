"use client";
import { useEffect } from "react";

export default function Cursor() {
    useEffect(() => {
        // Check for touch device
        if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
            return; // Skip adding the cursor on touch devices
        }

        const cursor = document.createElement("div");
        cursor.style.position = "fixed";
        cursor.style.top = "0";
        cursor.style.left = "0";
        cursor.style.width = "20px";
        cursor.style.height = "20px";
        cursor.style.background = "rgba(168, 85, 247, 0.6)"; // purple
        cursor.style.borderRadius = "50%";
        cursor.style.pointerEvents = "none";
        cursor.style.transform = "translate(-50%, -50%)";
        cursor.style.transition =
            "transform 0.1s ease-out, width 0.2s, height 0.2s, box-shadow 0.2s, background 0.2s";
        cursor.style.zIndex = "9999";

        document.body.appendChild(cursor);

        const moveCursor = (e) => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        };

        const interactiveElements = document.querySelectorAll(
            "a, button, [role='button'], .hover-cursor"
        );

        const handleMouseEnter = () => {
            cursor.style.width = "35px";
            cursor.style.height = "35px";
            cursor.style.background = "rgba(168, 85, 247, 0.9)";
            cursor.style.boxShadow = "0 0 12px rgba(168, 85, 247, 0.8)";
        };

        const handleMouseLeave = () => {
            cursor.style.width = "20px";
            cursor.style.height = "20px";
            cursor.style.background = "rgba(168, 85, 247, 0.6)";
            cursor.style.boxShadow = "none";
        };

        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
            document.body.removeChild(cursor);
        };
    }, []);

    return null;
}
