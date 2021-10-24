const express = require('express')
const app = express()
require('dotenv').config()
const connectMongo = require('./db/connect')
const undefinedRoute = require('./middelware/undefinedRoute')
const errorHandler = require('./middelware/errorHandler')

//middelware
app.use(express.static('./public'))
app.use(express.json())
//routes
const apiURL = '/api/v1'
const tasks = require('./routes/tasks')


app.get('/api/v1', (req, res) => {
    res.status(200).send('have a good day')
}
)

app.use(`${apiURL}/tasks`, tasks)


app.use(undefinedRoute)
app.use(errorHandler)
const port = process.env.PORT || 5000
const start = async () => {
    try {
        await connectMongo(process.env.MONGO_URI)
        app.listen(port, () => console.log(`App running on ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()




console.log('Task Manager App')
