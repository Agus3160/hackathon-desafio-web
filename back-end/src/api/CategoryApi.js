const express = require('express');
const router = express.Router();
const categoryService = require('../services/CategoryService');

router.post('/create', async (request, response) => {
    try {
        const status = await categoryService.createCategory(request.body);
        if (!status.success) {
            return response.status(400).json({ message: status.message });
        }
        return response.status(200).json({ message: status.message });
    } catch (error) {
        console.log(error.message);
        response.status(500).json({ message: 'Error al intentar crear la categoría' });
    }
});

router.get('/list', async (request, response) => {
    try {
        const categories = await categoryService.getCategories();
        response.status(200).json({ categories });
    } catch (error) {
        console.log(error.message);
        response.status(500).json({ message: 'Error al intentar recuperar la lista de categorías' });
    }
});

module.exports = router;
