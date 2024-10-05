// src/components/TravelPage.js
import React, { useState } from 'react';
import './TravelPage.css'; // Import the CSS file for styling


const TravelPage = () => {
    // Define the state variable for active category
    const [activeCategory, setActiveCategory] = useState('destinations');

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    return (
        <div className="travel-container">
            <header className="header">
                <h1>Welcome to Durban</h1>
                <div className="categories">
                    <button onClick={() => handleCategoryClick('destinations')}>Place</button>
                    <button onClick={() => handleCategoryClick('restaurants')}>Food</button>
                    <button onClick={() => handleCategoryClick('hotels')}>Hotel</button>
                    <button onClick={() => handleCategoryClick('safety')}>Safety</button>
                </div>
            </header>

            {activeCategory === 'destinations' && (
                <section className="destinations">
                    <h2>Popular Destinations</h2>
                    <div className="destination-cards">
                        <div className="card">
                            <h3>Tatev Monastery</h3>
                            <p>Syunik</p>
                        </div>
                        <div className="card">
                            <h3>Khor Virap</h3>
                            <p>Ararat</p>
                        </div>
                        <div className="card">
                            <h3>Noravank</h3>
                            <p>Vayots Dzor</p>
                        </div>
                    </div>
                </section>
            )}

            {activeCategory === 'restaurants' && (
                <section className="restaurants">
                    <h2>Restaurants in the Area</h2>
                    <ul>
                        <li>Restaurant 1</li>
                        <li>Restaurant 2</li>
                        <li>Restaurant 3</li>
                        {/* Add more restaurants as needed */}
                    </ul>
                </section>
            )}

            {activeCategory === 'hotels' && (
                <section className="hotels">
                    <h2>Recommended Hotels</h2>
                    <ul>
                        <li>Hotel 1</li>
                        <li>Hotel 2</li>
                        <li>Hotel 3</li>
                        {/* Add more hotels as needed */}
                    </ul>
                </section>
            )}

            {activeCategory === 'safety' && (
                <section className="safety">
                    <h2>Safety Tips</h2>
                    <p>Stay safe while traveling with these important tips:</p>
                    <ul>
                        <li>Keep your belongings secure.</li>
                        <li>Be aware of your surroundings.</li>
                        <li>Follow local laws and customs.</li>
                        {/* Add more safety tips as needed */}
                    </ul>
                </section>
            )}

            <section className="travel-ideas">
                <h2>Travel Ideas</h2>
                <p>See our proposals for inspiration!</p>
                <div className="idea-cards">
                    <div className="idea-card">
                        <img src="/public/images/hero-bg.jpeg" alt="Shirak"/>
                        <h3>Shirak</h3>
                    </div>
                    <div className="idea-card">
                        <img src="/public/images/flights.jpg" alt="Shirak"/>
                        <h3>Shirak</h3>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <h2>Your Route</h2>
                <p>Update or create new itineraries tailored to you: where to go, what to do and visit, where to sleep and eat.</p>
                <button>Organize</button>
            </footer>
        </div>
    );
};

export default TravelPage;