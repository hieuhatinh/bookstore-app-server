import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: false,
    },
})

const UserModel = mongoose.model('users', userSchema)

export default UserModel
