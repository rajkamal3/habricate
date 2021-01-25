import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './../../actions/userActions';

function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    // const userLogin = useSelector(state => state.userLogin);
    // const { loading, error, userInfo } = userLogin;

    const sumbitHandler = e => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    return (
        <div>
            <div>
                <input onChange={e => setEmail(e.target.value)} type="text" />
                <input onChange={e => setPassword(e.target.value)} type="password" />
                <button onClick={sumbitHandler}>Log In</button>
            </div>
        </div>
    );
}

export default LoginScreen;
