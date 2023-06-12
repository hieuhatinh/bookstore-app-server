import { OutputType, print } from '../helpers/print.js'

class Exception extends Error {
    static WRONG_DB_USER_PASSWORD = 'Wrong username or password connect db'
    static CONNOT_CONNECT_DB = 'Cannot connect to database'
    static USER_EXIT = 'User already exited'
    static USER_NOT_EXIT = 'User not exited'
    static INVALID_EMAIL_PASWORD = 'Invalid email or password'
    static CANNOT_GET_DATA = 'Error occurs, cannot get data'
    static BOOK_ALREADY_EXIST = 'The book already exist in cart'
    static BOOK_NOT_EXIST = 'The book not exist'
    static BOOK_DOES_NOT_EXIST = "The book doesn't exist in cart"

    constructor(message) {
        super(message)
        print(message, OutputType.ERROR)
    }
}

export default Exception
