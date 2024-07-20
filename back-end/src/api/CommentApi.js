const express = require('express');
const router = express.Router();
const commentService = require('../services/CommentService');

router.post('/', async (request, response) => {
    try {
        const { body, username, placeId } = request.body;
        const result = await commentService.createComment(body, username, placeId);
        if (!result.success) {
            return response.status(400).json({ message: result.message });
        }
        return response.status(200).json({ message: result.message, comment: result.comment });
    } catch (error) {
        console.log(error.message);
        response.status(500).json({ message: 'Error al intentar crear el comentario' });
    }
});

router.get('/', async (request, response) => {
    try {
        const categories = await commentService.getComentarios();
        response.status(200).json({ categories });
    } catch (error) {
        console.log(error.message);
        response.status(500).json({ message: 'Error al intentar obtener lista de comentarios' });
    }
});

router.get('/place/:placeId', async (request, response) => {
    try {
        const placeId = request.params.placeId;
        const comments = await commentService.getComentariosByPlaceId(placeId);
        response.status(200).json({ comments });
    } catch (error) {
        console.log(error.message);
        response.status(500).json({ message: 'Error al intentar obtener lista de comentarios' });
    }
});

module.exports = router;
