"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function About() {
    const { theme } = useContext(ThemeContext);

    return (
        <div
            className={`max-w-3xl mx-auto px-6 py-10 rounded-lg shadow-md transition-all duration-300 ${theme === "dark"
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-900"
                }`}
        >
            <h2 className="text-4xl font-bold mb-6 border-b border-gray-400 pb-2">
                About Me
            </h2>

            <p className="mb-5 text-lg leading-relaxed">
                Hello! I'm{" "}
                <span className="font-semibold text-cyan-500 dark:text-cyan-400">
                    Paras Pramod Varankar
                </span>
                , a passionate and detail-oriented Web Developer with a strong
                foundation in full-stack development. I specialize in the{" "}
                <b className="text-green-600 dark:text-green-400">MERN stack</b> and
                have gained hands-on experience through internships and freelance work.
            </p>

            <p className="mb-5 text-lg leading-relaxed">
                I’ve contributed to real-world applications during internships at{" "}
                <b>Nexcore Alliance</b>, <b>Internselite</b>, <b>IBM</b>, and{" "}
                <b>Quantum</b>. These roles refined my ability to build responsive
                frontends using{" "}
                <span className="text-blue-500 dark:text-blue-300">
                    React & Tailwind CSS
                </span>{" "}
                and robust backend systems with{" "}
                <span className="text-yellow-500 dark:text-yellow-400">Node.js</span>,
                while integrating databases like MongoDB, MySQL, and PostgreSQL.
            </p>

            <p className="mb-5 text-lg leading-relaxed">
                I've tackled projects in domains like{" "}
                <b className="text-purple-500 dark:text-purple-400">
                    AI, Cybersecurity, Data Science
                </b>{" "}
                and more. Some major accomplishments include building a{" "}
                <b>Hospital Management System</b>, a{" "}
                <b>Student Result Management System</b>, and a{" "}
                <b>Siddhi Resort Booking Website</b>.
            </p>

            <p className="mb-5 text-lg leading-relaxed">
                I’m currently pursuing my{" "}
                <b className="text-orange-500 dark:text-orange-400">
                    B.Sc. in Information Technology
                </b>{" "}
                at Pillai College, Panvel. I believe in being a lifelong learner and
                constantly evolving with the tech ecosystem.
            </p>

            <p className="text-lg leading-relaxed">
                From designing sleek UIs to optimizing performance and security, I’m
                driven by a desire to craft meaningful and impactful digital experiences.
            </p>
        </div>
    );
}
