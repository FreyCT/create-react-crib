import React, {useState, useEffect} from "react";
import styles from './styles/styles';
/*
need to apply style sheets and add a background to helloworld.
Hello world needs to be in the center of the screen and font size increased
every time the onclick is called, a random color is assigned as the background
*/


export default function App(){

    const [template, convert] = useState('Hello World');

    const clickHandler = () => {
        if(template === 'Hello World') {
            convert('Goodbye World');
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