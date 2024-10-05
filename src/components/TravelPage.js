// src/components/TravelPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TravelPage.css'; // Import the CSS file for styling

const TravelPage = () => {
    // Define the state variable
    const [showRestaurants, setShowRestaurants] = useState(false);

    const handleFoodClick = () => {
        setShowRestaurants(true);
    };
    return (
        <div className="travel-container">
            <header className="header">
                <h1>Where do you want to go?</h1>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button>Search</button>
                </div>
                <div className="categories">
                    <Link to="/"><button>Place</button></Link>
                    <Link to="/restaurants"><button>Food</button></Link>
                    <button>Hotel</button>
                    <button>Safety</button>
                </div>
            </header>

            {showRestaurants ? (
                <section className="restaurants">
                    <h2>Restaurants in the Area</h2>
                    <ul>
                        <li>Restaurant 1</li>
                        <li>Restaurant 2</li>
                        <li>Restaurant 3</li>
                        {/* Add more restaurants as needed */}
                    </ul>
                </section>
            ) : (
                <section className="destinations">
                    <h2>Popular Destinations</h2>
                    {/* Your existing destinations code */}
                </section>
            )}

            <section className="destinations">
                <h2>Popular Destinations</h2>
                <div className="destination-cards">
                    <div className="card">
                    <img src={require('./images/Durban1.jpg').default} alt="Tatev monastery" />
                        <h3>Tatev monastery</h3>
                        <p>Syunik</p>
                    </div>
                    <div className="card">
                    <img src={require('./images/Durban2.jpg').default} alt="Tatev monastery" />
                        <h3>Khor Virap</h3>
                        <p>Ararat</p>
                    </div>
                    <div className="card">
                    <img src={require('./images/Durban3.png').default} alt="Tatev monastery" />
                        <h3>Noravank</h3>
                        <p>Vayots Dzor</p>
                    </div>
                </div>
            </section>

            <section className="travel-ideas">
                <h2>Travel ideas</h2>
                <p>See our proposals for inspiration!</p>
                <div className="idea-cards">
                    <div className="idea-card">
                        <img src="path/to/shirak.jpg" alt="Shirak" />
                        <h3>Shirak</h3>
                    </div>
                    <div className="idea-card">
                        <img src="path/to/kotayk.jpg" alt="Kotayk" />
                        <h3>Kotayk</h3>
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