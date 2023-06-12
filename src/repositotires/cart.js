import { CartModel } from '../models/index.js'
import Exception from '../exceptions/Exception.js'

/**
 * @description: get all the books in the cart for the respective user
 * @method get
 * @route /cart
 * @returns booksByType
 */
const getBooks = async ({ idUser }) => {
    const books = await CartModel.find({ idUser }).exec()

    return books
}

/**
 * @description: delete book from cart
 * @method delete
 * @route /cart/:idUser/:id
 * @returns booksByType
 */
const deleteBook = async ({ idUser, id }) => {
    const data = await CartModel.findOneAndDelete({ idUser, id }).exec()

    if (!data) {
        throw new Exception(Exception.BOOK_DOES_NOT_EXIST)
    }

    return data
}

/**
 * @description: update quantity book
 * @method patch
 * @route /cart/:idUser/:id
 * @returns booksByType
 */
const updateQuantityBook = async ({ idUser, id, quantity }) => {
    const data = await CartModel.findOneAndUpdate({ idUser, id }, { quantity })

    if (!data) {
        throw new Exception(Exception.BOOK_DOES_NOT_EXIST)
    }

    return data
}

export default {
    getBooks,
    deleteBook,
    updateQuantityBook,
}
