export type role = 'user' | 'moderator' | 'admin' 

export interface IUser {
    email: string
    roles: role[]
}

export interface IAuth {
    user: IUser
    token: string
}