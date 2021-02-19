import React from 'react';
import Header from './ui/header/header';
import LoginScreen from './screens/login/login';
import HomeScreen from './screens/home/home';
import SingleHabit from './screens/singleHabit/singleHabit';
import RegisterScreen from './screens/register/register';
import { Route, BrowserRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { closeAddHabitAction, closeModalAction, closeSidebarAction } from './actions/uiActions';
import Modal from './ui/modal/modal';
import Sidebar from './ui/sidebar/sidebar';

function App() {
    const dispatch = useDispatch();

    const openModalLocal = useSelector(state => state.ui.openModal);

    const closeModalClick = () => {
        dispatch(closeModalAction());
        dispatch(closeAddHabitAction());
        dispatch(closeSidebarAction());
        // document.body.querySelector('.homeScreenContainerChild').style.filter = 'none';
        // document.body.querySelector('.header').style.filter = 'none';
    };

    return (
        <div>
            <BrowserRouter>
                <Sidebar />
                {openModalLocal && <Modal click={closeModalClick} />}
                <Header />
                <Route path="/login" component={LoginScreen} />
                {/* <Route path="/home" component={HomeScreen} /> */}
                <Route path="/register" component={RegisterScreen} />
                <Route path="/habits/:id" component={SingleHabit} />
                {/* <Route path="/register" component={RegisterScreen} /> */}
                {/* <Route path="/admin/productlist/:pageNumber" component={ProductListScreen} exact /> */}
                {/* <Route path="/search/:keyword" component={HomeScreen} exact /> */}
                {/* <Route path="/page/:pageNumber" component={HomeScreen} exact /> */}
                {/* <Route path="/search/:keyword/page/:pageNumber" component={HomeScreen} exact /> */}
                <Route path="/" component={HomeScreen} exact />
            </BrowserRouter>
        </div>
    );
}

export default App;
