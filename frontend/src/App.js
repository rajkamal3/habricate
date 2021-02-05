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
                            // background: `url('https://images.unsplash.com/photo-1486723312829-f32b4a25211b?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=') no-repeat center center fixed`,
                            // backgroundSize: 'cover',
                            // filter: 'blur(5px)'
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
