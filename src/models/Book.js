import mongoose from 'mongoose'

const Schema = mongoose.Schema

const BookSchema = new Schema({
    author: {
        type: String, 
        required: true
    }, 
    description: {
        type: String , 
        required: false
    }, 
    img: {
        type: String, 
        required: true
    }, 
    issuingCompany: {
        type: String, 
        required: true
    }, 
    name: {
        type: String, 
        required: true
    }, 
    numberOfPages: {
        type: Number, 
        required: true
    }, 
    price: {
        type: Number, 
        required: true
    }, 
    publishingCompany: {
        type: String, 
        required: false
    }, 
    size: {
        type: String, 
        required: false
    }, 
    type: {
        type: String, 
        required: true
    }
})

const BookModel = mongoose.model('books', BookSchema)

export default BookModel