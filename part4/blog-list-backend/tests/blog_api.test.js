const assert = require('node:assert')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../model/blog')
const { initialBlogs, newBlog, newBlogWithoutLikes } = require('./api_helper')

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

it('API id param', async () => {
    const blogs = (await api.get('/api/blogs')).body
    blogs.forEach(blog => {
        assert(Object.hasOwn(blog, 'id'))
    })
})

it('API Check insertion', async () => {
    const response = await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
    const savedBlog = response.body
    const blogs = (await api.get('/api/blogs')).body
    assert(blogs.length === initialBlogs.length + 1)

    const foundBlogs = blogs.filter(blog => blog.id === savedBlog.id)
    assert(foundBlogs.length === 1)
    assert.deepEqual(foundBlogs[0], savedBlog)
})

it.only('API Check 0 likes default', async () => {
    const response = await api
        .post('/api/blogs')
        .send(newBlogWithoutLikes)
        .expect(201)
    const savedBlog = response.body
    const blogs = (await api.get('/api/blogs')).body

    const foundBlog = blogs.filter(blog => blog.id === savedBlog.id)[0]
    assert(foundBlog.likes === 0)
})


afterAll(async () => {
    await mongoose.connection.close()
})