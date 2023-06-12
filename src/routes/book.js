import express from 'express'

import { bookController } from '../controllers/index.js'
import { checkToken } from '../authentication/auth.js'

const routerBook = express.Router()

// get detail book
routerBook.get('/:id', bookController.getDetailBook)

// add book to cart
routerBook.post('/:idUser/:idBook', checkToken, bookController.addBookToCart)

export default routerBook
