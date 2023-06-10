import { faker } from '@faker-js/faker'

import { BookModel } from '../models/index.js'
import Exception from '../exceptions/Exception.js'
import { SIZE_LIMIT } from '../Global/constants.js'

/**
 * @description: get books by type of book
 * @method get
 * @route /book/:type
 * @returns booksByType
 */
const getBooksByType = async ({ type, _page }) => {
    _page = parseInt(_page) || 1
    let skip = (_page - 1) * SIZE_LIMIT
    const books = await BookModel.find({ type: type })
        .skip(skip)
        .limit(SIZE_LIMIT)
        .exec()

    return books
}

/**
 * @description: get all books
 * @method get
 * @route /book/all
 * @returns books
 */
const getAllBooks = async ({ _page }) => {
    _page = parseInt(_page) || 1
    let skip = (_page - 1) * SIZE_LIMIT
    const books = await BookModel.find().skip(skip).limit(SIZE_LIMIT).exec()

    if (!books) {
        throw new Exception(Exception.CANNOT_GET_DATA)
    }

    return books
}

/**
 * @description: insert book
 * @method post
 * @route /book/insert
 * @returns book
 */
const insertBook = async () => {}

/**
 * @description: search book
 * @method post
 * @route /book/search
 * @returns books
 */
const searchBook = async ({ _page, searchString }) => {
    _page = parseInt(_page)
    let skip = (_page - 1) * SIZE_LIMIT

    let filteredBook = await BookModel.aggregate([
        {
            $match: {
                $or: [
                    {
                        name: {
                            $regex: `.*${searchString}.*`,
                            $options: 'i', // ignore case
                        },
                    },
                    {
                        author: {
                            $regex: `.*${searchString}.*`,
                            $options: 'i', // ignore case
                        },
                    },
                ],
            },
        },
        {
            $skip: skip,
        },
        {
            $limit: SIZE_LIMIT,
        },
    ])

    return filteredBook
}

/**
 * @description: fake information books
 * @method post
 * @route /book/generate
 * @returns message
 */
// const generateFakerBooks = async () => {
//     console.log(faker.company.name())
//     let books = []
//     for (let i = 0; i < 1000; i++) {
//         let fakerBook = {
//             author: `${faker.person.fullName()}-fake`,
//             description: faker.lorem.paragraphs(),
//             img: faker.image.urlPicsumPhotos(),
//             issuingCompany: faker.company.name(),
//             name: faker.word.words({ count: { min: 10, max: 30 } }),
//             numberOfPages: faker.number.int({ min: 150, max: 400 }),
//             price: faker.number.float({ min: 100000, max: 500000 }),
//             publishingCompany: faker.helpers.arrayElement([
//                 '1980 books',
//                 'kim đồng',
//             ]),
//             size: faker.helpers.arrayElement(['13x15cm', '12x17cm']),
//             type: faker.helpers.arrayElement([
//                 'comic',
//                 'domestic_literature',
//                 'economy',
//                 'education_psychology',
//                 'foreign_literature',
//                 'history_geography',
//                 'philosophy',
//                 'religion',
//                 'science',
//             ]),
//         }
//         books.push(fakerBook)
//     }
//     await BookModel.insertMany(books)
//     console.log('generate books')
// }

export default {
    getBooksByType,
    getAllBooks,
    insertBook,
    searchBook,
    // generateFakerBooks,
}
