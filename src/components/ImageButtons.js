import React from 'react';
import ImageCard from './ImageCard';

const travelData = [
    {
        title: 'Home of Kruger park tour',
        description: 'Unwind in Phalaborwa',
        imageUrl: '../assets/images/DBN.jpg', // Replace with your image path
        link: '/travel', // Replace with your link
    },
    {
        title: 'Home of Kruger park tour',
        description: 'Unwind in Phalaborwa',
        imageUrl: './assets/images/DBN.jpg', // Replace with your image path
        link: '/travel', // Replace with your link
    },
    {
        title: 'Home of Kruger park tour',
        description: 'Unwind in Phalaborwa',
        imageUrl: '/assets/images/DBN.jpg', // Replace with your image path
        link: '/travel', // Replace with your link
    },
    {
        title: 'Home of Kruger park tour',
        description: 'Unwind in Phalaborwa',
        imageUrl: '/assets/images/DBN.jpg', // Replace with your image path
        link: '/travel', // Replace with your link
    },
    {
        title: 'Home of Kruger park tour',
        description: 'Unwind in Phalaborwa',
        imageUrl: '/assets/images/DBN.jpg', // Replace with your image path
        link: '/travel', // Replace with your link
    },
    {
        title: 'Home of Kruger park tour',
        description: 'Unwind in Phalaborwa',
        imageUrl: '/assets/images/DBN.jpg', // Replace with your image path
        link: '/travel', // Replace with your link
    },
    {
        title: 'Best hotel rates',
        description: 'Get up to 47% off the best hotels',
        imageUrl: '/assets/images/DBN.jpg', // Replace with your image path
        link: 'https://example.com/hotel-rates', // Replace with your link
    },
    {
        title: 'Peak Season Exclusive Offer',
        description: 'Riverside Durban 01 - 04 January 3 Night Stay for 4 in Family Room Double Room Breakfast Daily',
        imageUrl: '/assets/images/DBN.jpg', // Replace with your image path
        link: 'https://example.com/peak-season-offer', // Replace with your link
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
