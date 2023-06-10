import HttpStatusCode from '../exceptions/HttpStatusCode.js'
import { booksRepositories } from '../repositotires/index.js'

/**
 * @description: get books by type of book
 * @method get
 * @route /book/:type
 * @returns booksByType
 */
const getBooksByType = async (req, res) => {
    const { type } = req.params
    const { _page } = req.query

    try {
        const booksByType = await booksRepositories.getBooksByType({
            type,
            _page,
        })

        return res.status(HttpStatusCode.OK).json({
            message: 'Get book successfully',
            data: booksByType,
        })
    } catch (error) {
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: error.message,
        })
    }
}

/**
 * @description: get all books
 * @method get
 * @route /book/all
 * @returns books
 */
const getAllBooks = async (req, res) => {
    const { _page } = req.query

    try {
        const books = await booksRepositories.getAllBooks({ _page })

        return res.status(HttpStatusCode.OK).json({
            message: 'Get all books successfully',
            data: books,
        })
    } catch (exception) {
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: exception.toString(),
        })
    }
}

/**
 * @description: insert book
 * @method post
 * @route /book/insert
 * @returns book
 */
const insertBook = async (req, res) => {}

/**
 * @description: fake information books
 * @method post
 * @route /book/generate
 * @returns message
 */
// const generateFakerBooks = async (req, res) => {
//     await booksRepositories.generateFakerBooks()
//     res.status(HttpStatusCode.INSERT_OK).json({
//         message: 'generate faker books successfully',
//     })
// }

/**
 * @description: search book
 * @method post
 * @route /book/search
 * @returns books
 */
const searchBook = async (req, res) => {
    const { _page = 1, searchString = '' } = req.query

    try {
        const books = await booksRepositories.searchBook({
            _page,
            searchString,
        })

        return res.status(HttpStatusCode.OK).json({
            message: 'Search book successfully',
            _page: _page,
            data: books,
        })
    } catch (error) {
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: error.toString(),
        })
    }
}

export default {
    getBooksByType,
    getAllBooks,
    insertBook,
    searchBook,
    // generateFakerBooks,
}
