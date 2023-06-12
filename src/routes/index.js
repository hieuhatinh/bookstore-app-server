import userRouter from './user.js'
import bookRouter from './book.js'
import booksRouter from './books.js'
import cartRouter from './cart.js'

function routes(app) {
    app.use('/user', userRouter)
    app.use('/books', booksRouter) // many books
    app.use('/book', bookRouter) // one book
    app.use('/cart', cartRouter)
}

export default routes
