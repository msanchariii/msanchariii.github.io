"use client";
import { useGSAP } from "@gsap/react";
import Nav from "./Nav";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";

gsap.registerPlugin(SplitText);

function Hero() {
    useGSAP(() => {
        const tl = gsap.timeline();
        const splittingTitle = SplitText.create(".hero-title", {
            type: "chars",
        });
        const splittingSubtitle = SplitText.create(".hero-subtitle", {
            type: "words",
        });
        const splittingHeadline = SplitText.create(".hero-headline", {
            type: "lines",
        });
        tl.from(splittingTitle.chars, {
            delay: 0.2,
            duration: 1,
            y: splittingTitle.chars[0].startY - 70,
            autoAlpha: 0,
            stagger: {
                amount: 0.5,
                from: "random",
                grid: "auto",
            },
        });

        tl.from(splittingSubtitle.words, {
            // delay: 0.4,
            duration: 0.3,
            y: -70,
            autoAlpha: 0,
            stagger: 0.1,
        });

        // typewriter effect for headline
        tl.from(".hero-headline", {
            // delay: 0.4,
            duration: 0.6,
            // y: -70,
            autoAlpha: 0,
            stagger: {
                amount: 0.5,
                from: "start",
                grid: "auto",
            },
        });
    }, []);

    return (
        <section id="hero">
            <div className="container mx-auto w-full px-4">
                <Nav />

                <div className="flex flex-col justify-center text-center">
                    <div className="mb-8 flex justify-center">
                        {/* <img src="assets/image/home-img.png" alt="Image"> */}
                        <div className="relative aspect-square h-36 rounded-full bg-red-400 shadow-[0_0_40px_rgba(239,68,68,0.5)] transition-all duration-300 dark:bg-purple-400 dark:shadow-[0_0_40px_rgba(168,85,247,0.5)]">
                            <Image
                                src="/assets/cat.webp"
                                alt="Image"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full"
                            />
                        </div>
                    </div>

                    <h1 className="hero-title">
                        Sanchari <br className="block sm:hidden" /> Mandal
                    </h1>
                    <h2 className="hero-subtitle">Web Developer</h2>
                    <p className="hero-headline">
                        I have a passion for software. I enjoy creating tools
                        that make life easier for people.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
