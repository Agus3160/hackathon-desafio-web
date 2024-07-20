import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { LoaderCircle, Zap } from 'lucide-react';
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
  <h1 className="text-4xl font-extrabold mb-6 text-center text-indigo-600 shadow-lg">
    Lugares en <span>{categoryName}</span>
  </h1>
            {loading ? (
                <LoaderCircle size={64} className="mx-auto animate-spin mt-32   " />
            ) : error ? (
                <div className="text-center text-red-500">{error}</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {places.map((place) => (
                        <Card
                            key={place.id}
                            imgSrc={place.photos ? `https::${place.photos[0].authorAttributions.photoUri}` : 'default-image.jpg'}
                            title={place.displayName.text}
                            description={place.formattedAddress}
                            href={`/place/${place.id}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoryView;
