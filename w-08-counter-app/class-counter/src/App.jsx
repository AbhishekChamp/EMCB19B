import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }; // initialize state
    }

    componentDidMount() {
        // Example lifecycle method: runs after first render
        console.log("Class Counter mounted");
    }

    increment = () => {
        // Update state using setState
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <h2>Class Counter: {this.state.count}</h2>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default App;
