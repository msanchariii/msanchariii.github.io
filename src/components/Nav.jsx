import React from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { SiGithub, SiLeetcode, SiLinkedin } from "react-icons/si";
import UniverseToggle from "./UniverseToggle";

const Nav = () => {
    return (
        <nav className="mb-20 flex w-full items-center justify-between">
            <div className="hidden items-center gap-2 md:flex md:gap-4">
                <SiGithub className="size-6 md:size-8 dark:stroke-black" />
                <SiLeetcode className="size-6 text-yellow-500 md:size-8" />
                <SiLinkedin className="size-6 text-blue-500 md:size-8" />
            </div>
            <div className="flex w-full items-center justify-between gap-2 md:w-fit md:justify-normal md:gap-6">
                <Link
                    href="/resume/web.pdf"
                    className="relative inline-block overflow-hidden rounded-md border border-white/20 bg-white/90 px-5 py-2 font-semibold text-black shadow-md ring-1 ring-white/10 backdrop-blur-lg transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-purple-500/50 hover:ring-purple-400 md:px-9 md:py-4"
                >
                    Get my Resume
                </Link>
                <div className="flex space-x-2">
                    <ThemeToggle />
                    <UniverseToggle />
                </div>
            </div>
        </nav>
    );
};

export default Nav;
