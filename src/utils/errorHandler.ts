import { Request, Response, NextFunction } from 'express'
import { HttpError } from 'http-errors'


export function errorHandler(
    error: HttpError,
    req: Request,
    res: Response,
    next: NextFunction) {

    const code = error.status ?? 500
    const message = (code === 500 ? 'Interval Server Error' : (error.message ?? ''))

    return res.status(code).json({
        code,
        message
    })
}