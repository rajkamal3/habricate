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
import store from './../store';
import { closeAddHabitAction, closeModalAction } from './uiActions';
import axios from 'axios';

let jwt = localStorage.getItem('jwt');
let AuthStr = jwt;
let user = localStorage.getItem('userId');

const getToken = () => {
    const globalStore = store.getState();
    let bearerToken;

    if (globalStore.userLogin.userInfo) {
        bearerToken = globalStore.userLogin.userInfo.token;
    } else {
        bearerToken = AuthStr;
    }

    return bearerToken;
};

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

export const fetchAllHabitsOfUser = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_ALL_HABITS_OF_USER_REQUEST
        });

        const bearerToken = getToken();
        const data = await axios.get('/api/v1/habits/myHabits', { headers: { Authorization: `Bearer ${bearerToken}` } });
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

export const fetchSingleHabit = habitId => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_SINGLE_HABIT_OF_USER_REQUEST
        });

        const bearerToken = getToken();
        const data = await axios.get(`/api/v1/habits/${habitId}`, { headers: { Authorization: `Bearer ${bearerToken}` } });
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

        const bearerToken = getToken();
        const data = await axios.post(
            `/api/v1/habits`,
            { user, name, doAtTime, doAtPlace, dailyTarget, dailyTargetUnit },
            { headers: { Authorization: `Bearer ${bearerToken}` } }
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
