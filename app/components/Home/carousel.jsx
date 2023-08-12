"use client"
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../Spinner';
  

const Carousel = () => {
    const [foodPictures, setFoodPictures] = useState([]);
    const [error, setError] = useState(null);
    let base_url = 'https://source.unsplash.com/random/800x400'
    
    let params = {
        "count": 10,
        "query": "food",
    }

    const fetchApi = async () => {
        try {
            const response = await axios.get(base_url, params=params, {
            });

            const imageUrls = Array.from({ length: 10 }, (_, index) => `${response.config.url}?${index}`);
            setFoodPictures(imageUrls);
        } catch (error) {
            console.error('Error fetching API:', error);
            setError('An error occurred while fetching images.');
        }
    };

    useEffect(() => {
        fetchApi();
    }, []);
      

    return (
        <div>
        {error ? (
            <div className="error-message">{error}</div>
        ) : (
            <div className="carousel carousel-center flex justify-center min-h-[400px]">
                {foodPictures.length == 10 ? (
                    foodPictures.map((imageUrl, index) => (
                        <div className="carousel-item" key={index}>
                            <img src={imageUrl} alt={`Food ${index}`} />
                        </div>
                    ))
                ) : (
                    <Spinner />
                )}
            </div>
        )}
        </div>
    );
};

export default Carousel;