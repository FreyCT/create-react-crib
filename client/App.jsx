import React, {useState, useEffect} from "react";

export default function App(){

    const [template, convert] = useState('Hello World');

    const clickHandler = () => {
        if(template === 'Hello World') {
            convert('Goodbye World');
        } else {
            convert('Hello World')
        }
    }

    return (
        <div>
            <h2 onClick={() => clickHandler()}>
                {template}
            </h2>
        </div>
    )

}