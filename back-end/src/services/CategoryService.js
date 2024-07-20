const CategoryModel = require('../models/CategoryModel');

class CategoryService {

    static async createCategory(category) {
        if (!category.name) {
            return { success: false, message: 'El nombre de la categoría es requerido' };
        }
        const categoryDB = await CategoryModel.findOne({ name: category.name });

        if (categoryDB) {
            return { success: false, message: 'La categoría ya existe' };
        }

        await CategoryModel.create(category);

        return { success: true, message: 'Categoría creada exitosamente' };
    }

    static async getCategories() {
        return CategoryModel.find({});
    }
}

module.exports = CategoryService;
