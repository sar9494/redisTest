import { Model, model, models, Schema } from 'mongoose'

export interface IUser {
    email: string
    password: string
    posts?: Array<string>
}

const userSchema = new Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        posts: [{ type: Schema.Types.ObjectId, ref: 'Posts' }],
    },
    { timestamps: true }
)

export const User =
    (models.User as unknown as Model<IUser>) ||
    model<IUser>('Users', userSchema)
