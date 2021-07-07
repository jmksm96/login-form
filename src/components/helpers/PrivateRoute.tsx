import React from 'react';
import {Redirect, Route, RouteProps} from 'react-router-dom';
import {shallowEqual, useSelector} from 'react-redux';
import {getAuth} from '../../redux/auth-reducer/auth-selector';

const PrivateRoute:React.FC<RouteProps>= ({ children, ...rest }) => {
    const { currentUser } = useSelector(getAuth, shallowEqual);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                currentUser ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;