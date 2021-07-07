import {User} from '../auth-reducer/auth-reducer'

const initialState: ProfileStateT = {
    loading: false,
    user: null,
    error: null,
}

const profileReducer = (state = initialState, action: ProfileActionTypes) => {
    switch (action.type) {
        case 'GET-PROFILE': {
            return {
                ...state,
                loading: false,
                user: null,
                error: null,
            }
        }
        case 'GET-PROFILE-SUCCESS': {
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        }

        case 'GET-PROFILE-FAILURE': {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        default:
            return state
    }
}
//types
type ProfileActionTypes = ReturnType<typeof getProfile>
    | ReturnType<typeof getProfileSuccess>
    | ReturnType<typeof getProfileFailure>

type ProfileStateT = {
    loading: boolean,
    user: User | null,
    error: Error | null,
}

//actions

export const getProfile = () => {
    return {
        type: 'GET-PROFILE'
    } as const
}

export const getProfileSuccess = (user: User | null) => {
    return {
        type: 'GET-PROFILE-SUCCESS',
        payload: user
    } as const
}
export const getProfileFailure = (error: Error | null) => {
    return {
        type: 'GET-PROFILE-FAILURE',
        payload: error,
    } as const
}

export default profileReducer