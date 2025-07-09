"use client";
import { LanguageContext } from "@/context/LanguageContext";
import { LANGUAGES } from "@/context/languages";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { useContext, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, changeLanguage } = useContext(LanguageContext);
    const [showLang, setShowLang] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav
            className={`navbar ${theme}`}
            style={{
                padding: "1rem 1.5rem",
                borderBottom: "1px solid #ccc",
                background: "var(--background)",
                color: "var(--foreground)",
            }}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">My Portfolio</div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 items-center font-medium text-base">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/education">Education</Link></li>
                    <li><Link href="/project">Project</Link></li>
                    <li><Link href="/skills">Skills</Link></li>
                    <li><Link href="/experience">Experience</Link></li>
                </ul>

                {/* Right Controls */}
                <div className="flex items-center gap-3">
                    {/* Language Button */}
                    <div className="relative">
                        <button
                            onClick={() => setShowLang((prev) => !prev)}
                            className="text-xl px-2"
                            title="Change Language"
                        >
                            🌐
                        </button>
                        {showLang && (
                            <ul className="absolute right-0 mt-2 w-32 bg-[var(--background)] border rounded-lg shadow-md text-sm z-10">
                                {LANGUAGES.map((lang) => (
                                    <li key={lang.code}>
                                        <button
                                            onClick={() => {
                                                changeLanguage(lang.code);
                                                setShowLang(false);
                                            }}
                                            className={`w-full text-left px-3 py-2 ${language === lang.code
                                                ? "bg-[var(--foreground)] text-[var(--background)]"
                                                : ""
                                                } hover:bg-gray-200 dark:hover:bg-gray-700 rounded`}
                                        >
                                            {lang.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="text-xl px-3 py-1 rounded-md"
                        title="Toggle theme"
                    >
                        {theme === "dark" ? <FaMoon /> : <FaSun />}
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-2xl px-2"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Menu Items */}
            {menuOpen && (
                <ul className="md:hidden mt-4 flex flex-col gap-3 px-4 text-base font-medium">
                    <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                    <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                    <li><Link href="/education" onClick={() => setMenuOpen(false)}>Education</Link></li>
                    <li><Link href="/project" onClick={() => setMenuOpen(false)}>Project</Link></li>
                    <li><Link href="/skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
                    <li><Link href="/experience" onClick={() => setMenuOpen(false)}>Experience</Link></li>
                </ul>
            )}
        </nav>
    );
}
