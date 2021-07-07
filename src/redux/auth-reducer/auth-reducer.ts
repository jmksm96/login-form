import api from '../../api/api'


const initialState: AuthStateT = {
    isSubmitting: false,
    currentUser: null,
    error: null,
}
const authReducer = (state: AuthStateT = initialState, action: AuthActionTypes) => {
    switch (action.type) {
        case 'LOGIN': {
            return {
                ...state,
                isSubmitting: true,
                error: null
            }
        }
        case 'LOGIN-SUCCESS': {
            return {
                ...state,
                isSubmitting: false,
                currentUser: action.payload
            }
        }
        case 'LOGIN-FAILURE': {
            return {
                ...state,
                isSubmitting: false,
                error: action.payload
            }
        }
        case 'LOGOUT-SUCCESS': {
            return initialState
        }
        case 'LOGOUT-FAILURE': {
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state
    }
}

//types
type AuthActionTypes = ReturnType<typeof logInSuccess>
    | ReturnType<typeof logInFailure>
    | ReturnType<typeof logOut>
    | ReturnType<typeof logIn>
    | ReturnType<typeof logOutSuccess>
    | ReturnType<typeof logOutFailure>

export type TokenT = {
    tokenType: string;
    expiresAt: string;
    accessToken: string;
    refreshToken: string;
    scopes: [];
}
type AuthStateT = {
    isSubmitting: boolean;
    currentUser: object | null;
    error: Error | null;
}
export type User = {
    name: string;
    email: string;
}

//actions
export type Credentials = {
    email: string;
    password: string;
}

export const logIn = (credentials: Credentials) => {
    return {
        type: 'LOGIN',
        payload: credentials,
    } as const;
}

export const logInSuccess = (user: any) => {
    return {
        type: 'LOGIN-SUCCESS',
        payload: user
    } as const
}
export const logInFailure = (error: any) => {
    return {
        type: 'LOGIN-FAILURE',
        payload: error
    } as const
}
export const logOut = () => {
    return {
        type: 'LOGOUT'
    } as const
}
export const logOutSuccess = (data: { success: boolean }) => {
    return {
        type: 'LOGOUT-SUCCESS',
        payload: data,
    } as const
}
export const logOutFailure = (error: Error | null) => {
    return {
        type: 'LOGOUT-FAILURE',
        payload: error
    } as const
}

//thunks
export const logInTC = (email: string, password: string) => {
    return async (dispatch: any) => {
        try {
            const user = await api.logIn(email, password)
            dispatch(logInSuccess(user))
            localStorage.setItem('token', JSON.stringify(user));
        } catch (error) {
            dispatch(logOutFailure(error))
            localStorage.removeItem('token');
        }
    }
}

export const logOutTC = () => {
    return async (dispatch: any) => {
        try {
            const response = await api.logOut()
            dispatch(logOutSuccess(response.data))
            localStorage.removeItem('token');
        } catch (error) {
            dispatch(logOutFailure(error))
        }
    }
}

export default authReducer
