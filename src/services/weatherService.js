// src/services/weatherService.js
// const API_KEY = '<API KEY>';
// const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;
const BASE_URL = `http://localhost:3000/weather/`; // change to proxy server to secure API

const show = async (city) => {
    try {
        // const queryString = `&q=${city}`;
        // const res = await fetch(BASE_URL + queryString);
        const res = await fetch(BASE_URL + city);
        const data = await res.json();
        console.log('Data:', data);
        return data;
    } catch (err) {
        console.log(err);
    }
};

// show('New York');

export { show };