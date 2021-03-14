const mongoose = require('mongoose');

const post_schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    marks: {
        type: Number,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    updated_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'ACTIVE'
    },
    is_deleted: {
        type: String,
        default: "NO"
    }
})

module.exports = mongoose.model('records', post_schema)