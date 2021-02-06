import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoginReducer } from './reducers/userLoginReducer';
import { getUserHabitsReducer, habitReducer, getSingleHabitReducer } from './reducers/habitsReducer';
import { uiModalReducer, uiAddHabitReducer } from './reducers/uiReducer';

const reducer = combineReducers({
    userLogin: userLoginReducer,
    habits: habitReducer,
    userHabits: getUserHabitsReducer,
    singleHabit: getSingleHabitReducer,
    ui: uiModalReducer,
    addHabit: uiAddHabitReducer
});

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
