import {IUser} from '../user'

export default interface AuthResponse {
    user: IUser
    token: string
}