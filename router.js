const Authentication = require('./controllers/authentication');
const Posts = require('./controllers/posts');

module.exports = function(app) {
    app.post('/signup', Authentication.signup);

    app.get('/posts/:id', Posts.fetchPost);

    app.post('/posts', Posts.createPost);

    app.get('/posts', Posts.fetchPosts);

    app.delete('/posts/:id', Posts.deletePost);
}

