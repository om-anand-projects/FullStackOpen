require('dotenv').config()

const mongoUrl = process.env.NODE_ENV === 'test' ? process.env.TEST_MONGO_URI : process.env.MONGO_URI
const PORT = process.env.PORT || 3003

module.exports = {
    mongoUrl, PORT
}