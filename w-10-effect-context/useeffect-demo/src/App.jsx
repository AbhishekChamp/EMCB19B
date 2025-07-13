import { useEffect, useState } from "react";

function App() {
    // States for storing user data and loading status
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // setUsers(
    //     fetch("https://jsonplaceholder.typicode.com/todos/1")
    //         .then((response) => response.json())
    //         .then((json) => console.log(json)),
    // );

    // useEffect hook to fetch data when the component mounts
    useEffect(() => {
        // Fetching data from JSONPlaceholder API
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data); // Set fetched data to the state
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
                setLoading(false); // Set loading to false in case of an error
            });
    }, []); // Empty dependency array means this effect runs once when the component mounts

    if (loading) {
        return <div>Loading...</div>; // Show loading state while fetching data
    }

    return (
        <div className='App'>
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
