import express, { Request, Response } from 'express'
import { createUser, login } from '@controllers/index'
import { checkUserExist } from '@middlewares/user/checkUserExist'

export const userRouter = express.Router()

userRouter.post(
    '/sign-up',
    checkUserExist,
    async (req: Request, res: Response) => {
        const response = await createUser(req.body)
        console.log('SIGN', response)
        res.send('yep')
    }
)
userRouter.post(
    '/log-in',
    checkUserExist,
    async (req: Request, res: Response) => {
        const response = await login(req.body)
        console.log(response)
        res.send('yep')
    }
)
