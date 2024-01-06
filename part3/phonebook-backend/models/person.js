const mongoose = require('mongoose')

const url = process.env.MONGO_URI

mongoose.connect(url).then(
    result => console.log('MongoDB connected!')
).catch(
    error => console.log(`Mongo connection error ${error}`)
)

const personSchema = new mongoose.Schema({
    id: String,
    name: {
      type: String,
      minLength: 3,
      required: true
    },
    number: String,
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

module.exports = mongoose.model('persons', personSchema)