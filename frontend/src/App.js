import React from 'react';
import Header from './ui/header/header';
import LoginScreen from './screens/loginScreen/loginScreen';
import HomeScreen from './screens/homeScreen/homeScreen';
import RegisterScreen from './screens/register/register';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Route path="/login" component={LoginScreen} />
                <Route path="/home" component={HomeScreen} />
                <Route path="/register" component={RegisterScreen} />
                {/* <Route path="/register" component={RegisterScreen} /> */}
                {/* <Route path="/product/:id" component={ProductScreen} /> */}
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
