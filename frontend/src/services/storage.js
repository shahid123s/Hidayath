import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = '@hidayath_favorites';

/**
 * Get all favorite verses
 * @returns {Promise<Array>} - Array of favorite verses
 */
export const getFavorites = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(FAVORITES_KEY);
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (error) {
        console.error('Error loading favorites:', error);
        return [];
    }
};

/**
 * Save a verse to favorites
 * @param {Object} verse - Verse object to save
 * @returns {Promise<boolean>} - Success status
 */
export const saveFavorite = async (verse) => {
    try {
        const favorites = await getFavorites();

        // Check if verse already exists
        const exists = favorites.some(fav => fav._id === verse._id);

        if (!exists) {
            const newFavorites = [...favorites, { ...verse, savedAt: new Date().toISOString() }];
            await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
            return true;
        }

        return false;
    } catch (error) {
        console.error('Error saving favorite:', error);
        return false;
    }
};

/**
 * Remove a verse from favorites
 * @param {string} verseId - ID of verse to remove
 * @returns {Promise<boolean>} - Success status
 */
export const removeFavorite = async (verseId) => {
    try {
        const favorites = await getFavorites();
        const newFavorites = favorites.filter(fav => fav._id !== verseId);
        await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
        return true;
    } catch (error) {
        console.error('Error removing favorite:', error);
        return false;
    }
};

/**
 * Check if a verse is favorited
 * @param {string} verseId - ID of verse to check
 * @returns {Promise<boolean>} - Is favorited
 */
export const isFavorited = async (verseId) => {
    try {
        const favorites = await getFavorites();
        return favorites.some(fav => fav._id === verseId);
    } catch (error) {
        console.error('Error checking favorite:', error);
        return false;
    }
};

/**
 * Clear all favorites
 * @returns {Promise<boolean>} - Success status
 */
export const clearFavorites = async () => {
    try {
        await AsyncStorage.removeItem(FAVORITES_KEY);
        return true;
    } catch (error) {
        console.error('Error clearing favorites:', error);
        return false;
    }
};
