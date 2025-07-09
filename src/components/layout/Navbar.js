"use client";
import { LanguageContext } from "@/context/LanguageContext";
import { LANGUAGES } from "@/context/languages";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { useContext, useState } from "react";
import { AiFillBook, AiFillHome, AiOutlineMail, AiOutlineProject, AiOutlineStar, AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, changeLanguage } = useContext(LanguageContext);
    const [showLang, setShowLang] = useState(false);
    return (
        <nav className={`navbar ${theme}`} style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>My Portfolio</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                {/* Navigation Tabs */}
                <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
                    <li><Link href="/" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.3rem' }}><AiFillHome /> Home</Link></li>
                    <li><Link href="/about" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.3rem' }}><AiOutlineUser /> About</Link></li>
                    <li><Link href="/contact" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.3rem' }}><AiOutlineMail /> Contact</Link></li>
                    <li><Link href="/education" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.3rem' }}><AiFillBook /> Education</Link></li>
                    <li><Link href="/project" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.3rem' }}><AiOutlineProject /> Project</Link></li>
                    <li><Link href="/skills" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.3rem' }}><AiOutlineStar /> Skills</Link></li>
                </ul>
                {/* Language and Theme Controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ position: 'relative' }}>
                        <button
                            aria-label="Change language"
                            onClick={() => setShowLang((v) => !v)}
                            style={{ padding: '0.5rem', borderRadius: '50%', border: 'none', background: 'none', fontSize: '1.2rem', cursor: 'pointer' }}
                        >
                            <span role="img" aria-label="Language">🌐</span>
                        </button>
                        {showLang && (
                            <ul style={{ position: 'absolute', right: 0, top: '2.5rem', background: 'var(--background)', color: 'var(--foreground)', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', zIndex: 10, minWidth: '120px', padding: 0, margin: 0, listStyle: 'none' }}>
                                {LANGUAGES.map((l) => (
                                    <li key={l.code}>
                                        <button
                                            onClick={() => { changeLanguage(l.code); setShowLang(false); }}
                                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100%', padding: '0.5rem 1rem', background: language === l.code ? 'var(--foreground)' : 'transparent', color: language === l.code ? 'var(--background)' : 'inherit', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
                                        >
                                            <span>{l.icon}</span> {l.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <button onClick={toggleTheme} style={{ padding: '0.5rem 1rem', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
                        {theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
