import express from 'express'
import { createPost, likePost } from '@controllers/index'
import { auth } from '@middlewares/user'

export const postRouter = express.Router()

postRouter.post('/newPost', auth, createPost)
postRouter.post('/likePost', auth, likePost)
