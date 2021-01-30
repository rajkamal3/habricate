import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL } from './../constants/userConstants';
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

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response
        });
    }
};
