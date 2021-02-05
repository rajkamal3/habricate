import { OPEN_MODAL, CLOSE_MODAL } from './../constants/uiConstants';

export const openModal = () => dispatch => {
    dispatch({
        type: OPEN_MODAL,
        payload: true
    });
};

export const closeModal = () => dispatch => {
    dispatch({
        type: CLOSE_MODAL,
        payload: false
    });
};
