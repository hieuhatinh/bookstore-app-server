import HttpStatusCode from '../exceptions/HttpStatusCode.js'
import { bookRepositories } from '../repositotires/index.js'

/**
 * @description: get book by id
 * @method get
 * @route /book/:id
 * @returns book
 */
const getDetailBook = async (req, res) => {
    const { id } = req.params

    try {
        const book = await bookRepositories.getDetailBook({ id })

        return res.status(HttpStatusCode.OK).json({
            message: 'Get book successfully',
            data: book,
        })
    } catch (error) {
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: error.message,
        })
    }
}

/**
 * @description: Add book to cart
 * @method post
 * @route /book/:idUser/:id
 * @returns booksByType
 */
const addBookToCart = async (req, res) => {
    const { idUser, idBook } = req.params
    const { quantity } = req.body

    try {
        const data = await bookRepositories.addBookToCart({
            idUser,
            idBook,
            quantity,
        })

        return res.status(HttpStatusCode.OK).json({
            message: 'add book to cart successfully',
            data,
        })
    } catch (error) {
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: error.message,
        })
    }
}

export default {
    getDetailBook,
    addBookToCart,
}
