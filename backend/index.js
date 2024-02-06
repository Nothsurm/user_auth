import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const port = process.env.VITE_PORT

const app = express()

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})