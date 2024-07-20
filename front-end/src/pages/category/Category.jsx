import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Zap } from 'lucide-react';
import Card from './Card';

const CategoryView = () => {
    const { categoryName } = useParams();
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const response = await axios.post('http://localhost:3000/api/maps/search-places-by-category', {
                    categoryName: categoryName
                });

                setPlaces(response.data.places || []);
                console.log(response.data.places);
            } catch (err) {
                setError('Error al recuperar los lugares');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPlaces();
    }, [categoryName]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Lugares en {categoryName}</h1>
            {loading ? (
                <div className="text-center">Cargando...</div>
            ) : error ? (
                <div className="text-center text-red-500">{error}</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {places.map((place) => (
                        <Card
                            key={place.id}
                            imgSrc={place.photos ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=AIzaSyAt3oTHy0DfMpfp4aED_V5_Lj9SQKerUbE` : 'default-image.jpg'}
                            title={place.name}
                            description={place.displayName.formattedAdresss}
                            href={`https://www.google.com/maps/place/?q=place_id:${place.place_id}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoryView;