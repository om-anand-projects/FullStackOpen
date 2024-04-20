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

afterAll(async () => {
    await mongoose.connection.close()
})