import {AxiosResponse} from 'axios'
import $api from '../http'

import AuthResponse from '../types/responses/auth-response'
import {IUser} from '../types/user'

class AuthService {
    static async login(email: IUser['email'], password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post('/login', {email, password})
    }

    static async register(email: IUser['email'], password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post('/register', {email, password})
    }

    static async refresh(token: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post('/refresh', {token})
    }
}

export default AuthService