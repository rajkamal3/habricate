import React from 'react';
import Header from './ui/header/header';
import LoginScreen from './screens/login/login';
import HomeScreen from './screens/home/home';
import SingleHabit from './screens/singleHabit/singleHabit';
import RegisterScreen from './screens/register/register';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <div>
            <BrowserRouter>
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
