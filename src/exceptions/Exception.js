import { OutputType, print } from '../helpers/print.js'

class Exception extends Error {
    static WRONG_DB_USER_PASSWORD = 'Wrong username or password connect db'
    static CONNOT_CONNECT_DB = 'Cannot connect to database'
    static USER_EXIT = 'User already exited'
    static INVALID_EMAIL_PASWORD = 'Invalid email or password'

    constructor(message) {
        super(message)
        print(message, OutputType.ERROR)
    }
}

export default Exception
