import { useState } from "react";

function App() {
    // Declare a state variable and setter using the useState hook
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Functional Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default App;
