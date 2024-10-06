import React from 'react';
import './ExploreSA.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ExploreSA = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleSkip = () => {
        navigate('/image-buttons'); // Navigate to the ImageButtons page
    };

    const handleHome = () => {
        navigate('/'); // Navigate to Home
    };

    const handleExplore = () => {
        navigate('/explore'); // Navigate to Explore
    };

    return (
        <div className="container" style={{ backgroundImage: 'url(/public/images/hero-bg.JPEG)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <header className="header">
                
                <nav className="nav-menu">
                    <button className="nav-button" onClick={handleHome}>Home</button>
                    <button className="nav-button" onClick={handleExplore}>Explore</button>
                </nav>
            </header>
            <div className="overlay">
                <h1>Explore South Africa</h1>
                <h2>with us.</h2>
                <p>Your personalized tour guide is ready to help you on vacation around South Africa</p>
                <button className="get-started" onClick={() => navigate('/image-buttons')}>Let's Get Started</button>
                <p className="login-prompt">Already have an account? <a href="/login">Login</a></p>
            </div>
            <button className="skip" onClick={handleSkip}>Skip</button>
        </div>
    );
};

export default ExploreSA;