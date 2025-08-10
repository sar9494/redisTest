import z from 'zod'

export const userLoginRequestSchema = z.object({
    email: z.email(),
    password: z.string().min(8),
})

export type LoginRequest = z.infer<typeof userLoginRequestSchema>

export const postControllerInputSchema = z.object({
    title: z.string(),
    description: z.string(),
    user: z.string(),
    token: z.string(),
})
export type CreatePostRequest = z.infer<typeof postControllerInputSchema>

export const likePostValuesSchema = z.object({
    _id: z.string(),
    user: z.string(),
    token: z.string(),
})

export type LikePostRequest = z.infer<typeof likePostValuesSchema>

export const addNumbers = (num1: number, numb2: number): number => {
    return num1 + numb2
}

export type TCreateUser = (body: LoginRequest) => Promise<boolean>

export type TLoginHandler = (
    body: LoginRequest
) => Promise<{ success: boolean; data: string }>

export type TCreatePost = (
    body: CreatePostRequest
) => Promise<{ success: boolean }>

export type TLikePost = (body: LikePostRequest) => Promise<{ like: boolean }>
// export type LoginHandler = (
//   req: Request<{}, {}, LoginRequest>,
//   res: Response
// ) => Promise<Response>;
