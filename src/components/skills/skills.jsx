"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import {
    FaChartLine,
    FaDatabase,
    FaHtml5,
    FaJava,
    FaLock,
    FaNodeJs,
    FaPython,
    FaReact,
} from "react-icons/fa";

const skillsData = [
    {
        icon: <FaHtml5 size={28} className="text-[#e34c26]" />,
        title: "Frontend Development (HTML, CSS, JS)",
        description:
            "Strong skills in building interactive and responsive web UIs using HTML5, CSS3, and JavaScript.",
        rating: 95,
    },
    {
        icon: <FaReact size={28} className="text-[#61dafb]" />,
        title: "React.js & Next.js",
        description:
            "Building reusable components and SSR/static web apps with React and Next.js.",
        rating: 85,
    },
    {
        icon: <FaNodeJs size={28} className="text-[#3c873a]" />,
        title: "Backend Development (Node.js, Express.js)",
        description:
            "Creating APIs and server-side logic using Node.js and Express.js.",
        rating: 70,
    },
    {
        icon: <FaJava size={28} className="text-[#e76f00]" />,
        title: "Java Programming",
        description:
            "Hands-on experience in Java programming for software development.",
        rating: 70,
    },
    {
        icon: <FaDatabase size={28} className="text-[#4db33d]" />,
        title: "Databases (MongoDB, MySQL, SQL Plus, PostgreSQL)",
        description:
            "Efficient in handling NoSQL and relational databases for backend support.",
        rating: 85,
    },
    {
        icon: <FaLock size={28} className="text-indigo-500" />,
        title: "Cybersecurity Tools",
        description:
            "Basic understanding of tools and practices for securing web apps.",
        rating: 70,
    },
    {
        icon: <FaPython size={28} className="text-[#3776ab]" />,
        title: "Python & DSA",
        description:
            "Proficient in Python scripting and solving problems using Data Structures and Algorithms.",
        rating: 80,
    },
    {
        icon: <FaChartLine size={28} className="text-sky-500" />,
        title: "SEO, Google Analytics & SLO",
        description:
            "Knowledge of SEO strategies, website performance tracking and setting SLOs.",
        rating: 80,
    },
];

export default function Skills() {
    const { theme } = useContext(ThemeContext);

    return (
        <section
            className={`py-12 px-4 md:px-10 transition-all duration-300 ${theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
                }`}
        >
            <h2 className="text-4xl font-bold text-center mb-10 tracking-wide">
                My Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillsData.map((skill, idx) => (
                    <div
                        key={idx}
                        className={`rounded-xl shadow-md p-6 transition-all duration-300 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
                            }`}
                    >
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-4">
                                <span>{skill.icon}</span>
                                <h3 className="text-xl font-semibold">{skill.title}</h3>
                            </div>
                            <span className="text-lg font-bold">{skill.rating}%</span>
                        </div>

                        <p className="text-sm mb-3">{skill.description}</p>

                        <div className="w-full h-3 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div
                                className={`h-3 rounded-full transition-all duration-500 ${theme === "dark" ? "bg-white" : "bg-black"
                                    }`}
                                style={{ width: `${skill.rating}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
