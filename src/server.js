/**
 * Required External Modules
 */
import express from 'express'
import * as dotenv from 'dotenv'
import morgan from 'morgan'
import bodyParser from 'body-parser'

import routes from './routes/index.js'
import connect from './database/index.js'

dotenv.config()

/**
 * App Variables
 */
if (!process.env.PORT) {
    process.exit(1)
}

const PORT = process.env.PORT

const app = express()

/**
 *  App Configuration
 */
app.use(morgan('combined'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// routes
routes(app)

/**
 * Server Activation
 */

app.listen(PORT, async () => {
    await connect()
    console.log(`Example app listening on port ${PORT}`)
})
