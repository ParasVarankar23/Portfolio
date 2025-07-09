"use client";
import PropTypes from "prop-types";
import { createContext, useEffect, useMemo, useState } from "react";
import { LANGUAGES } from "./languages";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(LANGUAGES[0].code);

    useEffect(() => {
        const storedLang = localStorage.getItem("language");
        if (storedLang && LANGUAGES.some(l => l.code === storedLang)) {
            setLanguage(storedLang);
        }
    }, []);

    const changeLanguage = (code) => {
        setLanguage(code);
        localStorage.setItem("language", code);
    };

    const value = useMemo(() => ({ language, changeLanguage }), [language]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

LanguageProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
