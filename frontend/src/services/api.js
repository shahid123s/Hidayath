import axios from 'axios';

// API URL is loaded from environment variable
// Set EXPO_PUBLIC_API_BASE_URL in .env file
const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL || 'http://localhost:5001';
console.log('API URL:', API_BASE_URL);

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

/**
 * Get a random verse by emotion
 * @param {string} emotion - One of: happy, sad, angry, stressed, depressed, anxious, confused
 * @returns {Promise} - Verse data
 */
export const getVerseByEmotion = async (emotion) => {
    try {
        const response = await api.get(`/api/verses/${emotion.toLowerCase()}`);
        return response.data;
    } catch (error) {
        console.log(error.message);
        console.error('Error fetching verse:', error);
        throw error;
    }
};

/**
 * Get all verses
 * @returns {Promise} - All verses
 */
export const getAllVerses = async () => {
    try {
        const response = await api.get('/api/verses');
        return response.data;
    } catch (error) {
        console.error('Error fetching all verses:', error);
        throw error;
    }
};

export default api;
