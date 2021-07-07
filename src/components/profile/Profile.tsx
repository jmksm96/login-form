import React, {useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {getProfile} from '../../redux/profile-reducer/profile.selectors';
import {getProfileTC} from '../../redux/profile-reducer/profile-reducer';
import {logOut} from '../../redux/auth-reducer/auth-reducer';

const Profile = () => {
    const dispatch = useDispatch();
    const {loading, user, error} = useSelector(getProfile, shallowEqual);

    useEffect(() => {
        dispatch(getProfileTC());
    }, [dispatch]);

    const handleLogOut = () => {
        dispatch(logOut())
    }

    return (
        <div>
            <h4>User profile:</h4>
            <div className="code">
                {user && <pre className="pre">{JSON.stringify(user, null, 2)}</pre>}
            </div>
        </div>
    );
};

export default Profile;