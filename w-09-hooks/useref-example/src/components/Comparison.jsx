import { useRef, useState } from "react";

function Comparison() {
    const [stateValue, setStateValue] = useState(
        Math.floor(Math.random() * 10) + 1,
    );
    // const refValue = useRef(Math.floor(Math.random() * 10) + 1);
    const refValue = useRef(0);

    const updateState = () => {
        setStateValue(Math.floor(Math.random() * 10) + 1); // This will trigger a re-render
    };

    console.log("Comparison Rendered");

    const updateRef = () => {
        // refValue.current = Math.floor(Math.random() * 10) + 1; // This will NOT trigger a re-render
        refValue.current += 1;
        console.log("ref updated:", refValue.current);
    };

    return (
        <div
            style={{
                marginTop: "20px",
                backgroundColor: "green",
                color: "white",
                padding: "20px",
            }}
        >
            <p>State value: {stateValue}</p>
            {/* <p>Ref value: {refValue.current}</p> */}
            <p>You clicked {refValue.current} times</p>

            <button
                style={{ display: "block", marginBottom: "10px" }}
                onClick={updateState}
            >
                Update useState
            </button>
            <button onClick={updateRef}>Update useRef</button>
        </div>
    );
}

export default Comparison;
