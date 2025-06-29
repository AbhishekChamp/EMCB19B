import { useState } from "react";
import "./App.css";

function Card({ userDetails }) {
    return (
        <div>
            <h1>{userDetails.name}</h1>
        </div>
    );
}

function App() {
    const [count, setCount] = useState(0);

    function addCount() {
        setCount((c) => c + 1);
    }

    const user = { name: "EMC", skills: "React" };

    return (
        <div>
            <Card userDetails={user} />
            <button onClick={addCount}>Add Count</button>
            <p>Current count is {count}</p>
        </div>
    );
}

export default App;
