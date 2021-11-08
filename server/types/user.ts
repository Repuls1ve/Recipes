import {Document} from 'mongoose'

export type role = 'user' | 'moderator' | 'admin' 

export interface IUser extends Document {
    email: string
    password: string
    roles: role[]
}

export interface IUserDto {
    email: IUser['email']
    roles: IUser['roles']
}

export interface IAuthBody {
    email: IUser['email']
    password: IUser['password']
}

export interface IAuth {
    user: IUserDto,
    token: string
}
