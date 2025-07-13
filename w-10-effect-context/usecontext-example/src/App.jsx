import { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

function App() {
    // Get the theme and toggleTheme function from context
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`App ${theme}`}>
            <h1>Theme Toggle App with useContext</h1>
            <p>The current theme is: {theme}</p>
            <button onClick={toggleTheme} className='theme-button'>
                Toggle Theme Manually
            </button>
            <ComponentA />
            <ComponentB />
        </div>
    );
}

// Wrap the App component with ThemeProvider to provide the context to child components
export default function AppWithProvider() {
    return (
        <ThemeProvider>
            <App />
        </ThemeProvider>
    );
}
