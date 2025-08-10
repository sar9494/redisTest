import { User } from '@models/index'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { TLoginHandler } from '@utils/types'

export const login: TLoginHandler = async (body) => {
    const { email, password } = body
    const decodePass = process.env.DECODE_PASS || 'pass'
    const userExist = await User.findOne({ email }).lean()

    const matchPass = await bcrypt.compare(password, userExist!.password)
    if (matchPass) {
        const token = jwt.sign(
            {
                exp: Math.floor(Date.now() / 1000) + 60 * 60,
                id: userExist!._id,
                email: userExist!.email,
            },
            decodePass
        )

        return { success: true, data: token }
    } else {
        return { success: false, data: 'Password or email is wrong.' }
    }
}
