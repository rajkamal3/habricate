import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAIL
} from './../constants/userConstants';
import axios from 'axios';

export const login = (email, password) => async dispatch => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        });

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        };

        const { data } = await axios.post('/api/v1/users/login', { email, password }, config);

        console.log(data);

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        });

        localStorage.setItem('jwt', data.token);
        localStorage.setItem('userId', data.data.user._id);
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response
        });
    }
};

export const register = (name, email, password) => async dispatch => {
    console.log(name, email, password);
    try {
        dispatch({
            type: USER_SIGNUP_REQUEST
        });

        const { data } = await axios.post('/api/v1/users/signup', { name, email, password });
        console.log(data);

        dispatch({
            type: USER_SIGNUP_SUCCESS,
            payload: data
        });

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: USER_SIGNUP_FAIL,
            payload: error.response
        });
    }
};
