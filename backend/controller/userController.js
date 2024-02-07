import User from "../models/userModel.js"
import { errorHandler } from "../middleware/error.js"
import bcryptjs from 'bcryptjs'

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        next(errorHandler(400, 'All fields are required'))
    }

    if (username.length < 5) {
        next(errorHandler(400, 'Username needs to be at least 5 characters long'))
    }

    if (password.length < 5) {
        next(errorHandler(400, 'Password needs to be at least 5 characters long'))
    }

    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({
        username,
        email,
        password: hashedPassword
    })
    
    try {
        await newUser.save()
        res.json('Signup successfull')
    } catch (error) {
        next(error)
    }
}