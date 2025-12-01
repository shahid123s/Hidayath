import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Verse from '../models/Verse.js';
import { seedVerses } from '../data/seedData.js';
import connectDB from '../config/db.js';

// Load environment variables
dotenv.config();

const seedDatabase = async () => {
    try {
        // Connect to MongoDB
        await connectDB();

        // Clear existing verses
        console.log('🗑️  Clearing existing verses...');
        await Verse.deleteMany({});

        // Insert seed data
        console.log('🌱 Seeding database with verses...');
        const insertedVerses = await Verse.insertMany(seedVerses);

        console.log(`✅ Successfully seeded ${insertedVerses.length} verses!`);

        // Log counts by emotion
        const emotions = ['happy', 'sad', 'angry', 'stressed', 'depressed', 'anxious', 'confused'];
        console.log('\n📊 Verses by emotion:');

        for (const emotion of emotions) {
            const count = await Verse.countDocuments({ emotion });
            console.log(`   ${emotion}: ${count} verses`);
        }

        console.log('\n✨ Database seeding complete!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();
