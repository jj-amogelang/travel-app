// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExploreSA from './components/ExploreSA';
import TravelPage from './components/TravelPage';
import RestaurantPage from './components/RestaurantPage.js';
import ImageButtons from './components/ImageButtons'; // Import ImageButtons
import InfoDoc from './components/InfoDoc.js'; // Import InfoDoc for news article

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ExploreSA />} />
                <Route path="/travel" element={<TravelPage />} />
                <Route path="/restaurants" element={<RestaurantPage />} />
                <Route path="/image-buttons" element={<ImageButtons />} />
                <Route path="/info" element={<InfoDoc />} /> {/* Add route for news article */}
            </Routes>
        </Router>
    );
};

export default App;