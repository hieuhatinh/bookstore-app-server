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

export default {
    getDetailBook,
}
