import { OPEN_MODAL, CLOSE_MODAL } from './../constants/uiConstants';

export const uiReducer = (state = {}, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return { openModal: action.payload };
        case CLOSE_MODAL:
            return { openModal: action.payload };
        default:
            return state;
    }
};
