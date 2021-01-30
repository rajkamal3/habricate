import { HABIT_REQUEST, HABIT_REQUEST_SUCCESS, HABIT_REQUEST_FAIL } from './../constants/habitConstants';
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
