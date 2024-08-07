const express = require('express');
const router = express.Router();
const mapsService = require('../services/MapsService');
const jwtUtils = require('../utils/JwtUtil');

//router.use(jwtUtils.authenticateToken);

router.post('/search-places', async (request, response) => {

    try {
        const textQuery = request.body.textQuery;
        const places = await mapsService.searchPlaces(textQuery);
        response.status(200).json(places);
    }catch (error) {
        console.log(error.message);
        response.status(500).json({message: 'Error al realizar la solicitud a la API de Google Maps'});
    }
});

router.post('/search-plaace/:id', async (request, response) => {
    const { id } = request.params;

    try {
        const place = await mapsService.getPlaceDetails(id);
        response.status(200).json(place);
    } catch (error) {
        console.log(error.message);
        response.status(500).json({message: 'Error al realizar la solicitud a la API de Google Maps'});
    }
})

router.post('/search-places-by-category', async (request, response) => {
    try {
        const categoryName = request.body.categoryName;
        const places = await mapsService.searchPlacesByCategory(categoryName);
        console.log(places);
        response.status(200).json(places)
    } catch (error) {
        console.log(error.message);
        response.status(500).json({ message: 'Error al realizar la solicitud a la API de Google Maps' });
    }
});

router.get('/place-details/:placeId', async (request, response) => {
    try {
        const placeId = request.params.placeId;
        const placeDetails = await mapsService.getPlaceDetails(placeId);
        response.status(200).json(placeDetails);
    } catch (error) {
        console.log(error.message);
        response.status(500).json({message: 'Error al obtener los detalles del lugar'});
    }
});

module.exports = router;
