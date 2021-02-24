import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoginReducer, userSignupReducer } from './reducers/userReducer';
import { getUserHabitsReducer, habitReducer, getSingleHabitReducer, addSingleHabitReducer } from './reducers/habitsReducer';
import { uiModalReducer, uiAddHabitReducer, uiSidebarReducer, uiSetPageNameReducer } from './reducers/uiReducer';

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userSignup: userSignupReducer,
    habits: habitReducer,
    userHabits: getUserHabitsReducer,
    singleHabit: getSingleHabitReducer,
    modal: uiModalReducer,
    sidebar: uiSidebarReducer,
    addHabit: uiAddHabitReducer,
    pageName: uiSetPageNameReducer,
    addSingleHabit: addSingleHabitReducer
});

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
