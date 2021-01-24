import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [huell, setHuell] = useState('');

    useEffect(() => {
        axios.get(`http://127.0.0.1:3000/api/v1/habits/`).then(res => {
            console.log(res);
        });
    }, []);

    return <div className="App">{huell}</div>;
}

export default App;
