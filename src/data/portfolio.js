// src/data/portfolioData.js
import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaNodeJs,
    FaJava,
    FaDocker,
    FaAws,
} from "react-icons/fa";
import { SiKubernetes, SiPython } from "react-icons/si";

const root = "/";

const aboutMe = {
    intro: "Hey! I'm Sanchari Mandal, a passionate web developer who loves crafting clean, efficient, and beautiful digital experiences.",
    description:
        "I enjoy creating tools that make life easier and more enjoyable. I believe in continuous learning and collaboration.",
};

// In /data/portfolio.js
const skills = {
    frontend: [
        {
            name: "React",
            icon: <FaReact className="mr-2 inline-block text-purple-400" />,
        },
        {
            name: "HTML5",
            icon: <FaHtml5 className="mr-2 inline-block text-orange-500" />,
        },
        {
            name: "CSS3",
            icon: <FaCss3Alt className="mr-2 inline-block text-blue-500" />,
        },
    ],
    backend: [
        {
            name: "Node.js",
            icon: <FaNodeJs className="mr-2 inline-block text-green-500" />,
        },
        {
            name: "Java",
            icon: <FaJava className="mr-2 inline-block text-red-600" />,
        },
        {
            name: "Python",
            icon: <SiPython className="mr-2 inline-block text-yellow-400" />,
        },
    ],
    devops: [
        {
            name: "Docker",
            icon: <FaDocker className="mr-2 inline-block text-blue-600" />,
        },
        {
            name: "AWS",
            icon: <FaAws className="mr-2 inline-block text-orange-400" />,
        },
        {
            name: "Kubernetes",
            icon: <SiKubernetes className="mr-2 inline-block text-blue-700" />,
        },
    ],
};

const projects = [
    {
        title: "Rustic Charm",
        image: "/assets/images/rustic-charm.png",
        tech: ["React", "Tailwind CSS", "JavaScript"],
        category: "Next.js",
        description:
            "A responsive portfolio built with React and Tailwind CSS to showcase my skills and projects.",
        link: "https://msanchariii.github.io/rustic-charm/",
        github: "https://github.com/msanchariii/rustic-charm",
    },
    {
        title: "Evolver",
        image: "/assets/images/evolver.png",
        tech: ["Next.js", "Node.js", "Prisma", "PostgreSQL"],
        category: "Full Stack",
        description:
            "An Online Exam Portal built with Next.js, Node.js, Prisma and PostgreSQL, featuring user authentication and authorization.",
        link: "https://evolver.vercel.app/",
        github: "https://github.com/sanchari/task-manager",
    },
    {
        title: "Organa",
        image: "/assets/images/organa.jpg",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        category: "Full Stack",
        description:
            "A real time organ matching platform powered by AI. Won 2nd prize in Hackathon organized by GCECT and Bytemonk in 2025.",
        github: "https://github.com/sanchari/blog-platform",
    },
];

const education = [
    {
        institution: "Government College og Engineering and Ceramic Technology",
        degree: "Bachelor of Technology in Information Technology",
        duration: "2022 - 2026",
        details:
            "Graduated with Honors, focused on software development and data structures.",
    },
];

const experience = [
    {
        role: "Frontend Developer Intern",
        company: "Tech Solutions Ltd.",
        duration: "June 2021 - August 2021",
        responsibilities: [
            "Developed responsive UI components using React and Tailwind CSS.",
            "Collaborated with backend team to integrate APIs.",
            "Optimized web performance and accessibility.",
        ],
    },
    {
        role: "Software Engineering Intern",
        company: "Innovatech Pvt Ltd.",
        duration: "January 2020 - May 2020",
        responsibilities: [
            "Assisted in building RESTful APIs using Node.js and Express.",
            "Wrote unit tests and participated in code reviews.",
            "Contributed to project documentation and deployment.",
        ],
    },
];

const footer = {
    copyright: `© ${new Date().getFullYear()} Sanchari Mandal. All rights reserved.`,
    socialLinks: {
        linkedin: "https://linkedin.com/in/sanchari",
        github: "https://github.com/sanchari",
        twitter: "https://twitter.com/sanchari",
    },
};

export { aboutMe, projects, education, experience, footer, skills };
