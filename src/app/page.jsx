"use client";
import React from "react";
import gsap from "gsap";
import {
    // HeroBackground,
    About,
    Contact,
    Footer,
    Hero,
    Projects,
    Universe,
    Skills,
} from "@/components";
import { UniverseProvider } from "@/contexts/universe";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother);

function HomePage() {
    useGSAP(() => {
        ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.5,
            effects: true,
            normalizeScroll: true,
            ignoreMobileResize: false,
        });
    });

    return (
        <UniverseProvider>
            <Universe />
            <div className="" id="smooth-wrapper">
                <div id="smooth-content">
                    <main className="relative z-0 mx-auto max-w-(--breakpoint-xl) space-y-16 px-6 md:px-12 xl:space-y-40 2xl:px-28">
                        <Hero />
                        <About />
                        <Skills />
                        <Projects />
                        {/* <Education /> */}
                        {/* <Contact /> */}
                    </main>
                    <Footer />
                </div>
            </div>
        </UniverseProvider>
    );
}

export default HomePage;
