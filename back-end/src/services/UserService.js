const UserModel = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
class UserService {

    static async createUser(user) {

        if (!user.username) {
            return {success: false, message: 'El nombre de usuario es requerido'};
        }
        if (!user.email) {
            return {success: false, message: 'La dirección de correo es requerida'};
        }
        if (!user.password) {
            return {success: false, message: 'La contraseña es requerida'};
        }

        const email = user.email
        const userDB = await UserModel.findOne({email})

        if (userDB) {
            return {success: false, message: 'La dirección de correo ya existe'};
        }

        user.password = await bcrypt.hash(user.password, 10);

        await UserModel.create(user);

        return {success: true, message: 'Usuario registrado exitosamente'};
    }

    static async getUsers() {
        return UserModel.find({}).select('-password');
    }
    // Nueva función para autenticar usuario
     static async authenticateUser(email, password) {
        const user = await UserModel.findOne({ email });

        if (!user) {
            return { success: false, message: 'Usuario no encontrado' };
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return { success: false, message: 'Contraseña incorrecta' };
        }
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return { success: true, message: 'Autenticación exitosa', token };
    }
}

module.exports = UserService;