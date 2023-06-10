import { userRepositories } from '../repositotires/index.js'
import HttpStatusCode from '../exceptions/HttpStatusCode.js'

const login = async (req, res) => {
    try {
        const data = await userRepositories.login(req.body)

        return res.status(HttpStatusCode.OK).json({
            message: 'login successfully',
            data: data,
        })
    } catch (exception) {
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: exception.toString(),
        })
    }
}

const register = async (req, res) => {
    const { email, password, fullName } = req.body
    try {
        const data = await userRepositories.register({
            email,
            password,
            fullName,
        })

        return res.status(HttpStatusCode.OK).json({
            message: 'register successfully',
            data,
        })
    } catch (exception) {
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: exception.toString(),
        })
    }
}

const update = async (req, res) => {
    const { email, password, fullName } = req.body

    try {
        const data = await userRepositories.update({
            email,
            password,
            fullName,
        })

        return res.status(HttpStatusCode.OK).json({
            message: 'Update successfully',
            data,
        })
    } catch (exception) {
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: exception.message,
        })
    }
}

export default { login, register, update }
