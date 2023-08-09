"use client"
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

  

const Carousel = () => {
    const [foodPictures, setFoodPictures] = useState([]);

    useEffect(() => {
        fetchApi();
    }, []);

    const fetchApi = async () => {
        try {
            const response = await axios.get('https://source.unsplash.com/random/800x400', {
                params: {
                    count: 10
                }
            });

            const imageUrls = Array.from({ length: 10 }, (_, index) => `${response.config.url}?${index}`);
            setFoodPictures(imageUrls);
        } catch (error) {
            console.error('Error fetching API:', error);
        }
    };
      

    return (
        <div className="carousel carousel-center">
            {foodPictures.map((imageUrl, index) => (
                <div className="carousel-item" key={index}>
                    <img src={imageUrl} alt={`Food ${index}`} />
                </div>
            ))}
        </div>
    );
};

export default Carousel;