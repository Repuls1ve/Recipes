import {ErrorRequestHandler, NextFunction, Request, Response} from 'express'

import Exception from '../exceptions/api-exception'

const errorMiddleware: ErrorRequestHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Exception) {
        return res.status(err.status).json({
            error: 1,
            message: err.message
        })
    }
    return res.status(500).json({
        error: 1,
        message: err.message
    })
}

export default errorMiddleware