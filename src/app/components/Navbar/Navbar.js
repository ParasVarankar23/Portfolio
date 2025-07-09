"use client";
import { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { LANGUAGES } from "../../context/languages";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, changeLanguage } = useContext(LanguageContext);
    const [showLang, setShowLang] = useState(false);
    return (
        <nav className={`navbar ${theme}`} style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>My Portfolio</div>
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
        </nav>
    );
};

export default Navbar;
