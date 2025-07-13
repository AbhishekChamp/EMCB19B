import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ComponentA() {
    const { theme } = useContext(ThemeContext); // Access the theme from context

    return (
        <div className={`component-a ${theme}`}>
            <h2>Component A</h2>
            <p>The theme in Component A is: {theme}</p>
        </div>
    );
}

export default ComponentA;
