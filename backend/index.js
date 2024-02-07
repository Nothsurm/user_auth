import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoute from './routes/userRoute.js'

dotenv.config()
const port = process.env.VITE_PORT
mongoose.connect(process.env.VITE_DATABASE).then(() => {
    console.log('Connected to Database')
}).catch((err) => {
    console.log(err)
})

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/users', userRoute)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})