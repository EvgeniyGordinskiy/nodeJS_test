const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user_id: String,
    title: String,
    description: String,
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
