const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://om:${password}@cluster0.brlu3fd.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
    person: String,
    number: String,
})

const Person = mongoose.model('persons', personSchema)

if (process.argv.length == 3) {
    Person.find({}).then(
        result => {
            console.log('Phonebook:')
            result.map(record => {
                console.log(`${record.person} ${record.number}`)
            })
            mongoose.connection.close()          
        }
    )
}
else if (process.argv.length == 5) {
    const person = new Person({
    person: process.argv[3],
    number: process.argv[4],
    })

    person.save().then(result => {
    console.log('person saved!')
    mongoose.connection.close()
    })
}