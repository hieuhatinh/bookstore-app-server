import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { print, OutputType } from '../helpers/print.js'
import { UserModel } from '../models/index.js'
import Exception from '../exceptions/Exception.js'

const login = async ({ email, password }) => {
    const user = await UserModel.findOne({ email }).exec()

    if (user) {
        const match = await bcrypt.compare(password, user.password)
        if (match) {
            const token = jwt.sign(
                {
                    data: user,
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: '24h',
                }
            )
            return {
                ...user.toObject(),
                token,
                password: 'Not show',
            }
        } else {
            throw new Exception(Exception.INVALID_EMAIL_PASWORD)
        }
    } else {
        throw new Exception(Exception.INVALID_EMAIL_PASWORD)
    }

    // print('login user in user repositories', OutputType.INFORMATION)
}

const register = async ({ email, password, fullName }) => {
    const user = await UserModel.findOne({ email }).exec()

    if (!!user) {
        throw new Exception(Exception.USER_EXIT)
    }

    const hashPassword = await bcrypt.hash(
        password,
        parseInt(process.env.SALT_ROUNDS)
    )

    // insert to db
    const newUser = await UserModel.create({
        email,
        password: hashPassword,
        fullName,
    })

    return {
        ...newUser._doc,
        password: 'Not show',
    }

    // print('register user in user repositories', OutputType.INFORMATION)
}

const update = async ({ email, password, fullName }) => {
    const hashPassword = await bcrypt.hash(
        password,
        parseInt(process.env.SALT_ROUNDS)
    )
    const user = await UserModel.findOneAndUpdate(
        { email },
        { password: hashPassword, fullName },
        { new: true }
    )

    return user
}

export default { login, register, update }
