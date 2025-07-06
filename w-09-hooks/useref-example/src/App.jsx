import Counter from "./components/Counter";

function App() {
    // const apiUrl = import.meta.env.VITE_API_URL;
    const name = import.meta.env.VITE_NAME;
    return (
        <div>
            <h1>Created By {name}</h1>
            <Counter />
        </div>
    );
}

export default App;
