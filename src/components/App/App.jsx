import './App.css';
import { useState } from 'react';

function App() {

    const names = ['Luis', 'Joshua', 'Andrew', 'Matt'];
    let random = () => Math.floor(Math.random() * names.length);

    const [myState, setState] = useState('initial value');

    const [name, setName] = useState('Luke');
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
        setName(names[random()]);
    }

    return (
        <div className="App">
            <p>Hello! My name is {name}.</p>
            <button onClick={handleClick}>
                Click me!
            </button>
            <p>I've clicked the button {count} times.</p>
        </div>
    );
}

export default App;
