"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import {
    FaBrain,
    FaCode,
    FaGlobe,
    FaLaptopCode,
    FaNetworkWired,
    FaPaintBrush,
    FaShieldAlt,
} from "react-icons/fa";

export default function Experience() {
    const { theme } = useContext(ThemeContext);

    const experiences = [
        {
            role: "Junior Software Web Developer",
            company: "Nexcore Alliance",
            link: "https://nexcorealliance.com",
            duration: "March 2025 - June 2025",
            icon: <FaLaptopCode />,
            color: "text-green-600 dark:text-green-400",
        },
        {
            role: "Web Development Intern",
            company: "Agnirva.com Space Community",
            link: "https://agnirva.com",
            duration: "Nov 2024 - Jan 2025",
            icon: <FaGlobe />,
            color: "text-blue-600 dark:text-blue-400",
        },
        {
            role: "AI Intern",
            company: "Quantum Learning",
            link: "https://quantumuniversity.edu.in",
            duration: "Oct 2024 - Dec 2024",
            icon: <FaBrain />,
            color: "text-purple-600 dark:text-purple-400",
        },
        {
            role: "Computer Graphics Intern",
            company: "NPTEL (Computer Graphics)",
            link: "https://nptel.ac.in",
            duration: "July 2024 - Sep 2024",
            icon: <FaPaintBrush />,
            color: "text-pink-500 dark:text-pink-400",
        },
        {
            role: "Data Scientist Intern",
            company: "IBM Skills",
            link: "https://www.ibm.com",
            duration: "July 2024 - Aug 2024",
            icon: <FaNetworkWired />,
            color: "text-indigo-600 dark:text-indigo-400",
        },
        {
            role: "Web Development Intern",
            company: "Internselite",
            link: "https://internselite.com",
            duration: "April 2024 - June 2024",
            icon: <FaCode />,
            color: "text-yellow-600 dark:text-yellow-400",
        },
        {
            role: "Cybersecurity Intern",
            company: "Quantum Learning",
            link: "https://quantumuniversity.edu.in",
            duration: "Dec 2023 - Feb 2024",
            icon: <FaShieldAlt />,
            color: "text-red-500 dark:text-red-400",
        },
    ];

    return (
        <div
            className={`max-w-6xl mx-auto px-6 py-10 rounded-lg shadow-lg transition-all duration-300
        ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
        >
            <h2 className="text-4xl font-bold mb-10 text-center border-b border-gray-400 pb-4">
                Experience
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {experiences.map((exp, idx) => (
                    <div
                        key={idx}
                        className="flex items-start gap-4 p-4 border rounded-lg hover:shadow-md transition-all duration-200"
                        style={{
                            borderColor: theme === "dark" ? "#444" : "#ddd",
                            backgroundColor: theme === "dark" ? "#111827" : "#f9f9f9",
                        }}
                    >
                        <div className={`text-2xl pt-1 ${exp.color}`}>{exp.icon}</div>
                        <div>
                            <h3 className="text-lg font-semibold">{exp.role}</h3>
                            <div>
                                <span className="font-semibold">{exp.company}</span>
                                <br />
                                <a
                                    href={exp.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 underline text-xs"
                                >
                                    {exp.link.replace('https://', '').replace('www.', '')}
                                </a>
                            </div>
                            <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">
                                {exp.duration}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
