import { createContext, useState, useEffect } from "react";

// Create a Context for the theme
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // State to hold the current theme
    const [theme, setTheme] = useState("light");

    // Effect to toggle the theme every 5 seconds
    useEffect(() => {
        const themeInterval = setInterval(() => {
            console.log("Inside Timer");
            setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
        }, 5000);

        return () => clearInterval(themeInterval);
    }, []);

    // Function to toggle theme manually
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
