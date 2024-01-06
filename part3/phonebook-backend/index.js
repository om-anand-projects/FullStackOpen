require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')
morgan.token('data', function (request, response) { return JSON.stringify(request.body) })

const app = express()
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))
app.use(cors())
app.use(express.static('build'))

let persons = [
  {
    "id": 1,
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": 2,
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": 3,
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": 4,
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  }
]

app.get('/api/persons', (request, response) => {
  Person.find({}).then(
    result => response.json(result)
  )
})

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then(person => {
    if (person)
      response.json(person)
    else
      response.status(404).end()
  }).catch(error => {
    console.log(error)
    response.status(500).end()
  })
})

app.delete('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then(person => {
    if (person)
      Person.findByIdAndDelete(request.params.id).then(
        script => {
          response.status(204).end()
        })
    else
      response.status(404).end()
  })
})

app.post('/api/persons', (request, response) => {
  if (!(request.body.name && request.body.number)) {
    return response.status(400).json({
      error: 'The name or number is missing'
    })
  }

  Person.findOne({ 'name': request.body.name }).then(result => {
    if (result) {
      console.log("Found duplicate")
      return response.status(400).json({
        error: 'The name already exists in the phonebook'
      })
    }
    const newPerson = new Person({
      name: request.body.name,
      number: request.body.number
    })
    newPerson.save().then(
      result => {
        return response.json(result)
      })
  })
})

app.get('/info', (request, response) => {
  let body = ''
  body = body.concat(`<div>Phonebook has info for ${persons.length} people</div>`)
  body = body.concat('<br/>')
  body = body.concat(`<div>${new Date()}</div>`)
  // console.log(body)
  response.send(body)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})