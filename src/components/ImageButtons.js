import React from 'react';
import ImageCard from './ImageCard';


const handleHome = () => {
    navigate('/'); // Navigate to Home
};

const handleExplore = () => {
    navigate('/explore'); // Navigate to Explore
};

const travelData = [
    {
        title: 'Kwa-Zulu Natal, Durban',
        description: 'The Zulu Nation',
        imageUrl: '/public/images/Durban1.jpg',
        link: '/travel', // Replace with your link
    },
    {
        title: 'Gauteng',
        imageUrl: '/public/images/hero-bg.jpeg',
        description: 'The City of Lights ',
    },
    {
        title: 'North West',
        description: 'Peace and Calm',
        imageUrl: '/public/images/North-West.jpg',

 // Corrected image path
    },
    {
        title: 'Western Cape',
        description: 'City of Good and Hope',
        imageUrl: '/public/images/Western-Cape.jpg',

    },
   
];

const ImageButtons = () => {
    return (
        <div className="travel-page">
            <header className="header">
                <h1 className="header-title">Explore South Africa</h1>
                <h2 className="header-subtitle">Your Adventure Awaits!</h2>
                <nav className="nav-menu">
                    <button className="nav-button" onClick={handleHome}>Home</button>
                    <button className="nav-button" onClick={handleExplore}>Explore</button>
                </nav>
            </header>
            {travelData.map((item, index) => (
                <ImageCard key={index} {...item} />
            ))}
        </div>
    );
};

export default ImageButtons;
