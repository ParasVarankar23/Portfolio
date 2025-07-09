"use client";
import {
    FaChartBar,
    FaGlobe,
    FaGraduationCap,
    FaHospital,
    FaUserShield,
} from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const projectsData = [
    {
        icon: <FaHospital size={32} className="text-blue-600" />,
        title: "Hospital Management System",
        description:
            "A full-stack web application for hospital administration, patient management, and appointment scheduling. Built with MERN stack, featuring secure authentication and responsive UI.",
        stack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Tailwind CSS"],
        link: "#",
    },
    {
        icon: <FaGraduationCap size={32} className="text-orange-400" />,
        title: "Student Result Management System",
        description:
            "A platform for schools to manage student results, generate report cards, and analyze academic performance. Includes admin and teacher dashboards.",
        stack: ["MySQL", "Express.js", "React.js", "Node.js", "Bootstrap"],
        link: "#",
    },
    {
        icon: <FaGlobe size={32} className="text-green-500" />,
        title: "Siddhi Resort Website",
        description:
            "A modern, SEO-optimized website for a resort, featuring booking forms, gallery, and Google Analytics integration. Mobile-first and fast-loading.",
        stack: ["Next.js", "React.js", "Tailwind CSS", "Google Analytics", "SEO"],
        link: "#",
    },
    {
        icon: <FaUserShield size={32} className="text-yellow-400" />,
        title: "Cybersecurity Awareness Portal",
        description:
            "A portal to educate users about cybersecurity best practices, phishing detection, and safe browsing. Includes interactive quizzes and resources.",
        stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
        link: "#",
    },
    {
        icon: <FaChartBar size={32} className="text-sky-500" />,
        title: "AI-Powered Analytics Dashboard",
        description:
            "A dashboard for visualizing business KPIs using AI-driven insights and dynamic charts. Supports user authentication and role-based access.",
        stack: ["React.js", "Node.js", "PostgreSQL", "Chart.js", "AI APIs"],
        link: "#",
    },
];

export default function Projects() {
    const { theme } = useContext(ThemeContext);

    return (
        <section
            className={`py-4 px-4 md:px-10 transition-colors duration-300 ${theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
                }`}
        >
            <h2 className="text-4xl font-bold text-center mb-10 tracking-wide">
                Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectsData.map((project, idx) => (
                    <div
                        key={idx}
                        className={`rounded-xl shadow-md p-6 transition-all duration-300 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
                            }`}
                    >
                        <div className="flex items-center gap-4 mb-3">
                            <span>{project.icon}</span>
                            <h3 className="text-xl font-semibold flex-1">{project.title}</h3>
                        </div>

                        <p className="mb-3 text-sm">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-2">
                            {project.stack.map((tech, i) => (
                                <span
                                    key={i}
                                    className={`px-2 py-1 text-xs rounded font-semibold ${theme === "dark"
                                            ? "bg-white/10 text-white"
                                            : "bg-black/10 text-black"
                                        }`}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-block mt-2 text-sm font-medium hover:underline ${theme === "dark" ? "text-white" : "text-blue-600"
                                    }`}
                            >
                                View Project
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
