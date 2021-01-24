import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeScreen from './screens/homeScreen/homeScreen';

function App() {
    const [huell, setHuell] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:3000/api/v1/habits/`).then(res => {
            const { data } = res.data.data;
            setHuell(data);
        });
    }, []);

    return (
        <div>
            <HomeScreen />
        </div>
    );
}

export default App;
