"use client";
import React, { useEffect, useState } from "react";

export const ThemeContext = React.createContext();

import PropTypes from "prop-types";

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        const appliedTheme = storedTheme || theme;
        setTheme(appliedTheme);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(appliedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(newTheme);
    };

    const contextValue = React.useMemo(() => ({ theme, toggleTheme }), [theme]);

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
