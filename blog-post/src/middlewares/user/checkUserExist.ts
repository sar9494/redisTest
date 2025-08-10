import { IUser, User } from '@models/user'
import { customError } from '@utils/createCustomError'
import { NextFunction, Request, Response } from 'express'

export const checkUserExist = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const input = req.body as unknown as Partial<IUser>
        const existingUser = await User.findOne(input).lean()
        if (existingUser) {
            next()
        } else {
            throw new customError('User not found', 404)
        }
    } catch (error) {
        next(error)
    }
}
