import {
    HABIT_REQUEST,
    HABIT_REQUEST_SUCCESS,
    HABIT_REQUEST_FAIL,
    FETCH_ALL_HABITS_OF_USER_REQUEST,
    FETCH_ALL_HABITS_OF_USER_SUCCESS,
    FETCH_ALL_HABITS_OF_USER_FAIL
} from './../constants/habitConstants';

export const habitReducer = (state = {}, action) => {
    switch (action.type) {
        case HABIT_REQUEST:
            return { loading: true };
        case HABIT_REQUEST_SUCCESS:
            return { loading: false, habits: action.payload };
        case HABIT_REQUEST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const getUserHabitsReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_ALL_HABITS_OF_USER_REQUEST:
            return { loading: true };
        case FETCH_ALL_HABITS_OF_USER_SUCCESS:
            return { loading: false, habits: action.payload };
        case FETCH_ALL_HABITS_OF_USER_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
