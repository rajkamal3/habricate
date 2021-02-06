import { OPEN_MODAL, CLOSE_MODAL, OPEN_ADD_HABIT, CLOSE_ADD_HABIT } from './../constants/uiConstants';

export const uiModalReducer = (state = {}, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return { openModal: action.payload };
        case CLOSE_MODAL:
            return { openModal: action.payload };
        default:
            return state;
    }
};

export const uiAddHabitReducer = (state = {}, action) => {
    switch (action.type) {
        case OPEN_ADD_HABIT:
            return { openAddHabit: action.payload };
        case CLOSE_ADD_HABIT:
            return { openAddHabit: action.payload };
        default:
            return state;
    }
};
