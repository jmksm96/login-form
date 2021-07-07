import React from 'react';
import './App.css';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import PublicRoute from './components/helpers/PublicRoute';
import PrivateRoute from './components/helpers/PrivateRoute';


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/login" />
                </Route>
                <div className="App">
                    <PublicRoute path="/login">
                        <Login/>
                    </PublicRoute>
                    <PrivateRoute path="/profile">
                        <Profile />
                    </PrivateRoute>
                </div>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
