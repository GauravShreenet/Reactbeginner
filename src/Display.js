import { Paragraph } from "./Paragraph";
import { useState} from 'react';

const Display = () => {
    // let counter = 20;

    const [counter, setCounter] = useState(20);

    const increament = () => {
        // console.log(counter)
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    return (
    <div>
        <Paragraph counter ={counter} name="Gaurav" phone="1213"/>
        <button onClick = {increament}>+</button>
        <button onClick = {decrement}>-</button>
        <div>0.00</div>
        {/* <Paragraph /> */}
    </div>
    );
};





export const Heading = () => {
    return <h1>Click Me</h1>;
}

export default Display;