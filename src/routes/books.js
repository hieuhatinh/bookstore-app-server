import express from 'express'

import { booksController } from '../controllers/index.js'

const routerBooks = express.Router()

// get all book
routerBooks.get('/all', booksController.getAllBooks)

// get books by type of book
routerBooks.get('/:type', booksController.getBooksByType)

// insert book
routerBooks.post('/insert', booksController.insertBook)

// search books
routerBooks.post('/search', booksController.searchBook)

// generate books
// routerBooks.post('/generate', booksController.generateFakerBooks)

export default routerBooks
