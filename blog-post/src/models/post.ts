import { Model, model, models, Schema } from 'mongoose'

export interface IPost<T> {
    title: T
    description: T
    user: T
    likes: Array<T>
}

const PostSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        user: {
            type: Schema.Types.ObjectId,
            required: true,
            unique: true,
            ref: 'Users',
        },
        likes: [
            {
                type: Schema.Types.ObjectId,
            },
        ],
    },
    { timestamps: true }
)

export const Post =
    (models.Posts as unknown as Model<IPost<string>>) ||
    model<IPost<string>>('Posts', PostSchema)
