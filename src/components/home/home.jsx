"use client";
import React, { useContext } from "react";
import { FaCode, FaServer, FaGlobe, FaLaptopCode } from "react-icons/fa";
import { ThemeContext } from "@/context/ThemeContext";

export default function Profile() {
    const { theme } = useContext(ThemeContext);

    return (
        <section
            className={`min-h-screen px-6 py-12 flex flex-col justify-center items-center transition-all duration-300 ${theme === "dark"
                    ? "bg-black text-white"
                    : "bg-white text-gray-900"
                }`}
        >
            {/* Intro Section */}
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center tracking-wide animate-pulse">
                Hi, I'm{" "}
                <span
                    className={`${theme === "dark" ? "text-cyan-400" : "text-blue-600"
                        }`}
                >
                    Paras Varankar
                </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-medium text-center mb-8">
                Full Stack Developer | MERN | Cybersecurity Enthusiast | SEO Expert
            </h2>

            <p className="text-center text-lg md:text-xl max-w-4xl leading-relaxed">
                I build modern, responsive, and scalable web applications. Passionate
                about React, backend APIs, security, and performance optimization.
            </p>

            {/* Role Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 w-full max-w-5xl">
                <div
                    className={`p-6 rounded-xl hover:scale-105 transition-transform shadow-lg ${theme === "dark" ? "bg-gray-800" : "bg-white"
                        }`}
                >
                    <FaLaptopCode
                        className={`text-4xl mb-4 mx-auto ${theme === "dark" ? "text-cyan-400" : "text-blue-600"
                            }`}
                    />
                    <h3 className="text-xl font-semibold text-center mb-2">
                        Frontend Expert
                    </h3>
                    <p className="text-sm text-center">
                        React.js | Tailwind | Next.js | Responsive UI
                    </p>
                </div>

                <div
                    className={`p-6 rounded-xl hover:scale-105 transition-transform shadow-lg ${theme === "dark" ? "bg-gray-800" : "bg-white"
                        }`}
                >
                    <FaServer
                        className={`text-4xl mb-4 mx-auto ${theme === "dark" ? "text-green-400" : "text-green-700"
                            }`}
                    />
                    <h3 className="text-xl font-semibold text-center mb-2">
                        Backend Developer
                    </h3>
                    <p className="text-sm text-center">
                        Node.js | Express | MongoDB | PostgreSQL
                    </p>
                </div>

                <div
                    className={`p-6 rounded-xl hover:scale-105 transition-transform shadow-lg ${theme === "dark" ? "bg-gray-800" : "bg-white"
                        }`}
                >
                    <FaCode
                        className={`text-4xl mb-4 mx-auto ${theme === "dark" ? "text-yellow-400" : "text-yellow-600"
                            }`}
                    />
                    <h3 className="text-xl font-semibold text-center mb-2">
                        Security Learner
                    </h3>
                    <p className="text-sm text-center">
                        Cybersecurity | Ethical Hacking | OWASP
                    </p>
                </div>

                <div
                    className={`p-6 rounded-xl hover:scale-105 transition-transform shadow-lg ${theme === "dark" ? "bg-gray-800" : "bg-white"
                        }`}
                >
                    <FaGlobe
                        className={`text-4xl mb-4 mx-auto ${theme === "dark" ? "text-pink-400" : "text-pink-600"
                            }`}
                    />
                    <h3 className="text-xl font-semibold text-center mb-2">
                        SEO & Analytics
                    </h3>
                    <p className="text-sm text-center">
                        SEO | Google Analytics | Site Optimization
                    </p>
                </div>
            </div>

            {/* CTA Button */}
            <a
                href="/contact"
                className={`mt-12 inline-block font-semibold py-3 px-8 rounded-lg transition-colors duration-300 ${theme === "dark"
                        ? "bg-white text-black hover:bg-white/80"
                        : "bg-black text-white hover:bg-black/80"
                    }`}
            >
                Let's Connect
            </a>
        </section>
    );
}
