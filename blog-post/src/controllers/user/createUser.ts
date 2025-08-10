import bcrypt from 'bcrypt'
import { TCreateUser } from '@utils/types'
import { User } from '@models/index'

export const createUser: TCreateUser = async (body) => {
    const { email, password } = body
    const hashedPass = bcrypt.hashSync(password, 8)

    await User.create({
        email,
        password: hashedPass,
    })

    return true
}
