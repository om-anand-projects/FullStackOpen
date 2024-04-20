const assert = require('node:assert')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../model/blog')
const { initialBlogs } = require('./api_helper')

const api = supertest(app)

beforeEach(async () => {
    await Blog.deleteMany({})
    await Blog.insertMany(initialBlogs)
})


it('API correct number of blogs', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
})

it.only('API id param', async () => {
    const blogs = (await api.get('/api/blogs')).body
    blogs.forEach( blog => {
        assert(Object.hasOwn(blog,'id'))
    })
})

afterAll(async () => {
    await mongoose.connection.close()
})