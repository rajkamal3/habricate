import {
    HABIT_REQUEST,
    HABIT_REQUEST_SUCCESS,
    HABIT_REQUEST_FAIL,
    FETCH_ALL_HABITS_OF_USER_REQUEST,
    FETCH_ALL_HABITS_OF_USER_SUCCESS,
    FETCH_ALL_HABITS_OF_USER_FAIL,
    FETCH_SINGLE_HABIT_OF_USER_REQUEST,
    FETCH_SINGLE_HABIT_OF_USER_SUCCESS,
    FETCH_SINGLE_HABIT_OF_USER_FAIL,
    ADD_SINGLE_HABIT_REQUEST,
    ADD_SINGLE_HABIT_SUCCESS,
    ADD_SINGLE_HABIT_FAIL
} from './../constants/habitConstants';
import { closeAddHabitAction, closeModalAction } from './uiActions';
import axios from 'axios';

const jwt = localStorage.getItem('jwt');
const AuthStr = 'Bearer '.concat(jwt);
const user = localStorage.getItem('userId');

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

        const data = await axios.get('/api/v1/habits/myHabits', { headers: { Authorization: AuthStr } });

        const userHabits = data.data.data;

        dispatch({
            type: FETCH_ALL_HABITS_OF_USER_SUCCESS,
            payload: userHabits
        });
    } catch (error) {
        dispatch({
            type: FETCH_ALL_HABITS_OF_USER_FAIL,
            payload: error.response.data.message
        });
    }
};

export const fetchSingleHabit = habitId => async dispatch => {
    try {
        dispatch({
            type: FETCH_SINGLE_HABIT_OF_USER_REQUEST
        });

        const data = await axios.get(`/api/v1/habits/${habitId}`, { headers: { Authorization: AuthStr } });

        const habit = data.data.data;

        dispatch({
            type: FETCH_SINGLE_HABIT_OF_USER_SUCCESS,
            payload: habit
        });
    } catch (error) {
        dispatch({
            type: FETCH_SINGLE_HABIT_OF_USER_FAIL,
            payload: error.response
        });
    }
};

export const addSingleHabit = (name, doAtTime, doAtPlace, dailyTarget, dailyTargetUnit) => async dispatch => {
    try {
        dispatch({
            type: ADD_SINGLE_HABIT_REQUEST
        });

        const data = await axios.post(
            `/api/v1/habits`,
            { user, name, doAtTime, doAtPlace, dailyTarget, dailyTargetUnit },
            { headers: { Authorization: AuthStr } }
        );

        dispatch({
            type: ADD_SINGLE_HABIT_SUCCESS,
            payload: data
        });

        dispatch(closeModalAction());
        dispatch(closeAddHabitAction());
    } catch (error) {
        dispatch({
            type: ADD_SINGLE_HABIT_FAIL,
            payload: error.response
        });
    }
};
