const Posts = require('../models/post');

// [GET] posts
exports.fetchPosts = function(req, res, next) {
    Posts.find({}, function(err, posts) {
        if(err){return next(err)}
        res.send(posts);
    })
}

// [POST] posts
exports.createPost = function(req, res, next) {
    const title = req.body.title;
    const text = req.body.text;
    const tags = req.body.tags

    Posts.findOne({title:title}, function(err, existedPost){
        if(err){return next(err);}

        if(existedPost) {return res.status(422).send({error: 'Post title must be unique!'})}

        const post = new Posts({
            title: title,
            text: text,
            tags: tags
        });

        post.save(function(err){
            if(err){return next(err)}

            res.send({success: true});
        });

    });
}

// [GET] posts/:id
exports.fetchPost = function(req, res, next) {
    const id = req.params.id;

    Posts.findOne({_id: id}, function(err, existedPost){
        if(err){return next(err)}

        if(!existedPost){
            res.status(422).send({error: 'Post not found!'});
        }

        res.send(existedPost)
    })
}

// [DELETE] posts/id
exports.deletePost = function(req, res, next) {
    const id = req.params.id;

    Posts.remove({_id:id}, function(err, existedPost){
        if(err){return next(err)}

        if(!existedPost){
            res.status(422).send({error: 'Post not found!'});
        }

        res.send({success: true});
    })
}