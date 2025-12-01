import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import verseRoutes from './routes/verseRoutes.js';
import logger from './config/logger.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HTTP request logging
const morganFormat = ':method :url :status :res[content-length] - :response-time ms';
app.use(
    morgan(morganFormat, {
        stream: {
            write: (message) => {
                const logObject = {
                    method: message.split(' ')[0],
                    url: message.split(' ')[1],
                    status: message.split(' ')[2],
                    responseTime: message.split(' ')[5],
                };
                logger.http(JSON.stringify(logObject));
            },
        },
    })
);

// Routes
app.get('/', (req, res) => {
    res.json({
        message: '🌙 Welcome to Hidayath API',
        description: 'Islamic Emotional Guidance through Quran Verses',
        version: '1.0.0',
        endpoints: {
            getAllVerses: 'GET /api/verses',
            getVerseByEmotion: 'GET /api/verses/:emotion',
            getAllVersesByEmotion: 'GET /api/verses/all/:emotion',
        },
        emotions: ['happy', 'sad', 'angry', 'stressed', 'depressed', 'anxious', 'confused'],
    });
});

app.use('/api/verses', verseRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'development' ? err.message : {},
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
    });
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    logger.info(`🚀 Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
    logger.info(`📍 API available at: http://localhost:${PORT}`);
    logger.info(`🌙 Hidayath API is ready!`);
});
