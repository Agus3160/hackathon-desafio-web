const express = require('express');
const router = express.Router();
const userService = require('../services/UserService');

router.post('/', async (request, response) => {

    try {
        const status = await userService.createUser(request.body);
        if (!status.success) {
            return response.status(400).json({message: status.message});
        }

        return response.status(200).json({message: status.message});

    } catch (error) {
        console.log(error.message);
        response.status(500).json({message: 'Error al intentar registrar el usuario'});
    }
});

router.get('/list', async (request, response) => {

    try {
        const users = await userService.getUsers();
        response.status(200).json({users})
    } catch (error) {
        console.log(error.message);
        response.status(500).json({message: 'Error al intentar recuperar la lista de usuarios'});
    }
});


router.post('/login', async (request, response) => {
    try {
        const { email, password } = request.body;
        const status = await userService.authenticateUser(email, password);

        if (!status.success) {
            return response.status(400).json({ message: status.message });
        }
        
        return response.status(200).json({ message: status.message, token: status.token });
    } catch (error) {
        console.log(error.message);
        response.status(500).json({ message: 'Error al intentar autenticar el usuario' });
    }
});

module.exports = router;