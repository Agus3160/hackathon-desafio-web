const axios = require('axios');
require('dotenv').config()
const CategoryModel = require('../models/CategoryModel');
class MapsService {

    static async searchPlaces(textQuery) {
        const response = await axios.post(
            'https://places.googleapis.com/v1/places:searchText',
            {
                textQuery: textQuery,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Goog-Api-Key': process.env.GOOGLE_MAPS_API_KEY,
                    'X-Goog-FieldMask': 'places.displayName,places.formattedAddress,places.priceLevel,places.id,places.photos',
                },
            }
        );

        return response.data;
    }
    static async searchPlacesByCategory(categoryName) {

        const GOOLE_API_KEY = process.env.GOOGLE_MAPS_API_KEY

        const category = await CategoryModel.findOne({ name: categoryName });

        if (!category) {
            throw new Error('Categoría no encontrada');
        }

        const response = await axios.post(
            'https://places.googleapis.com/v1/places:searchText',
            {
                textQuery: `${category.name}, Encarnacion, Paraguay`,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Goog-Api-Key': process.env.GOOGLE_MAPS_API_KEY,
                    'X-Goog-FieldMask': 'places.displayName,places.formattedAddress,places.priceLevel,places.id,places.photos',
                },
            }
        );
        
        
        return response.data;
    }

    static async getPlaceDetails(placeId) {
        const response = await axios.get(
            `https://places.googleapis.com/v1/places/${placeId}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Goog-Api-Key': 'AIzaSyAt3oTHy0DfMpfp4aED_V5_Lj9SQKerUbE',
                    'X-Goog-FieldMask': 'displayName,formattedAddress,googleMapsUri,photos',
                },
            }
        );

        const places = response.data;

        // const processedPlaces = await Promise.all(places.map(async (place) => {
        //     const photoUrl = place.photos && place.photos[0] 
        //         ? `https://places.googleapis.com/v1/${place.photos[0]}/media?key=${GOOLE_API_KEY}` 
        //         : null;

        //     const photo = photoUrl ? await fetch(photoUrl).then(res => res.blob().then(blob => URL.createObjectURL(blob))) : null;

        //     return {
        //         ...place,
        //         photo
        //     };
        // }));

        return places;

    }

}

module.exports = MapsService;