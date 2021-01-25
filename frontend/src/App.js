import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeScreen from './screens/homeScreen/homeScreen';
import LoginScreen from './screens/loginScreen/loginScreen';

function App({ location }) {
    const [huell, setHuell] = useState([]);

    console.log(location);

    useEffect(() => {
        axios.get(`http://127.0.0.1:3000/api/v1/habits/`).then(res => {
            const { data } = res.data.data;
            setHuell(data);
        });
    }, []);

    // console.log(huell);

    return (
        <div>
            <LoginScreen data={huell} />
        </div>
    );
}

export default App;
