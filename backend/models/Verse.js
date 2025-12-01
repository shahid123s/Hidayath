import mongoose from 'mongoose';

const verseSchema = new mongoose.Schema(
    {
        emotion: {
            type: String,
            required: [true, 'Emotion is required'],
            enum: ['happy', 'sad', 'angry', 'stressed', 'depressed', 'anxious', 'confused'],
            lowercase: true,
            trim: true,
        },
        arabic: {
            type: String,
            required: [true, 'Arabic text is required'],
            trim: true,
        },
        english: {
            type: String,
            required: [true, 'English translation is required'],
            trim: true,
        },
        surah: {
            type: String,
            required: [true, 'Surah name is required'],
            trim: true,
        },
        ayah: {
            type: String,
            required: [true, 'Ayah reference is required'],
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

// Index for faster emotion-based queries
verseSchema.index({ emotion: 1 });

const Verse = mongoose.model('Verse', verseSchema);

export default Verse;
