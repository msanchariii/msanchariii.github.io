import { Download, HomeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const MinimalPage = () => {
    return (
        <div className="flex-center bg-white p-8">
            <Link
                download
                href={"/resume/web.pdf"}
                className="absolute top-12 right-12 z-50 rounded-full bg-purple-500 stroke-white p-4 text-white"
            >
                <Download className="size-6" />
            </Link>
            <Link
                href={"/"}
                className="absolute top-36 right-12 z-50 rounded-full bg-purple-500 stroke-white p-4 text-white"
            >
                <HomeIcon className="size-6" />
            </Link>
            <div
                id="minimal"
                className="w-full max-w-3xl rounded-lg p-8 shadow-lg"
            >
                <section>
                    {/* name */}
                    <h1>Sanchari Mandal</h1>
                    {/* headline */}
                    <h4>Web Developer</h4>
                    {/* description */}
                    <p>Hi, I am Sanchari Mandal, a passionate web developer.</p>
                </section>
                <section>
                    <h2>Summay</h2>
                    <p>
                        I am a web developer with a passion for creating
                        beautiful and functional websites.
                    </p>
                </section>
                <section>
                    <h2>Skills</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                </section>
                <section>
                    <h2>Projects</h2>
                    <ul>
                        <li>
                            <h3>Project Title</h3>
                            {/* <p>
                                <ul>
                                    <li>Implemented this</li>
                                    <li>Implemented that</li>
                                </ul>
                            </p> */}
                            <a href="#">View Github</a>
                            <a href="#">Live Demo</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h3>Project Title</h3>
                            {/* <p>
                                <ul>
                                    <li>Implemented this</li>
                                    <li>Implemented that</li>
                                </ul>
                            </p> */}
                            <a href="#">View Github</a>
                            <a href="#">Live Demo</a>
                        </li>
                    </ul>
                </section>
                <section>
                    <h2>Achievements</h2>
                </section>
                <section>
                    <h2>Certifications</h2>
                </section>
            </div>
        </div>
    );
};

export default MinimalPage;
