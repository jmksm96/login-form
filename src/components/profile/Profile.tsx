import React, {useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {getProfile} from '../../redux/profile-reducer/profile.selectors';
import {getProfileTC} from '../../redux/profile-reducer/profile-reducer';
import {logOutTC} from '../../redux/auth-reducer/auth-reducer';
import {Button} from '@material-ui/core';
import style from './Profile.module.scss'
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const Profile = () => {
    const dispatch = useDispatch();
    const {loading, user, error} = useSelector(getProfile, shallowEqual);

    useEffect(() => {
        dispatch(getProfileTC());
    }, [dispatch]);

    const handleLogOut = () => {
        dispatch(logOutTC())
    }

    return (
        <div className={style.container}>
            {error && <p className="error">{error.message}</p>}

            <Typography variant="h5" component="h5" gutterBottom>
                User profile:
            </Typography>
            <div className={style.code}>
                {loading && <CircularProgress/>}
                {user && <pre className={style.pre}>{JSON.stringify(user, null, 2)}</pre>}
            </div>
            <Button variant="contained" color="secondary" onClick={handleLogOut}>
                Log out
            </Button>
        </div>
    );
};

export default Profile;