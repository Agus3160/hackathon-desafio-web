const express = require('express');
const router = express.Router();
const securityService = require('../services/SecurityService');
const jwtUtils = require('../utils/JwtUtil');

router.post('/login',  async (request, response) => {

    try {
        const result = await securityService.login(request.body);

        if (!result.success) {
            return response.status(result.statusCode).json({message: result.message});
        }

        return response.status(200).json({
            message: 'Autenticación exitosa',
            user: result.user,
            accessToken: result.accessToken,
            refreshToken: result.refreshToken
        });

    }catch (error) {
        console.log(error.message);
        response.status(500).json({message: 'Error al intentar autenticar el usuario'});
    }
});

router.post('/refresh-token',  async (request, response) => {

    try {

        const { refreshToken } = request.body;

        const { success, data } = jwtUtils.verifyRefreshToken(refreshToken);

        if(!success) return response.status(401).json({message: data});

        const result = await securityService.refreshToken(request.body.refreshToken);

        if (!result.success) {
            return response.status(result.statusCode).json({message: result.message});
        }

        return response.status(200).json({
            message: result.message,
            accessToken: result.accessToken,
            username:data.username
        });

    }catch (error) {
        console.log(error.message);
        response.status(500).json({message: 'Error al intentar renovar el access token'});
    }
});

module.exports = router;