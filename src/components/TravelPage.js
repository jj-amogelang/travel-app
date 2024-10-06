// src/components/TravelPage.js
import React, { useState } from 'react';
import './TravelPage.css'; // Import the CSS file for styling


const TravelPage = () => {
    // Define the state variable for active category
    const [activeCategory, setActiveCategory] = useState('destinations');
    const [showLostMap, setShowLostMap] = useState(false); // State to control the lost map visibility

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    const handleGotLost = () => {
        setShowLostMap(true); // Show the lost map
    };

    // Coordinates for BCX Headquarters and Centurion Mall
    const lat = -25.800000; // Latitude for BCX Headquarters
    const lng = 28.200000;  // Longitude for BCX Headquarters
    const label = "Centurion Mall"; // Label for the destination

    // Create the Google Maps URL
    const url = `https://www.google.com/maps/search/?api=1&query=${label}@${lat},${lng}`;

    return (
        <div className="travel-container">
            <header className="header" style={{ color: 'black'}}>
                <h1>Welcome to Durban</h1>
                <div className="categories">
                    <button onClick={() => handleCategoryClick('destinations')}>Place</button>
                    <button onClick={() => handleCategoryClick('restaurants')}>Restaurants</button>
                    <button onClick={() => handleCategoryClick('hotels')}>Hotel</button>
                    <button onClick={() => handleCategoryClick('safety')}>Safety</button>
                </div>
            </header>

            {activeCategory === 'destinations' && (
                <section className="destinations">
                    <h2>Get to know us!</h2>
                    <div className="destination-cards">
                        <a href="/info" target="_blank" rel="noopener noreferrer" className="card">
                            <h3>Who is Mbongeni Ngema?</h3>
                            <p>South African playwright, composer, choreographer, and director</p>
                        </a>
                        <a href="/info" target="_blank" rel="noopener noreferrer" className="card">
                            <h3>The culture</h3>
                            <p>Arts and Culture, What interests us? The heritage and historical sites </p>
                        </a>
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
                    <h2>Crime Hotspots Near You</h2>
                    <p>When travelling in these areas be alert.</p>
                    <ul>
                        <li>Chestnut Crescent, Mariannhill: Known as a major hotspot for hijackings</li>
                        <li>Q Section, Umlazi: This area has seen frequent incidents of gang violence and shootings, making it a high-risk zone​</li>
                        <li>Pixley KaSeme Street, Durban Central: Located in the Durban CBD, this street is notorious for robberies and other criminal activities​</li>
                        <li>Botanic Road, Morningside: Known for vehicle hijackings</li>
                        <li>Sherwood, Durban: Another area frequently cited for hijackings and robberies</li>
                        {/* Add more safety tips as needed */}
                    </ul>
                    <h3>Map of Durban</h3>
                    {/* <iframe
                        title="Durban Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980000.0000000002!2d31.000000000000004!3d-29.000000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9b5c5c5c5c5c5c%3A0x5c5c5c5c5c5c5c5!2sDurban!5e0!3m2!1sen!2sza!4v1630000000000!5m2!1sen!2sza"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe> */}

                    <img 
                        src='/public/images/KwaZulu-Natal-riots-3.png' // Corrected path to your image
                        alt="Kwa-Zulu Natal"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                    />

                    <button className="got-lost-button" onClick={handleGotLost}>Got Lost?</button>

                    {showLostMap && (
                        <div className="lost-map">
                            {/* <h3>You're at BCX Headquarters!</h3>
                            <h4>Directions to Centurion Mall</h4> */}
                            <h5>Your Current Location</h5>

                            {/* <iframe
                                title="Directions from BCX Headquarters to Centurion Mall"
                                src={url}
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe> */}
                             <iframe
                                 title="Durban Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980000.0000000002!2d31.000000000000004!3d-29.000000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9b5c5c5c5c5c5c%3A0x5c5c5c5c5c5c5c5!2sDurban!5e0!3m2!1sen!2sza!4v1630000000000!5m2!1sen!2sza"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                    ></iframe>
                        </div>
                    )}
                </section>
            )}

            <section className="travel-ideas">
                <h2>Popular Destinations</h2>
                <p>See our proposals for inspiration!</p>
                <div className="idea-cards">
                    <div className="idea-card">
                    <img src='/public/images/Popular1.jpeg' alt="uShaka Marine World" />
                        <h3>uShaka Marine World</h3>
                    </div>
                    <div className="idea-card">
                    <img src='/public/images/Popular2.png' alt="Durban Metro" />
                        <h3>Durban Metro</h3>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <h2>Create an Itinerary</h2>
                <p>Update or create new itineraries tailored to you: where to go, what to do and visit, where to sleep and eat.</p>
                <button>Personalize</button>
            </footer>
        </div>
    );
};

export default TravelPage;