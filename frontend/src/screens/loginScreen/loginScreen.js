import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from './../../actions/userActions';
import styles from './loginScreen.module.css';

function LoginScreen({ location, history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    const redirect = location.search ? location.search.split('=')[1] : '/';
    console.log(redirect);

    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }
    }, [userInfo, history, redirect]);

    const sumbitHandler = e => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        dispatch(login(email, password));
    };

    return (
        <div>
            {loading && <div className={styles.loader}>Loading...</div>}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: 'calc(100vh - 70px)',
                    alignItems: 'center'
                }}
            >
                <div
                    style={{
                        height: '360px',
                        display: 'flex',
                        flexFlow: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '25px'
                    }}
                >
                    <div>
                        {error && (
                            <div
                                style={{
                                    textAlign: 'center',
                                    backgroundColor: '#ff7575',
                                    height: '35px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: 'white',
                                    marginBottom: '10px'
                                }}
                            >
                                {error.statusText}
                            </div>
                        )}
                        <input
                            style={{
                                width: '360px',
                                height: '60px',
                                boxSizing: 'border-box',
                                fontSize: '20px',
                                fontFamily: 'Gilroy',
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
                                width: '360px',
                                height: '60px',
                                boxSizing: 'border-box',
                                fontSize: '20px',
                                fontFamily: "'Gilroy'",
                                fontWeight: '500',
                                paddingLeft: '20px',
                                border: 'none',
                                borderRadius: '500px',
                                marginTop: '15px',
                                backgroundColor: 'whitesmoke'
                            }}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <button
                        style={{
                            width: '250px',
                            height: '45px',
                            border: 'none',
                            marginTop: '15px',
                            cursor: 'pointer',
                            backgroundColor: 'rgb(102, 168, 81)',
                            fontSize: '16px',
                            fontWeight: '600',
                            borderRadius: '60px',
                            fontFamily: "'Gilroy'",
                            color: 'white',
                            letterSpacing: '10px'
                        }}
                        className={styles.loginButton}
                        onClick={sumbitHandler}
                    >
                        LOGIN
                    </button>
                    <Link
                        to="/forgot-password"
                        style={{
                            height: '25px',
                            alignItems: 'center',
                            display: 'flex',
                            width: '250px',
                            justifyContent: 'center',
                            textDecoration: 'underline',
                            color: 'rgb(102, 168, 81)',
                            fontWeight: '600',
                            marginTop: '15px',
                            cursor: 'pointer'
                        }}
                    >
                        Forgot your password?
                    </Link>
                    <div
                        style={{
                            height: '25px',
                            alignItems: 'center',
                            display: 'flex',
                            width: '250px',
                            justifyContent: 'center',
                            marginTop: '15px',
                            cursor: 'pointer'
                        }}
                    >
                        Not a member yet? &nbsp;
                        <Link
                            to="/register"
                            style={{
                                textDecoration: 'underline',
                                color: 'rgb(102, 168, 81)',
                                fontWeight: '600'
                            }}
                        >
                            Register now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen;
