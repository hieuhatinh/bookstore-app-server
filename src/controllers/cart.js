import { cartRepositories } from '../repositotires/index.js'
import HttpStatusCode from '../exceptions/HttpStatusCode.js'

/**
 * @description: get all the books in the cart for the respective user
 * @method get
 * @route /cart/:idUser
 * @returns booksByType
 */
const getBooks = async (req, res) => {
    const { idUser } = req.params

    try {
        const data = await cartRepositories.getBooks({ idUser })

        return res.status(HttpStatusCode.OK).json({
            message: 'get all books in cart successfully',
            data,
        })
    } catch (error) {
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: error.message,
        })
    }
}

/**
 * @description: delete book from cart
 * @method delete
 * @route /cart/:idUser/:id
 * @returns booksByType
 */
const deleteBook = async (req, res) => {
    const { idUser, id } = req.params

    try {
        const data = await cartRepositories.deleteBook({ idUser, id })

        return res.status(HttpStatusCode.OK).json({
            message: 'delete book to cart successfully',
            data,
        })
    } catch (error) {
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: error.message,
        })
    }
}

/**
 * @description: update quantity book
 * @method patch
 * @route /cart/:idUser/:id
 * @returns booksByType
 */
const updateQuantityBook = async (req, res) => {
    const { idUser, id } = req.params
    const { quantity } = req.body

    try {
        const data = await cartRepositories.updateQuantityBook({
            idUser,
            id,
            quantity,
        })

        return res.status(HttpStatusCode.OK).json({
            message: 'delete book to cart successfully',
            data,
        })
    } catch (error) {
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: error.message,
        })
    }
}

export default {
    getBooks,
    deleteBook,
    updateQuantityBook,
}
