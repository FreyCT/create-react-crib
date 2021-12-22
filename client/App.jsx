import React, {useState, useEffect} from "react";
import styles from './styles/styles';

export default function App(){

    const [template, convert] = useState('Hello World');

    const clickHandler = () => {
        if(template === 'Hello World') {
            convert('Good World');
        } else {
            convert('Hello World');
        }

        document.body.style.backgroundColor = `rgb(${rgb()}, ${rgb()}, ${rgb()})`;
    }

    const rgb = () => Math.floor(Math.random() * 256);

    return (
        <div>
            <h2 onClick={() => clickHandler()}>
                {template}
            </h2>
        </div>
    )
}