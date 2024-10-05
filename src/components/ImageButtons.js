import React from 'react';
import ImageCard from './ImageCard';

const travelData = [
    {
        title: 'Kwa-Zulu Natal',
        description: 'The Zulu Nation',
        imageUrl: '/public/images/Durban1.jpg',
        link: '/travel', // Replace with your link
    },
    {
        title: 'Gauteng',
        imageUrl: '/public/images/gauteng.jpg',
        description: 'The City of Lights ',
    },
    {
        title: 'North West',
        description: 'Peace and Calm',
        imageUrl: '/public/images/hero-bg.jpeg', // Corrected image path
        link: '/travel', // Replace with your link
    },
    {
        title: 'Western Cape',
        description: 'City of Good and Hope',
        imageUrl: '/public/images/Durban1.jpg',// Corrected image path
        link: '', // Replace with your link
    },
   
];

const ImageButtons = () => {
    return (
        <div className="travel-page">
            {travelData.map((item, index) => (
                <ImageCard key={index} {...item} />
            ))}
        </div>
    );
};

export default ImageButtons;
