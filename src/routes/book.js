import express from 'express'

import { bookController } from '../controllers/index.js'

const routerBook = express.Router()

// get detail book
routerBook.get('/:id', bookController.getDetailBook)

export default routerBook
