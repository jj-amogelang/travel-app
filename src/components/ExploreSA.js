// src/components/ExploreArmenia.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ExploreSA.css'; // Import the CSS file for styling

const ExploreArmenia = () => {
    return (
        <div className="container">
            <div className="overlay">
                <h1>Explore South Africa</h1>
                <h2>with us.</h2>
                <p>We Travel guide are ready to help you on vacation around Armenia</p>
                <Link to="/register">
                    <button className="get-started">Lets Get Started</button>
                </Link>
                <p className="login-prompt">already have account? <a href="/login">Login</a></p>
            </div>
            <button className="skip">Skip</button>
        </div>
    );
};

export default ExploreArmenia;