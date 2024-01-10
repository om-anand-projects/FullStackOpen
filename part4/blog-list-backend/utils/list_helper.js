var collection = require('lodash/collection')

// eslint-disable-next-line no-unused-vars
const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const sumLikesReducer = (sum, item) => {
        return sum + item['likes']
    }

    return blogs.reduce(sumLikesReducer, 0)
}

const favoriteBlog = (blogs) => {
    if (!blogs)
        return null

    let mostLikedBlog = {
        title: null,
        author: null,
        likes: -1
    }

    blogs.forEach(blog => {
        if (blog['likes'] > mostLikedBlog['likes']) {
            mostLikedBlog['likes'] = blog['likes']
            mostLikedBlog['author'] = blog['author']
            mostLikedBlog['title'] = blog['title']
        }
    })

    return mostLikedBlog
}

const mostBlogs = (blogs) => {
    if (!blogs)
        return null

    const authors = collection.countBy(blogs, (blog) => blog['author'])
    let authorWithMostBlogs = {
        author: null,
        blogs: 0
    }

    collection.forEach(authors, (authorBlogCount, author) => {
        if (authorBlogCount > authorWithMostBlogs['blogs']) {
            authorWithMostBlogs['author'] = author
            authorWithMostBlogs['blogs'] = authorBlogCount
        }
    })
    return authorWithMostBlogs
}

const mostLikes = (blogs) => {
    if (!blogs)
        return null

    const authors = collection.groupBy(blogs, (blog) => blog['author'])
    let authorWithMostLikes = {
        author: null,
        likes: 0
    }
    collection.forEach(authors, (authorsBlogs, author) => {
        const authorLikes = collection.reduce(authorsBlogs, (sum, blog) => sum + blog['likes'], 0)
        if (authorWithMostLikes['likes'] < authorLikes) {
            authorWithMostLikes['author'] = author
            authorWithMostLikes['likes'] = authorLikes
        }
    })
    return authorWithMostLikes
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}