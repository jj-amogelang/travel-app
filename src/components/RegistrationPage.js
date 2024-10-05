// src/components/RegistrationPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegistrationPage.css'; // Import the CSS file for styling

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        title: '',
        firstName: '',
        lastName: '',
        continent: '',
        country: '',
        province: '',
        city: '',
        activities: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCheckboxChange = (e) => {
        const { value } = e.target;
        setFormData((prevData) => {
            const activities = prevData.activities.includes(value)
                ? prevData.activities.filter((activity) => activity !== value)
                : [...prevData.activities, value];
            return { ...prevData, activities };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission logic here
    };

    return (
        <div className="registration-container">
            <h1>IT'S TIME TO <span className="highlight">TRAVEL!</span></h1>
            <h2>Let's get you registered</h2>
            <p>Please fill in your details so we can give you the best experience specially for you.</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Title
                    <input type="text" name="title" value={formData.title} onChange={handleChange} />
                </label>
                <label>
                    First Name
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                </label>
                <label>
                    Last Name
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                </label>
                <label>
                    Please select a continent
                    <select name="continent" value={formData.continent} onChange={handleChange}>
                        <option value="">Select...</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="North America">North America</option>
                        <option value="South America">South America</option>
                        <option value="Africa">Africa</option>
                        <option value="Australia">Australia</option>
                    </select>
                </label>
                <label>
                    Please select a country
                    <select name="country" value={formData.country} onChange={handleChange}>
                        <option value="">Select...</option>
                        <option value="Armenia">Armenia</option>
                        <option value="USA">USA</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                    </select>
                </label>
                <label>
                    Please select a province
                    <select name="province" value={formData.province} onChange={handleChange}>
                        <option value="">Select...</option>
                        <option value="Yerevan">Yerevan</option>
                        <option value="Lori">Lori</option>
                    </select>
                </label>
                <label>
                    Please select a city
                    <select name="city" value={formData.city} onChange={handleChange}>
                        <option value="">Select...</option>
                        <option value="Yerevan">Yerevan</option>
                        <option value="Gyumri">Gyumri</option>
                    </select>
                </label>
                <fieldset>
                    <legend>What are you planning to do during your tour?</legend>
                    <label>
                        <input
                            type="checkbox"
                            value="Sport"
                            checked={formData.activities.includes('Sport')}
                            onChange={handleCheckboxChange}
                        />
                        Sport
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Entertainment"
                            checked={formData.activities.includes('Entertainment')}
                            onChange={handleCheckboxChange}
                        />
                        Entertainment
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Events"
                            checked={formData.activities.includes('Events')}
                            onChange={handleCheckboxChange}
                        />
                        Events
                    </label>
                </fieldset>
                <Link to="/travel">
                <button type="submit">Register</button>
                </Link>
            </form>
        </div>
    );
};

export default RegistrationPage;