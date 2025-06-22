import ListChecker from "./ListChecker";
import ListItem from "./ListItem";

function List() {
    return (
        <div>
            <h2>List Items</h2>
            <ListItem />
            <ListItem />
            <ListItem />
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Hello React</h1>
            <List />
            <hr />
            <ListChecker />
        </div>
    );
}

export default App;
