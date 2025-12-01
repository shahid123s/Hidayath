import express from 'express';
import {
    getVerseByEmotion,
    getAllVersesByEmotion,
    getAllVerses,
} from '../controllers/verseController.js';

const router = express.Router();

// Get all verses
router.get('/', getAllVerses);

// Get random verse by emotion
router.get('/:emotion', getVerseByEmotion);

// Get all verses for specific emotion
router.get('/all/:emotion', getAllVersesByEmotion);

export default router;
