import axios from 'axios'
import {TokenT} from '../redux/auth-reducer/auth-reducer'

const instance = axios.create({
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
        console.log('access_token', access_token);

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
        return instance.post('/auth/user',
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

// export async function signIn({ email, password }: Credentials) {
//     const response = await instance.post(
//         '/auth/user',
//         JSON.stringify({ email, password, clientId: 1 }),
//     );
//     return response.data.data;
// }
//
// export async function logOut(): Promise<{ success: boolean }> {
//     const response = await instance.post('/tager/user/profile/logout');
//     return response.data.data;
// }
//
// export async function getUserProfile(): Promise<{ name: string; email: string }> {
//     const response = await instance.get('/tager/user/profile');
//     return response.data.data;
// }
