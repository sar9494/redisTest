import 'module-alias/register'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { postRouter, userRouter } from './routes'
import { globalErrorHandler } from '@utils/globalErrorHandler'

const url =
    'mongodb+srv://batbayarsaruul0:YsW9y2xFXfA8dZxg@cluster0.peaidun.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connectDb = async () => {
    try {
        console.log('Connecting to MongoDB...')
        await mongoose.connect(url)
        console.log('Successfully connected')
    } catch (e) {
        console.log('Error occurred', e)
    }
}

const app = express()
const port = 4000

app.use(express.json())
app.use(cors())

app.use('/user', userRouter)
app.use('/post', postRouter)

app.use(globalErrorHandler)

const start = async () => {
    await connectDb()
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

start()
