import { Paragraph } from "./Paragraph";

const Display = () => {
    const counter = 20;
    return (
    <div>
        <div>{counter}</div>
        <div>0.00</div>
        <Paragraph />
    </div>
    );
};





export const Heading = () => {
    return <h1>Click Me</h1>;
}

export default Display;