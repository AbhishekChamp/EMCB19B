// const RedButton = () => <button style={{ color: "red" }}>Delete</button>;
// const BlueButton = () => <button style={{ color: "blue" }}>Edit</button>;

const Button = ({ color, children }) => (
    <button style={{ color }}>{children}</button>
);

export default Button;
