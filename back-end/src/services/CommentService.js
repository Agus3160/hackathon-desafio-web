
const CommentModel = require('../models/CommentModel');

class CommentService {

    static async createComment(body, username, placeId) {
        
        if(!body || !username || !placeId) throw new Error('Todos los campos son requeridos');

        const comment = await CommentModel.create({body, username, placeId});

        return { success: true, message: 'Comentario creado exitosamente', comment: comment };
    }

    static async getComentarios() {
        return CommentModel.find({});
    }

    static async getComentariosByPlaceId(placeId) {
        return CommentModel.find({ placeId }).sort({ createdAt: -1 });;
    }
}

module.exports = CommentService;

