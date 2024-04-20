const initialBlogs = [
    {
        'title': 'Completing Full Stack Open Part 1', 'author': 'Om', 'url': 'twitch.tv/newbiesan', 'likes': 1
    },
    {
        'title': 'Completing Full Stack Open Part 2', 'author': 'Om', 'url': 'twitch.tv/newbiesan', 'likes': 1
    },
    {
        'title': 'Completing Full Stack Open Part 3', 'author': 'Om2', 'url': 'twitch.tv/newbiesan', 'likes': 1
    },
    {
        'title': 'Completing Full Stack Open Part 4', 'author': 'Om3', 'url': 'twitch.tv/newbiesan', 'likes': 1
    }
]

const newBlog =
{
    'title': 'Completing Full Stack Open Part 5', 'author': 'Om5', 'url': 'twitch.tv/newbiesan', 'likes': 1
}

const newBlogWithoutLikes =
{
    'title': 'Completing Full Stack Open Part 6', 'author': 'Om6', 'url': 'twitch.tv/newbiesan'
}

const newBlogWithoutTitle =
{
    'author': 'Om6', 'url': 'twitch.tv/newbiesan'
}

const newBlogWithoutURL =
{
    'title': 'Completing Full Stack Open Part 8', 'author': 'Om6'
}
module.exports = { initialBlogs, newBlog, newBlogWithoutLikes, newBlogWithoutTitle, newBlogWithoutURL }