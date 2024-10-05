// src/components/ExploreArmenia.js
import React from 'react';
import './ExploreSA.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ExploreArmenia = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleSkip = () => {
        navigate('/image-buttons'); // Navigate to the ImageButtons page
    };

    return (
        <div className="container">
            <div className="overlay">
                <h1>Explore South Africa</h1>
                <h2>with us.</h2>
                <p>We Travel guide are ready to help you on vacation around Armenia</p>
                <button className="get-started" onClick={() => navigate('/image-buttons')}>Let's Get Started</button>
                <p className="login-prompt">Already have an account? <a href="/login">Login</a></p>
            </div>
            <button className="skip" onClick={handleSkip}>Skip</button>
        </div>
    );
};

export default ExploreArmenia;
