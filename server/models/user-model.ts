import {Schema, model} from 'mongoose' 

import {IUser} from '../types'

const userSchema = new Schema<IUser>({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: [],
        default: ['user']
    }
})

const User = model('User', userSchema)

export default User