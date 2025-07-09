"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { LanguageContext } from "@/context/LanguageContext";
import { LANGUAGES } from "@/context/languages";
import Link from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, changeLanguage } = useContext(LanguageContext);
    const [showLang, setShowLang] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const langRef = useRef(null);

    // Close language dropdown on outside click
    useEffect(() => {
        const handler = (e) => {
            if (langRef.current && !langRef.current.contains(e.target)) {
                setShowLang(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Education", href: "/education" },
        { name: "Project", href: "/project" },
        { name: "Skills", href: "/skills" },
        { name: "Experience", href: "/experience" },
    ];

    return (
        <nav
            className={`sticky top-0 z-50 border-b transition-all duration-300 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"
                }`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <div className="text-xl font-bold tracking-wide">My Portfolio</div>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-6 items-center text-base font-medium">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href}>{link.name}</Link>
                        </li>
                    ))}
                </ul>

                {/* Right Controls */}
                <div className="flex items-center gap-4">
                    {/* Language */}
                    <div className="relative" ref={langRef}>
                        <button
                            onClick={() => setShowLang(!showLang)}
                            className="text-xl px-2"
                            title="Language"
                        >
                            🌐
                        </button>
                        {showLang && (
                            <ul className="absolute right-0 mt-2 w-32 bg-[var(--background)] border rounded-lg shadow-md text-sm z-50">
                                {LANGUAGES.map((lang) => (
                                    <li key={lang.code}>
                                        <button
                                            onClick={() => {
                                                changeLanguage(lang.code);
                                                setShowLang(false);
                                            }}
                                            className={`w-full text-left px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ${language === lang.code
                                                    ? "bg-[var(--foreground)] text-[var(--background)]"
                                                    : ""
                                                }`}
                                        >
                                            {lang.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Theme toggle */}
                    <button
                        onClick={toggleTheme}
                        className="text-xl px-2 py-1 rounded"
                        title="Toggle Theme"
                    >
                        {theme === "dark" ? <FaMoon /> : <FaSun />}
                    </button>

                    {/* Hamburger Menu */}
                    <button
                        className="md:hidden text-2xl p-1 border rounded"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <IoMenu />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <ul className="md:hidden px-6 pb-4 flex flex-col gap-3 font-medium animate-fade-in">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href} onClick={() => setMenuOpen(false)}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
