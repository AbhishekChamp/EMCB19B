import { useState } from "react";
import Comparison from "./Comparison";

function Counter() {
    const [count, setCount] = useState(0);

    console.log("Parent Counter Component Rendered");

    return (
        <div>
            <h2>Counter Component</h2>
            <p>Parent count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>

            <Comparison />
        </div>
    );
}

export default Counter;
