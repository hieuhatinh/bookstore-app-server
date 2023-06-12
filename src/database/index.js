import mongoose from 'mongoose'

import Exception from '../exceptions/Exception.js'
import { print, OutputType } from '../helpers/print.js'

mongoose.set('strictQuery', true)

async function connect() {
    try {
        let connection = await mongoose.connect(process.env.MONGO_URI)

        print('connect mongoose successfully', OutputType.SUCCESS)
        return connection
    } catch (error) {
        throw new Exception(Exception.CANNOT_CONNECT_DB)
    }
}

export default connect
