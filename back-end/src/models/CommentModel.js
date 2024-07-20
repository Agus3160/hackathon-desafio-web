const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true,
    },

    username: {
        type: String,
        required: true,
    },

    placeId : {
        type: String,
        required: true
    },

}, {
  timestamps: true
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;

