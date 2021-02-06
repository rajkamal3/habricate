import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../../ui/spinner/spinner';
import { login } from '../../actions/userActions';
import styles from './login.module.css';

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
            {loading && <Spinner />}
            <div className={styles.loginContainer}>
                <div className={styles.loginContainerChild}>
                    <div>
                        {error && <div className={styles.errorMessage}>{error.statusText}</div>}
                        <input
                            className={styles.emailAndPassword}
                            onChange={e => setEmail(e.target.value)}
                            type="text"
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <input
                            className={styles.emailAndPassword}
                            style={{ marginTop: '15px' }}
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
