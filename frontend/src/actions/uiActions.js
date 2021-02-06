import { OPEN_MODAL, CLOSE_MODAL, OPEN_ADD_HABIT, CLOSE_ADD_HABIT } from './../constants/uiConstants';

export const openModalAction = () => dispatch => {
    dispatch({
        type: OPEN_MODAL,
        payload: true
    });
};

export const closeModalAction = () => dispatch => {
    dispatch({
        type: CLOSE_MODAL,
        payload: false
    });
};

export const openAddHabitAction = () => dispatch => {
    dispatch({
        type: OPEN_ADD_HABIT,
        payload: true
    });
};

export const closeAddHabitAction = () => dispatch => {
    dispatch({
        type: CLOSE_ADD_HABIT,
        payload: false
    });
};
