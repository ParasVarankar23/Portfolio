"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import {
    FaBookOpen,
    FaGraduationCap,
    FaSchool,
    FaUniversity,
} from "react-icons/fa";

const educationData = [
    {
        icon: <FaUniversity size={36} className="text-blue-600" />,
        title: "Bachelor of Science in Information Technology",
        subtitle:
            "Pillai College of Arts, Commerce & Science (Autonomous), Panvel, Mumbai, Maharashtra",
        duration: "2023 - 2026 | Ongoing",
    },
    {
        icon: <FaGraduationCap size={36} className="text-orange-400" />,
        title: "Higher Secondary School Certificate (Science)",
        subtitle:
            "Shri Nanasaheb Kulkarni Junior College, Borli Panchatan, Shrivardhan, Raigad, Maharashtra",
        duration: "2021 - 2023 | 74.17%",
    },
    {
        icon: <FaSchool size={36} className="text-green-500" />,
        title: "Secondary School Certificate",
        subtitle:
            "Shri Mohanlal Soni Vidyalaya, Borli Panchatan, Shrivardhan, Raigad, Maharashtra",
        duration: "2016 - 2021 | 89.2%",
    },
    {
        icon: <FaBookOpen size={36} className="text-yellow-400" />,
        title: "Primary Education",
        subtitle:
            "Janata Shikshan Sanstha English Medium School, Borli Panchatan, Shrivardhan, Raigad, Maharashtra",
        duration: "2010 - 2016 | 95%",
    },
];

export default function Education() {
    const { theme } = useContext(ThemeContext);

    return (
        <section
            className={`py-12 px-4 md:px-10 transition-colors duration-300 ${theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
                }`}
        >
            <h2 className="text-4xl font-bold text-center mb-10 tracking-wide">
                Education
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {educationData.map((edu, idx) => (
                    <div
                        key={idx}
                        className={`flex items-start gap-5 rounded-xl shadow-md p-6 transition-all duration-300 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
                            }`}
                    >
                        <div className="pt-1">{edu.icon}</div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1">{edu.title}</h3>
                            <p className="text-sm mb-1 opacity-90">{edu.subtitle}</p>
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                {edu.duration}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
