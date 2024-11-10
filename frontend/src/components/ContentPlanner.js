// Example usage in a component file, e.g., /src/components/ContentPlanner.js

import { api, handleError } from '../utils/api';

const fetchContent = async () => {
    try {
        const response = await api.get('/content');
        console.log('Content fetched:', response.data);
    } catch (error) {
        handleError(error);
    }
};
