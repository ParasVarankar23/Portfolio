"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

export default function About() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="py-1">
            <div
                className={`max-w-6xl mx-auto px-8 py-12 rounded-xl shadow-lg transition-all duration-300 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
                    }`}
            >
                <h2 className="text-4xl font-bold mb-10 text-center border-b border-gray-300 pb-4">
                    About Me
                </h2>

                <div className="flex flex-col md:flex-row gap-10 items-center">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                        <img
                            src="/person.avif" // 🖼️ Replace with your actual profile image path
                            alt="Paras Varankar"
                            className="w-52 h-52 rounded-full border-4 border-cyan-400 shadow-md object-cover"
                        />
                    </div>

                    {/* About Content */}
                    <div className="text-[1.05rem] text-justify leading-relaxed space-y-5">
                        <p>
                            Hi! I'm{" "}
                            <span className="font-semibold text-cyan-500 dark:text-cyan-400">
                                Paras Pramod Varankar
                            </span>
                            , a passionate and detail-oriented Web Developer dedicated to crafting user-centric and high-performance web applications.
                        </p>
                        <p>
                            With a strong command of the{" "}
                            <b className="text-yellow-500 dark:text-yellow-400">MERN stack</b>
                            , I thrive on building full-stack solutions that combine clean, responsive frontends with scalable and secure backends. My development philosophy centers around writing clean code, creating intuitive user experiences, and solving real-world problems with technology.
                        </p>
                        <p>
                            I'm currently pursuing my{" "}
                            <b className="text-orange-500 dark:text-orange-400">
                                B.Sc. in Information Technology
                            </b>{" "}
                            at Pillai College, Panvel, where I continue to explore and grow in areas like frontend design, backend architecture, databases, and deployment.
                        </p>
                        <p>
                            I believe in continuous learning and enjoy experimenting with emerging web technologies. Whether it's optimizing performance, enhancing accessibility, or improving UX, I aim to create meaningful digital experiences that leave a lasting impact.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
