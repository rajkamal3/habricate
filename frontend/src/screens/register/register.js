import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from './../../actions/userActions';
import Spinner from './../../ui/spinner/spinner';
import styles from './register.module.css';

const Register = ({ location, history }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const userSignup = useSelector(state => state.userSignup);
    const { loading, error, userInfo } = userSignup;

    const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(() => {
        if (userInfo) {
            history.location.pathname = '/';
            history.push('/');
        }
    }, [userInfo, history, redirect]);

    const sumbitHandler = e => {
        e.preventDefault();
        if (!name || !email || !password) {
            return;
        }
        dispatch(register(name, email, password));
    };

    return (
        <div>
            {loading && <Spinner />}
            <div className={styles.registerContainer}>
                <div className={styles.registerContainerChild}>
                    <div>
                        {error && <div className={styles.errorMessage}>{error.statusText}</div>}
                        <input
                            className={styles.emailNameAndPassword}
                            onChange={e => setName(e.target.value)}
                            type="text"
                            placeholder="Name"
                        />
                    </div>
                    <div>
                        {error && <div className={styles.errorMessage}>{error.statusText}</div>}
                        <input
                            className={[styles.emailNameAndPassword, styles.marginTop15px].join(' ')}
                            onChange={e => setEmail(e.target.value)}
                            type="text"
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <input
                            className={[styles.emailNameAndPassword, styles.marginTop15px].join(' ')}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <button className={styles.registerButton} onClick={sumbitHandler}>
                        SIGN UP
                    </button>
                    <div className={styles.marginTop15px}>
                        Already have an account?{' '}
                        <Link className={styles.loginButtonLink} to="/login">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
