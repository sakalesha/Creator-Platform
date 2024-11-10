// /src/utils/api.js

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',  // Update with your backend URL
    headers: {
        'Content-Type': 'application/json',
    },
});

const handleError = (error) => {
    if (error.response) {
        // The server responded with a status outside the 200 range
        alert(`Error: ${error.response.data.message}`);
    } else if (error.request) {
        // Request was made, but no response was received
        alert('No response from server');
    } else {
        // Something happened while setting up the request
        alert('An error occurred while making the request');
    }
};

export { api, handleError };
