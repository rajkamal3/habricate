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
import axios from 'axios';

const jwt = localStorage.getItem('jwt');
const AuthStr = 'Bearer '.concat(jwt);
const userId = localStorage.getItem('userId');

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

        console.log(userHabits);
    } catch (error) {
        dispatch({
            type: FETCH_ALL_HABITS_OF_USER_FAIL,
            payload: error.response
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

export const addSingleHabit = (timings, title, location, dailyGoal, dailyGoalUnits, reminder) => async dispatch => {
    try {
        dispatch({
            type: ADD_SINGLE_HABIT_REQUEST
        });

        const config = {
            user: userId,
            name: title,
            doAtTime: timings,
            doAtPlace: location,
            dailyTarget: dailyGoal,
            dailyTargetUnit: dailyGoalUnits
        };

        const data = await axios.post(`/api/v1/habits`, { headers: { Authorization: AuthStr } }, { data: config });

        console.log(data);
        // console.log(timings);
        // console.log(title);
        // console.log(location);
        // console.log(dailyGoal);
        // console.log(dailyGoalUnits);
        // console.log(reminder);
        // console.log(userId);
        dispatch({
            type: ADD_SINGLE_HABIT_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: ADD_SINGLE_HABIT_FAIL,
            payload: error.response
        });
    }
};
