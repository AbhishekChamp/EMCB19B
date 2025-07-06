import Button from "./components/Button";
import Header from "./components/Header";

function App() {
    return (
        <div className='layout'>
            <Header />
            <Button color='red'>Delete</Button>
            <Button color='blue'>Edit</Button>
            <Button>Green</Button>
            <Button>
                <span>👨‍💻 Working</span>
            </Button>
            <Button>
                <h1>Heading Button</h1>
            </Button>
            <Button>
                <p>Paragraph button</p>
            </Button>
            <Header>
                <p>I am childeren of header component</p>
            </Header>
        </div>
    );
}

export default App;
