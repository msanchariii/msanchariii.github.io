"use client";
import { useTheme } from "@/contexts/theme";
import { useUniverse } from "@/contexts/universe";
// import { log } from "console";
import React, { useRef, useEffect } from "react";

export default function Universe() {
    const { visible } = useUniverse();
    console.log("Visible:", visible);
    return visible ? <UniverseCanvas /> : null;
}

const UniverseCanvas = () => {
    const canvasRef = useRef(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const particles = Array.from({ length: 100 }).map(() => ({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 2 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            alpha: Math.random() * 0.5 + 0.5,
        }));

        let animationFrameId;

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            particles.forEach((p) => {
                p.x += p.speedX;
                p.y += p.speedY;

                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle =
                    theme === "light"
                        ? `rgba(239, 68, 68, ${p.alpha})` // red-500
                        : `rgba(168, 85, 247, ${p.alpha})`; // violet-500
                ctx.shadowColor =
                    theme === "light"
                        ? "rgba(239, 68, 68, 1)"
                        : "rgba(168, 85, 247, 1)";
                ctx.shadowBlur = 10;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
        };
    }, [theme]); // ✅ now theme changes will re-trigger the effect

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed top-0 left-0 z-0 h-full w-full"
        />
    );
};
