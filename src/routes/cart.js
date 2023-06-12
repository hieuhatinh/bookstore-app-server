import express from 'express'

import { cartController } from '../controllers/index.js'
import { checkToken } from '../authentication/auth.js'

const cartRouter = express.Router()

// get all the books in the cart for the respective user
cartRouter.get('/:idUser', checkToken, cartController.getBooks)

// update quantity book
cartRouter.patch('/:idUser/:id', checkToken, cartController.updateQuantityBook)

// delete book from cart
cartRouter.delete('/:idUser/:id', checkToken, cartController.deleteBook)

export default cartRouter
