const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    category : String
});


const Category = new mongoose.model('category', categorySchema);

module.exports = Category;