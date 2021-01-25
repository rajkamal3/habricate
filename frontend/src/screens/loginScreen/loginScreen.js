import React, { useState } from 'react';
import Header from './../../ui/header/header';
import { useDispatch } from 'react-redux';
import { login } from './../../actions/userActions';
import styles from './loginScreen.module.css';

function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const sumbitHandler = e => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        dispatch(login(email, password));
    };

    return (
        <div
        // style={{
        //     display: 'flex',
        //     flexDirection: 'column',
        //     height: '100vh',
        //     justifyContent: 'space-between',
        //     alignItems: 'center'
        // }}
        >
            <Header />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: '80vh',
                    alignItems: 'center'
                }}
            >
                <div
                    style={{
                        backgroundColor: 'rgb(102, 168, 81)',
                        height: '300px',
                        width: '500px',
                        display: 'flex',
                        flexFlow: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '25px'
                    }}
                >
                    <div>
                        <input
                            style={{
                                width: '300px',
                                height: '40px',
                                boxSizing: 'border-box',
                                fontSize: '20px',
                                fontFamily: "'Gilroy'",
                                fontWeight: '500',
                                paddingLeft: '20px',
                                border: 'none',
                                borderRadius: '500px',
                                backgroundColor: 'whitesmoke'
                            }}
                            onChange={e => setEmail(e.target.value)}
                            type="text"
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <input
                            style={{
                                width: '300px',
                                height: '40px',
                                boxSizing: 'border-box',
                                fontSize: '20px',
                                fontFamily: "'Gilroy'",
                                fontWeight: '500',
                                paddingLeft: '20px',
                                border: 'none',
                                borderRadius: '500px',
                                marginTop: '10px',
                                backgroundColor: 'whitesmoke'
                            }}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <button
                        style={{
                            width: '120px',
                            height: '35px',
                            border: 'none',
                            borderRadius: '500px',
                            marginTop: '15px',
                            cursor: 'pointer',
                            color: '#66a851',
                            fontSize: '14px'
                        }}
                        className={styles.loginButton}
                        onClick={sumbitHandler}
                    >
                        LOGIN
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen;
