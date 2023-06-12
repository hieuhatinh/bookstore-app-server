import mongoose from 'mongoose'

const Schema = mongoose.Schema

const cartSchema = new Schema({
    idBook: {
        type: Schema.Types.ObjectId,
        ref: 'books',
        required: true,
    },
    idUser: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
})

const CartModel = mongoose.model('carts', cartSchema)

export default CartModel
