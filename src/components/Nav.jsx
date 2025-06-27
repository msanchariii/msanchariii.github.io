import { HomeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

const Nav = () => {
    return (
        <div className="fixed top-12 left-12 z-50 flex flex-col text-white shadow-md">
            {/* {links.map((link) => ( */}
            <Link href="/#hero">
                <HomeIcon className="size-10 cursor-pointer rounded-full bg-white/10 p-2 text-white transition-all duration-300 hover:bg-white/20 hover:text-black" />
            </Link>
            <a href="#about"></a>
        </div>
    );
};

export default Nav;
