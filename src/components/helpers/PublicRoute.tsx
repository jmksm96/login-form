import React from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {getAuth} from '../../redux/auth-reducer/auth-selector';
import {Redirect, Route, RouteProps} from 'react-router-dom';

const PublicRoute: React.FC<RouteProps> = ({children, ...rest}) => {
    const {currentUser} = useSelector(getAuth, shallowEqual);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                currentUser ? (
                    <Redirect
                        to={{
                            pathname: '/profile',
                            state: { from: location },
                        }}
                    />
                ) : (
                    children
                )
            }
        />


    );
};

export default PublicRoute;