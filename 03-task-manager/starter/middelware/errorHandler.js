const { CustomAPIError } = require('../db/customError')

const errorHandler = (error, req, res, next) => {
    if (error instanceof CustomAPIError) {
        return res.status(error.statusCode).json({ error: error.message })
    }
    return res.status(500).json({ error })
}

module.exports = errorHandler