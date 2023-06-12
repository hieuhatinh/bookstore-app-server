import { CartModel, BookModel, UserModel } from '../models/index.js'
import Exception from '../exceptions/Exception.js'

/**
 * @description: get book by id
 * @method get
 * @route /book/:id
 * @returns book
 */
const getDetailBook = async ({ id }) => {
    const book = await BookModel.findById(id).exec()

    if (!book) {
        throw new Exception(Exception.BOOK_NOT_EXIST)
    }

    return book
}

/**
 * @description: Add book to cart
 * @method post
 * @route /book/:idUser/:idBook
 * @returns booksByType
 */
const addBookToCart = async ({ idUser, idBook, quantity }) => {
    const userExist = await UserModel.findOne({ _id: idUser }).exec()

    if (!!userExist) {
        const book = await BookModel.findOne({ _id: idBook }).exec()

        if (!!book) {
            const data = await CartModel.findOne({ idUser, idBook }).exec()

            if (!!data) {
                throw new Exception(Exception.BOOK_ALREADY_EXIST)
            }

            const newProduct = await CartModel.create({
                idBook,
                idUser,
                quantity,
            })

            return newProduct
        } else {
            throw new Exception(Exception.BOOK_NOT_EXIST)
        }
    } else {
        throw new Exception(Exception.USER_NOT_EXIT)
    }
}

export default {
    getDetailBook,
    addBookToCart,
}
