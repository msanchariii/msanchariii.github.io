"use client";
import { projects } from "@/data/portfolio.js";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Projects() {
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [activeFilter, setActiveFilter] = useState("all"); //all, nextjs, fullstack

    const handleFilterChange = (category) => {
        if (category) {
            setFilteredProjects(
                projects.filter((project) => project.category === category),
            );
        } else {
            setFilteredProjects(projects);
        }
    };

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#projects",
                start: "top 75%",
                toggleActions: "play none none reverse",
            },
        });
        tl.from("#projects h2", {
            duration: 1,
            y: 200,
            autoAlpha: 0,
            stagger: 0.2,
        });
        tl.from(".project-card", {
            duration: 0.8,
            y: 150,
            autoAlpha: 0,
            stagger: 0.15,
        });
    }, [activeFilter]);

    return (
        <section id="projects">
            <div className="mb-4 flex flex-row items-center justify-between lg:mb-8 xl:mb-16">
                <h2 className="my-auto">My Works</h2>
                <div className="flex gap-4 text-lg font-semibold text-gray-300">
                    <button
                        className={`cursor-pointer ${activeFilter === "all" ? "z-20 text-purple-400 underline decoration-purple-400 underline-offset-8" : ""}`}
                        onClick={() => {
                            handleFilterChange(null);
                            setActiveFilter("all");
                        }}
                    >
                        All
                    </button>
                    <button
                        className={`cursor-pointer ${activeFilter === "nextjs" ? "z-20 text-purple-400 underline decoration-purple-400 underline-offset-8" : ""}`}
                        onClick={() => {
                            handleFilterChange("Next.js");
                            setActiveFilter("nextjs");
                        }}
                    >
                        Next.js
                    </button>
                    <button
                        className={`cursor-pointer ${activeFilter === "fullstack" ? "z-20 text-purple-400 underline decoration-purple-400 underline-offset-8" : ""}`}
                        onClick={() => {
                            handleFilterChange("Full Stack");
                            setActiveFilter("fullstack");
                        }}
                    >
                        Full Stack
                    </button>
                </div>
            </div>
            <div className="mx-auto grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
}

const ProjectCard = ({ project }) => {
    const { title, description, link, github, image, tech } = project;
    return (
        <div
            key={title}
            className="project-card overflow-hidden rounded-lg border border-white/20 bg-white/5 pt-0 shadow-lg ring-1 ring-white/10 backdrop-blur-lg hover:bg-white/10 hover:shadow-2xl"
        >
            {image && (
                <Image
                    src={image}
                    // fill
                    width={500}
                    height={300}
                    alt={title}
                    className="mt-0 block w-full object-contain"
                />
            )}
            <div className="px-6 pt-6 pb-2">
                <h4 className="mb-2 text-2xl font-semibold">{title}</h4>
                <p className="mb-4 line-clamp-3">{description}</p>
                {tech && (
                    <div className="mb-2">
                        {tech.map((item, index) => (
                            <span
                                key={index}
                                className="mr-2 inline-block rounded bg-red-400 px-2 py-1 text-xs font-semibold text-white dark:bg-purple-600"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            <div className="flex gap-4 px-2 text-red-400 dark:text-purple-400">
                {link && (
                    <Link
                        href={link}
                        className="m-2 px-2 py-4 text-red-400 hover:underline dark:text-purple-400"
                    >
                        Live Site →
                    </Link>
                )}
                {github && (
                    <Link
                        href={github}
                        className="m-2 px-2 py-4 text-red-400 hover:underline dark:text-purple-400"
                    >
                        GitHub →
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Projects;
