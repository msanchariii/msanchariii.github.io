"use client";
import { sectionVariants } from "@/data/animation";
// import { motion } from "framer-motion";
import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaNodeJs,
    FaJava,
    FaDocker,
    FaAws,
} from "react-icons/fa";
import {
    SiExpress,
    SiJavascript,
    SiKubernetes,
    SiMongodb,
    SiNextdotjs,
    SiPostgresql,
    SiPrisma,
    SiPython,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const skills = {
    frontend: [
        {
            name: "HTML5",
            icon: (
                <FaHtml5
                    className="mr-2 inline-block text-orange-500"
                    size={16}
                    strokeWidth={2}
                />
            ),
        },
        {
            name: "CSS3",
            icon: (
                <FaCss3Alt
                    className="mr-2 inline-block text-blue-500"
                    size={16}
                    strokeWidth={2}
                />
            ),
        },
        {
            name: "Javascript",
            icon: (
                <SiJavascript
                    className="mr-2 inline-block text-yellow-500"
                    size={16}
                    strokeWidth={0.5}
                />
            ),
        },
        {
            name: "React",
            icon: (
                <FaReact
                    className="mr-2 inline-block text-purple-400"
                    size={16}
                    strokeWidth={2}
                />
            ),
        },
        {
            name: "Next.js",
            icon: (
                <SiNextdotjs
                    className="mr-2 inline-block text-black"
                    size={16}
                    strokeWidth={0.5}
                />
            ),
        },
        {
            name: "TailwindCSS",
            icon: (
                <SiTailwindcss
                    className="mr-2 inline-block text-sky-400"
                    size={16}
                    strokeWidth={0.5}
                />
            ),
        },
    ],
    backend: [
        {
            name: "Node.js",
            icon: (
                <FaNodeJs
                    className="mr-2 inline-block text-green-500"
                    size={16}
                    strokeWidth={2}
                />
            ),
        },
        {
            name: "Java",
            icon: (
                <FaJava
                    className="mr-2 inline-block text-red-600"
                    size={16}
                    strokeWidth={2}
                />
            ),
        },
        {
            name: "Express",
            icon: (
                <SiExpress
                    className="mr-2 inline-block text-gray-700"
                    size={16}
                    strokeWidth={0.5}
                />
            ),
        },
        {
            name: "Prisma",
            icon: (
                <SiPrisma
                    className="mr-2 inline-block text-purple-600"
                    size={16}
                    strokeWidth={0.5}
                />
            ),
        },
        {
            name: "MongoDB",
            icon: (
                <SiMongodb
                    className="mr-2 inline-block text-green-700"
                    size={16}
                    strokeWidth={0.5}
                />
            ),
        },
        {
            name: "PostgreSQL",
            icon: (
                <SiPostgresql
                    className="mr-2 inline-block text-blue-600"
                    size={16}
                    strokeWidth={0.5}
                />
            ),
        },
    ],
    devops: [
        {
            name: "Docker",
            icon: (
                <FaDocker
                    className="mr-2 inline-block text-sky-400"
                    size={16}
                    strokeWidth={2}
                />
            ),
        },
        // {
        //     name: "AWS",
        //     icon: (
        //         <FaAws
        //             className="inline-block mr-2 text-orange-400"
        //             size={16}
        //             strokeWidth={2}
        //         />
        //     ),
        // },
        {
            name: "Kubernetes",
            icon: (
                <SiKubernetes
                    className="mr-2 inline-block text-blue-400"
                    size={16}
                    strokeWidth={0.5}
                />
            ),
        },
    ],
};

const SkillBadge = ({ name, icon }) => (
    <div className="skill-badges flex-center max-h-6 rounded-md border border-red-400 bg-[#f8f8f8] px-3 py-1 text-sm font-medium text-red-400 shadow-sm transition hover:bg-red-400 hover:text-white dark:border-purple-500 dark:bg-[#1e1e2e] dark:text-purple-500 dark:hover:bg-purple-500 dark:hover:text-white">
        {/* {icon} */}
        {name}
    </div>
);

const TopSkill = ({ children }) => {
    return (
        <div className="min-h-64 w-full cursor-pointer rounded-full bg-white/5 p-4 ring-2 ring-black/50 backdrop-blur-lg hover:text-red-400 hover:ring-red-400 lg:min-h-72 dark:ring-white/50 dark:hover:text-purple-400 dark:hover:ring-purple-400">
            {/* <div className="size-full p-4 lg:p-8"> */}
            {children}
            {/* </div> */}
        </div>
    );
};

function Skills() {
    useGSAP(() => {
        // GSAP animations can be added here if needed
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#skills",
                start: "top 75%",
                // markers: true,
                toggleActions: "play none none reverse",
            },
        });
        tl.from("#skills h2", {
            duration: 1,
            y: 200,
            autoAlpha: 0,
            stagger: 0.2,
        });
        tl.from(
            "#top-skills > div",
            {
                duration: 0.8,
                y: 100,
                autoAlpha: 0,
                stagger: 0.1,
            },
            // "<", // "<" means start this animation at the same time as the previous one
        );
        tl.from(".skill-section", {
            duration: 1,
            y: 100,
            autoAlpha: 0,
            stagger: 0.1,
        });
    }, []);
    return (
        <section id="skills" className="bg-radial">
            <h2>Skills</h2>
            {/* top skills - typescript, next.js, express, database */}
            <div
                className="mb-6 hidden justify-between gap-16 lg:mb-8 lg:flex"
                id="top-skills"
            >
                <TopSkill>
                    <SiTypescript className="size-full p-4 lg:p-8" />
                </TopSkill>
                <TopSkill>
                    <SiNextdotjs className="size-full p-4 lg:p-8" />
                </TopSkill>
                <TopSkill>
                    <SiExpress className="size-full p-4 lg:p-8" />
                </TopSkill>
                <TopSkill>
                    <SiMongodb className="size-full p-4 lg:p-8" />
                </TopSkill>
            </div>
            <div className="">
                {["frontend", "backend", "devops"].map((section) => (
                    <div
                        key={section}
                        className="skill-section flex flex-col justify-normal py-6 md:flex-row md:justify-between"
                    >
                        <h4 className="mb-6 text-xl font-semibold capitalize">
                            {section}
                        </h4>
                        <div className="flex max-w-sm flex-wrap gap-4 md:justify-end xl:max-w-lg">
                            {skills[section].map(({ name, icon }) => (
                                <SkillBadge
                                    key={name}
                                    name={name}
                                    icon={icon}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
