import {applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk'
import authReducer from "./auth-reducer/auth-reducer";
import profileReducer from "./profile-reducer/profile-reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

