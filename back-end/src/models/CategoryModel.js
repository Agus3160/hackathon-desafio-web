const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    imageUrl: {
        type: String,
        required: false // Puedes hacer este campo opcional si no siempre se proporciona una imagen
    }
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;

