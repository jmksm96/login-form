import axios from 'axios'
import {TokenT} from '../redux/auth-reducer/auth-reducer'

const instance = axios.create({
    baseURL: 'https://tager.dev.ozitag.com/api',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
})


const $commonInstance = axios.create({
    baseURL: 'https://tager.dev.ozitag.com/api',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
})

instance.interceptors.request.use(
    (config) => {
        const token: TokenT = JSON.parse(localStorage.getItem('token') || '{}');
        const access_token: string = token.data.data.accessToken;

        if (token) {
            config.headers['Authorization'] = `Bearer ${access_token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

const api = {
    logIn: (email: string, password: string) => {
        return $commonInstance.post('/auth/user',
            JSON.stringify({email, password, clientId: 1})
        )
    },
    logOut: () => {
        return instance.post('/tager/user/profile/logout')
    },
    getUserProfile: () => {
        return instance.get('/tager/user/profile')
    }
}

export default api
