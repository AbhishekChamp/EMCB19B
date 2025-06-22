import { useState } from "react";
import Counter from "./components/Counter";

function App() {
    const [counters, setCounters] = useState([{ id: 0, value: 0 }]);

    const updateTotal = () => {
        return counters.reduce((sum, counter) => sum + counter.value, 0);
    };

    const handleAddCounter = () => {
        const newId = counters.length
            ? Math.max(...counters.map((c) => c.id)) + 1
            : 0;
        setCounters([...counters, { id: newId, value: 0 }]);
    };

    const handleIncrement = (id) => {
        setCounters(
            counters.map((counter) =>
                counter.id === id
                    ? { ...counter, value: counter.value + 1 }
                    : counter,
            ),
        );
    };

    const handleDecrement = (id) => {
        setCounters(
            counters.map((counter) =>
                counter.id === id
                    ? { ...counter, value: counter.value - 1 }
                    : counter,
            ),
        );
    };

    const handleReset = (id) => {
        setCounters(
            counters.map((counter) =>
                counter.id === id ? { ...counter, value: 0 } : counter,
            ),
        );
    };

    const handleDelete = (id) => {
        setCounters(counters.filter((counter) => counter.id !== id));
    };

    return (
        <div className='container'>
            <h1>Counter App</h1>
            <div className='controls'>
                <button onClick={handleAddCounter}>Add Counter</button>
                <div className='total'>Total: {updateTotal()}</div>
            </div>
            <div id='counters-container'>
                {counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        id={counter.id}
                        value={counter.value}
                        onIncrement={handleIncrement}
                        onDecrement={handleDecrement}
                        onReset={handleReset}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
