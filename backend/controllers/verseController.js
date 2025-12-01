import Verse from '../models/Verse.js';

/**
 * @desc    Get random verse by emotion
 * @route   GET /api/verses/:emotion
 * @access  Public
 */
export const getVerseByEmotion = async (req, res) => {
    try {
        const { emotion } = req.params;

        // Validate emotion
        const validEmotions = ['happy', 'sad', 'angry', 'stressed', 'depressed', 'anxious', 'confused'];
        if (!validEmotions.includes(emotion.toLowerCase())) {
            return res.status(400).json({
                success: false,
                message: `Invalid emotion. Valid emotions: ${validEmotions.join(', ')}`,
            });
        }

        // Get all verses for the emotion
        const verses = await Verse.find({ emotion: emotion.toLowerCase() });

        if (!verses || verses.length === 0) {
            return res.status(404).json({
                success: false,
                message: `No verses found for emotion: ${emotion}`,
            });
        }

        // Select a random verse
        const randomVerse = verses[Math.floor(Math.random() * verses.length)];

        res.status(200).json({
            success: true,
            data: randomVerse,
        });
    } catch (error) {
        console.error('Error in getVerseByEmotion:', error);
        res.status(500).json({
            success: false,
            message: 'Server error while fetching verse',
            error: error.message,
        });
    }
};

/**
 * @desc    Get all verses for a specific emotion
 * @route   GET /api/verses/all/:emotion
 * @access  Public
 */
export const getAllVersesByEmotion = async (req, res) => {
    try {
        const { emotion } = req.params;

        const verses = await Verse.find({ emotion: emotion.toLowerCase() });

        res.status(200).json({
            success: true,
            count: verses.length,
            data: verses,
        });
    } catch (error) {
        console.error('Error in getAllVersesByEmotion:', error);
        res.status(500).json({
            success: false,
            message: 'Server error while fetching verses',
            error: error.message,
        });
    }
};

/**
 * @desc    Get all verses
 * @route   GET /api/verses
 * @access  Public
 */
export const getAllVerses = async (req, res) => {
    try {
        const verses = await Verse.find({});

        res.status(200).json({
            success: true,
            count: verses.length,
            data: verses,
        });
    } catch (error) {
        console.error('Error in getAllVerses:', error);
        res.status(500).json({
            success: false,
            message: 'Server error while fetching verses',
            error: error.message,
        });
    }
};
