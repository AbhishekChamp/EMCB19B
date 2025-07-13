import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ComponentB() {
    const { theme } = useContext(ThemeContext); // Access the theme from context

    return (
        <div className={`component-b ${theme}`}>
            <h2>Component B</h2>
            <p>The theme in Component B is: {theme}</p>
        </div>
    );
}

export default ComponentB;
