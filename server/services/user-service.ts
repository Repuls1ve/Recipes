import bcrypt from 'bcrypt'

import {IUser, IAuth} from '../types'
import User from '../models/user-model'
import userDto from '../dtos/user-dto'

import Exception from '../exceptions/api-exception'

import tokenService from './token-service'

class UserService {
    async register(email: IUser['email'], password: IUser['password']): Promise<IAuth> {
        const candidate = await User.findOne({email})
        if (candidate) {
            throw Exception.Forbidden('User with this email already exists')
        }
        const passwordHash = await bcrypt.hash(password, 12)
        const user = await User.create({email, password: passwordHash})
        const userData = userDto(user)
        const token = tokenService.createToken(userData)
        return {user: userData, token}
    }

    async login(email: string, password: string): Promise<IAuth> {
        const user = await User.findOne({email})
        if (!user) {
            throw Exception.Forbidden('User with this email does not exist')
        }
        const isPasswordEquals = await bcrypt.compare(password, user.password)
        if (!isPasswordEquals) {
            throw Exception.Forbidden('Incorrect password')
        }
        const userData = userDto(user)
        const token = tokenService.createToken(userData)
        return {user: userData, token}
    }

    async refresh(token: string): Promise<IAuth> {
        const decoded = tokenService.verifyToken(token)
        const userData = userDto(decoded as IUser)
        const newToken = tokenService.createToken(userData)
        return {
            user: userData,
            token: newToken
        }
    }
}

export default new UserService()