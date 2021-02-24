import {
    OPEN_MODAL,
    CLOSE_MODAL,
    OPEN_ADD_HABIT,
    CLOSE_ADD_HABIT,
    OPEN_SIDEBAR,
    CLOSE_SIDEBAR,
    SET_CURRENT_PAGE_NAME
} from './../constants/uiConstants';

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

export const uiSidebarReducer = (state = { openSidebar: false }, action) => {
    switch (action.type) {
        case OPEN_SIDEBAR:
            return { openSidebar: action.payload };
        case CLOSE_SIDEBAR:
            return { openSidebar: action.payload };
        default:
            return state;
    }
};

export const uiSetPageNameReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_CURRENT_PAGE_NAME:
            return { pageName: action.payload };
        default:
            return state;
    }
};
