document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Reservation submitted successfully!');
    // Add your form submission logic here
});

// Populate country, province, and city based on continent selection
const continentSelect = document.getElementById('continent');
const countrySelect = document.getElementById('country');
const provinceSelect = document.getElementById('province');
const citySelect = document.getElementById('city');

const data = {
    Asia: {
        countries: {
            Japan: {
                provinces: {
                    Tokyo: ['Tokyo', 'Yokohama'],
                    Osaka: ['Osaka', 'Kobe']
                }
            },
            India: {
                provinces: {
                    Maharashtra: ['Mumbai', 'Pune'],
                    Delhi: ['New Delhi', 'Gurgaon']
                }
            }
        }
    },
    Europe: {
        countries: {
            France: {
                provinces: {
                    France: ['Paris', 'Versailles'],
                    Provence: ['Marseille', 'Nice']
                }
            },
            Germany: {
                provinces: {
                    Bavaria: ['Munich', 'Nuremberg'],
                    Berlin: ['Berlin']
                }
            }
        }
    },
    Africa: {
        countries: {
            Angola: {
                provinces: {
                    France: ['Paris', 'Versailles'],
                    Provence: ['Marseille', 'Nice']
                }
            },
            Botswana: {
                provinces: {
                    Bavaria: ['Munich', 'Nuremberg'],
                    Berlin: ['Berlin']
                }
            },
            Lesotho: {
                provinces: {
                    Bavaria: ['Munich', 'Nuremberg'],
                    Berlin: ['Berlin']
                }
            },
            Mozambique: {
                provinces: {
                    Bavaria: ['Munich', 'Nuremberg'],
                    Berlin: ['Berlin']
                }
            },
            Namibia: {
                provinces: {
                    Bavaria: ['Munich', 'Nuremberg'],
                    Berlin: ['Berlin']
                }
            },
            'South Africa': {
                provinces: {
                    'Western Cape': ['Cape Town', 'Stellenbosch'],
                    'Eastern Cape': ['East London', 'Port Elizabeth'],
                    'Northern Cape': ['Kimberley', 'Upington'],
                    'Free State': ['Bloemfontein', 'Welkom'],
                    'Gauteng': ['Johannesburg', 'Pretoria'],
                    'KwaZulu-Natal': ['Durban', 'Pietermaritzburg'],
                    'Mpumalanga': ['Nelspruit', 'Mbombela'],
                    'Limpopo': ['Polokwane', 'Mokopane'],
                }
            },
            Swaziland: {
                provinces: {
                    Bavaria: ['Munich', 'Nuremberg'],
                    Berlin: ['Berlin']
                }
            },
            Zambia: {
                provinces: {
                    Bavaria: ['Munich', 'Nuremberg'],
                    Berlin: ['Berlin']
                }
            },
            Zimbabwe: {
                provinces: {
                    Bavaria: ['Munich', 'Nuremberg'],
                    Berlin: ['Berlin']
                }
            }
        }
    },
    // Add more continents, countries, provinces, and cities as needed
};

continentSelect.addEventListener('change', function() {
    const continent = this.value;
    countrySelect.innerHTML = '<option value="" disabled selected>Please select a country</option>';
    provinceSelect.innerHTML = '<option value="" disabled selected>Please select a province</option>';
    citySelect.innerHTML = '<option value="" disabled selected>Please select a city</option>';
    countrySelect.disabled = false;

    for (const country in data[continent].countries) {
        countrySelect.innerHTML += `<option value="${country}">${country}</option>`;
    }
});

countrySelect.addEventListener('change', function() {
    const continent = continentSelect.value;
    const country = this.value;
    provinceSelect.innerHTML = '<option value="" disabled selected>Please select a province</option>';
    citySelect.innerHTML = '<option value="" disabled selected>Please select a city</option>';
    provinceSelect.disabled = false;

    for (const province in data[continent].countries[country].provinces) {
        provinceSelect.innerHTML += `<option value="${province}">${province}</option>`;
    }
});

provinceSelect.addEventListener('change', function() {
    const continent = continentSelect.value;
    const country = countrySelect.value;
    const province = this.value;
    citySelect.innerHTML = '<option value="" disabled selected>Please select a city</option>';
    citySelect.disabled = false;

    for (const city of data[continent].countries[country].provinces[province]) {
        citySelect.innerHTML += `<option value="${city}">${city}</option>`;
    }
});