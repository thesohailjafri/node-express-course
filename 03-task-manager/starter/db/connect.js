const mongoose = require('mongoose')

const mongo = 'mongodb+srv://thesohailjafri:NYF2N5e5XnsyFU3@cluster.ef8iu.mongodb.net/03-task-manager?retryWrites=true&w=majority'

const connectMongo = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
}

module.exports = connectMongo
