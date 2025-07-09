"use client";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Footer = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <footer className={`footer ${theme}`} style={{ padding: '1rem', textAlign: 'center', borderTop: '1px solid #ccc', marginTop: '2rem' }}>
            <span>© {new Date().getFullYear()} My Portfolio. All rights reserved.</span>
        </footer>
    );
};

export default Footer;
