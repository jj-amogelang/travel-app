import React from 'react';
import './ImageButtons.css'; // Import the CSS file

const ImageCard = ({ title, description, location, price, imageUrl, discount, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="travel-card"> {/* Wrap the card in an anchor tag */}
            <img src={imageUrl} alt={title} className="travel-card-image" />
            <div className="travel-card-content">
                <div className="discount">{discount}</div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p className="location">{location}</p>
                <p className="price">{price}</p>
                <span className="explore-button">Explore more &gt;</span> {/* Change button to span */}
            </div>
        </a>
    );
};

export default ImageCard;