import { faker } from '@faker-js/faker'

import { BookModel } from '../models/index.js'
import Exception from '../exceptions/Exception.js'

/**
 * @description: get book by id
 * @method get
 * @route /book/:id
 * @returns book
 */
const getDetailBook = async ({ id }) => {
    const book = await BookModel.findById(id).exec()

    return book
}

export default {
    getDetailBook,
}
