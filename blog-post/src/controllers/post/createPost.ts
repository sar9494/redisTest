import { User, Post } from '@models/index'
import { TCreatePost } from '@utils/index'

export const createPost: TCreatePost = async (body) => {
    const { title, description, user } = body

    const existingUser = await User.findById(user).lean()
    if (!existingUser) {
        throw new Error("User doesn't exist")
    }

    const newPost = await Post.create({ title, description, user })

    await User.updateOne({ _id: user }, { $addToSet: { posts: newPost._id } })

    return { success: true }
}
