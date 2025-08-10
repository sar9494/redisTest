import { NextFunction, Request, Response } from 'express'

export const globalErrorHandler = (
    err: Error & { status: number },
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const statusCode = err.status || 500
    const message = err.message || 'Something went wrong'

    res.status(statusCode).json({
        success: false,
        message,
    })
}
