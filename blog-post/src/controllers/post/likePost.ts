import { User, Post } from '@models/index'
import { TLikePost } from '@utils/types'

export const likePost: TLikePost = async (body) => {
    const { _id, user } = body
    const postExist = await Post.findById(_id)
    const existingUser = await User.findById(user)

    if (!postExist || !existingUser) {
        throw new Error("Post or User doesn't exist.")
    }

    const alreadyLiked = postExist.likes.includes(user)
    console.log(alreadyLiked)

    if (alreadyLiked) {
        await Post.findByIdAndUpdate(_id, { $pull: { likes: user } })
        console.log('disliked')

        return { like: false }
    } else {
        await Post.findByIdAndUpdate(_id, { $addToSet: { likes: user } })
        console.log('liked')

        return { like: true }
    }
}
