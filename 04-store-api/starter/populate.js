require('dotenv').config()
const express = require('express')
const connectDB = require('./db/connect')
const product = require('./models/product')
const data = require('./products.json')

const start = async () => {
    try {
        console.log('process start')
        await connectDB(process.env.MONGO_URI)
        await product.deleteMany()
        await product.create(data)
        console.log('data added')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()
