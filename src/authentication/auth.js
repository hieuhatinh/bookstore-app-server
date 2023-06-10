import jwt from 'jsonwebtoken'
import HttpStatusCode from '../exceptions/HttpStatusCode.js'

function checkToken(req, res, next) {
    const token = req.headers?.authorization?.split(' ')[1]

    try {
        const tokenVerify = jwt.verify(token, process.env.JWT_SECRET)
        const isExpired = tokenVerify.exp * 1000 < Date.now()

        if (isExpired) {
            return res.status(HttpStatusCode.OK).json({
                message: 'Token expired',
            })
        } else {
            next()
        }
    } catch (error) {
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: error.message,
        })
    }
}

export { checkToken }
