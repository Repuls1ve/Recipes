import {Request, Response, NextFunction} from 'express'

import userDto from '../dtos/user-dto'
import {IAuthBody, IUser} from '../types'

import userService from '../services/user-service'
import tokenService from '../services/token-service'

class AuthController {
    async register(req: Request<{}, {}, IAuthBody>, res: Response, next: NextFunction): Promise<void> {
        try {
            const {email, password} = req.body
            const userAuth = await userService.register(email, password)
            res.json(userAuth)
        } catch (err) {
            next(err)
        }
    }
    
    async login(req: Request<{}, {}, IAuthBody>, res: Response, next: NextFunction): Promise<void> {
        try {
            const {email, password} = req.body
            const userAuth = await userService.login(email, password)
            res.json(userAuth)
        } catch (err) {
            next(err)
        }
    }

    async refresh(req: Request<{}, {}, {token: string}>, res: Response, next: NextFunction): Promise<void> {
        try {
            const {token} = req.body
            const userAuth = await userService.refresh(token)
            res.json(userAuth)
        } catch (err) {
            next(err)
        }
    }
}

export default new AuthController()