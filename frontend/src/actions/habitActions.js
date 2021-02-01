import { HABIT_REQUEST, HABIT_REQUEST_SUCCESS, HABIT_REQUEST_FAIL, FETCH_ALL_HABITS_OF_USER_REQUEST } from './../constants/habitConstants';
import axios from 'axios';

export const getHabits = () => async dispatch => {
    try {
        dispatch({
            type: HABIT_REQUEST
        });

        const habits = await axios.get('/api/v1/habits');
        const { data } = habits.data.data;

        dispatch({
            type: HABIT_REQUEST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: HABIT_REQUEST_FAIL,
            payload: error.response
        });
    }
};

export const fetchAllHabitsOfUser = () => async dispatch => {
    try {
        dispatch({
            type: FETCH_ALL_HABITS_OF_USER_REQUEST
        });

        // let headers = {
        //     'Content-Type': 'application/json',
        //     Accept: 'application/json',
        //     Authorization: `Bearer ${token}`
        // };
        console.log(this.cookie);

        const data = await axios.get('/api/v1/habits/myHabits');
        console.log(data);
    } catch (error) {}
};
