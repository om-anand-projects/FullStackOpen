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

    const mostLikedBlog = {
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

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}