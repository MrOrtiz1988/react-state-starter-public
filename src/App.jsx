import { useState } from 'react';
// Line 1 is the same as lines 2 & 3;
// import React from 'react';
// const useState = React.useState;

import './App.css';

function App() {

    // useState development pattern: [ var, setVar ] = useState(initialValue);
    const [ myVariable, setMyVariable ] = useState('initial value');
    const [ bananas, setBananas ] = useState('Good to eat!');

    // Equivalent in psuedo code ...
    // const whatUseStateReturns = useState(false);
    // const myThing = whatUseStateReturns[0];
    // const setMyThing = whatUseStateReturns[1];
    // const [ myThing, setMyThing ] = useState('' || {} || []);

    const [ name, setName ] = useState('Luka');
    const [ count, setCount ] = useState(0);

    // Curly braces inside the JSX is similar to JS string
    // const somestring = `Hello!, My name is ${name}.`;

    const handleClick = () => {
        setCount(count + 1);
    }

    // Rendered in the DOM
    return (
        <div className="App">
            <p>Hello! My name is {name}.</p>
            <button onClick={handleClick}>Click me!</button>
            <p>I've clicked the button {count} times.</p>
        </div>
    );
}

export default App;
