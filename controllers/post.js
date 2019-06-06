const Post = require('../models/Post');

/**
 * GET /user/:userId/post
 * User's posts page.
 */
exports.index = async (req, res) => {
    var posts;
    await Post.find({user_id:req.params.userId}, (req, res) => {
        posts = res;
    });
    console.log(req.params);
    res.render('posts/index', {
        posts: posts,
        userId: req.params.userId
    });
};

/**
 * POST /post
 * Create user's post.
 */
exports.create = async (req, res) => {
    const post = new Post({
        user_id: req.body.userId,
        title: req.body.title,
        description: req.body.description});
    console.log(post);
    Post.create({
        user_id: req.body.userId,
        title: req.body.title,
        description: req.body.description},
        (err) => {
        if (err) { return next(err); }
    });
    res.redirect('/user/' + req.body.userId + '/post');
};
