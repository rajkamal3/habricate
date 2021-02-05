import React from 'react';
import Header from './ui/header/header';
import LoginScreen from './screens/login/login';
import HomeScreen from './screens/home/home';
import SingleHabit from './screens/singleHabit/singleHabit';
import RegisterScreen from './screens/register/register';
import { Route, BrowserRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from './actions/uiActions';

function App() {
    const dispatch = useDispatch();

    const openModalLocal = useSelector(state => state.ui.openModal);

    const closeModalClick = () => {
        dispatch(closeModal());
        document.body.style.filter = 'none';
    };

    return (
        <div>
            <BrowserRouter>
                {openModalLocal && (
                    <div
                        style={{
                            backgroundColor: '#222',
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            opacity: '0.05',
                            color: 'red'
                            // transition: '0.8s ease-in'
                        }}
                        className="modal"
                        onClick={closeModalClick}
                    ></div>
                )}
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
