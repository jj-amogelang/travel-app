import React from 'react';
import ImageCard from './ImageCard';

const travelData = [
    {
        title: 'Kwa-Zulu Natal',
        description: 'The Zulu Nation',
        imageUrl: 'C:\Users\Neo Matlala\Downloads\travel-app-master\assets\images\DBN.jpg', // Replace with your image path
        link: '/travel', // Replace with your link
    },
    {
        title: 'Gauteng',
        description: 'The City of Lights ',
        imageUrl: './assets/images/DBN.jpg', // Replace with your image path
        link: '/travel', // Replace with your link
    },
    {
        title: 'North West',
        description: 'Peace and Calm',
        imageUrl: '/assets/images/DBN.jpg', // Replace with your image path
        link: '/travel', // Replace with your link
    },
    {
        title: 'Western Cape',
        description: 'City of Good and Hope',
        imageUrl: '/assets/images/DBN.jpg', // Replace with your image path
        link: 'https://example.com/hotel-rates', // Replace with your link
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
