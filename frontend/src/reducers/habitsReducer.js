import { HABIT_REQUEST, HABIT_REQUEST_SUCCESS, HABIT_REQUEST_FAIL } from './../constants/habitConstants';

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
