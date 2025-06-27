import React from "react";
import ThemeToggle from "./ThemeToggle";
import {
    SiDocker,
    SiExpress,
    SiGithub,
    SiGmail,
    SiJavascript,
    SiLeetcode,
    SiLinkedin,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiReact,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

function About() {
    useGSAP(() => {
        // GSAP animations can be added here if needed
        const cards = gsap.utils.toArray(".bento-animation");

        cards.forEach((card) => {
            card.addEventListener("mousemove", (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateY = ((x - centerX) / centerX) * 10;
                const rotateX = ((centerY - y) / centerY) * 10;

                gsap.to(card, {
                    rotationY: rotateY,
                    rotationX: -rotateX,
                    scale: 1.03,
                    duration: 0.3,
                    ease: "power2.out",
                    transformPerspective: 1000,
                    transformOrigin: "center",
                });
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(card, {
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    duration: 0.4,
                    ease: "power3.out",
                });
            });
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top 75%",
                // end: "bottom center",
                // markers: true,
                toggleActions: "play none none reverse",
            },
        });
        tl.from("#about h2", {
            duration: 1,
            y: 200,
            autoAlpha: 0,
            stagger: 0.2,
        });
        tl.from(
            ".bento-animation",
            {
                duration: 0.8,
                y: 200,
                autoAlpha: 0,
                stagger: 0.15,
            },
            //"<" // "<" means start this animation at the same time as the previous one
        );
    }, []);

    return (
        <section id="about" className="">
            <h2>About Me</h2>
            {/* bento style about me */}
            <div id="bento">
                <div className="bento-item bento-animation flex flex-col items-center justify-center lg:col-span-2">
                    <h3 className="mb-4 w-full text-left text-lg font-semibold">
                        Hi, I am Sanchari
                    </h3>
                    <p className="w-full text-base font-normal text-gray-600 opacity-80 dark:text-gray-400">
                        I am a software developer with a passion for creating
                        beautiful and functional user experiences.
                    </p>
                </div>
                <div className="bento-item bento-animation aspect-square overflow-hidden bg-[url(/assets/cat.jpg)] bg-cover bg-no-repeat md:aspect-video lg:col-span-1 lg:aspect-auto lg:h-full">
                    {/* <div className="aspect-square w-full bg-[url(/assets/cat.jpg)] bg-cover bg-no-repeat"></div> */}
                </div>
                <div className="grid grid-cols-4 place-items-center gap-4 lg:grid-cols-2">
                    <div className="socials bento-animation">
                        <SiGmail className="size-10 text-red-500 md:size-12 lg:size-8" />
                    </div>
                    <div className="socials bento-animation">
                        <SiLinkedin className="size-10 text-blue-500 md:size-12 lg:size-8" />
                    </div>
                    <div className="socials bento-animation">
                        <SiGithub className="size-10 text-gray-800 md:size-12 lg:size-8" />
                    </div>
                    <div className="socials bento-animation">
                        <SiLeetcode className="size-10 text-green-500 md:size-12 lg:size-8" />
                    </div>
                </div>
                <div className="bento-item bento-animation hidden lg:block"></div>
                <div className="bento-item bento-animation flex-center flex-col lg:col-span-2">
                    <h3 className="mb-4 w-full text-left text-sm font-bold text-gray-600 uppercase opacity-80 dark:text-gray-400">
                        Education
                    </h3>
                    <p className="w-full text-sm font-medium">
                        Final year student at the Government College of
                        Engineering and Ceramic Technology, pursuing a B.Tech in
                        Information Technology.
                    </p>
                </div>
                <div className="bento-item bento-animation hidden lg:block"></div>
                <div className="bento-item bento-animation lg:col-span-2">
                    <h3 className="mb-4 w-full text-left text-sm font-bold text-gray-600 uppercase opacity-80 dark:text-gray-400">
                        My Tech Stack Is
                    </h3>
                    <div className="flex w-full justify-between gap-2">
                        <SiTailwindcss className="size-6 md:size-8" />
                        <SiJavascript className="size-6 md:size-8" />
                        <SiTypescript className="size-6 md:size-8" />
                        <SiReact className="size-6 md:size-8" />
                        <SiNextdotjs className="size-6 md:size-8" />
                        <SiExpress className="size-6 md:size-8" />
                        <SiNodedotjs className="size-6 md:size-8" />
                        <SiMongodb className="size-6 md:size-8" />
                        <SiPostgresql className="size-6 md:size-8" />
                        <SiDocker className="size-6 md:size-8" />
                    </div>
                </div>
                <div className="hidden grid-cols-3 gap-4 lg:col-span-2 lg:grid">
                    <div className="bento-item bento-animation col-span-2 rounded-2xl"></div>
                    <div className="bento-item bento-animation flex-center col-span-1 rounded-2xl">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
