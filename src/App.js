// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExploreSA from './components/ExploreSA';
import TravelPage from './components/TravelPage';
import RegistrationPage from './components/RegistrationPage';
import RestaurantPage from './components/RestaurantPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ExploreSA />} />
                <Route path="/travel" element={<TravelPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/restaurants" element={<RestaurantPage />} />
            </Routes>
        </Router>
    );
};

export default App;