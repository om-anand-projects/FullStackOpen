import axios from 'axios'

const baseUrl = '/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newPersonObject) => {
    const request = axios.post(baseUrl, newPersonObject)
    return request.then(response => response.data)
}

const remove = (id) => axios.delete(`${baseUrl}/${id}`)

const update = (person) => {
    const request = axios.put(`${baseUrl}/${person.id}`, person)
    return request.then(response => response.data)
}
const personService = {
    getAll,
    create,
    remove,
    update
}

export default personService