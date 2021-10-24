require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()


const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// middleware
app.use(express.json())


//routes
app.use('/api/v1/store', productsRouter)


//end-middelware
app.use(notFoundMiddleware)
app.use(errorMiddleware)

//server setup
const port = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`Server is listening port ${port}...`))
    } catch (error) {
        console.log({ error })
    }
}
start()
