import {IUser, IUserDto} from '../types'

const userDto = (user: IUser): IUserDto => {
    return {
        email: user.email,
        roles: user.roles
    }
}

export default userDto