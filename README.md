# Hidayath - Islamic Emotional Guidance App 🌙

A beautiful, modern mobile application that provides emotional support through carefully selected Quran verses. Built with React Native (Expo) and Node.js + Express + MongoDB.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 📱 About

Hidayath helps users find peace and guidance by selecting their current emotion and receiving relevant verses from the Holy Quran with Arabic text, English translation, and Surah/Ayah references.

## ✨ Features

- 🎭 **Emotion-Based Selection** - Choose from 7 emotions (Happy, Sad, Angry, Stressed, Depressed, Anxious, Confused)
- 📖 **Beautiful Verse Display** - Arabic calligraphy with English translations
- 💾 **Save Favorites** - Bookmark meaningful verses for daily reflection
- 🔄 **Share Verses** - Share spiritual guidance with others
- 🌙 **Dark Premium UI** - Elegant design with Islamic geometric patterns
- ⚡ **Offline Favorites** - Access saved verses without internet

## 🏗 Tech Stack

### Backend
- **Node.js** + **Express** - RESTful API server
- **MongoDB Atlas** - Cloud database for verse storage
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing
- **ES Modules** - Modern JavaScript imports

### Frontend
- **React Native** (Expo SDK 50) - Cross-platform mobile framework
- **React Navigation** - Bottom tabs + stack navigation
- **Axios** - HTTP client for API calls
- **AsyncStorage** - Local storage for favorites
- **Expo Vector Icons** - Beautiful iconography

## 📂 Project Structure

```
Hidayath/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── controllers/
│   │   └── verseController.js    # Verse operations
│   ├── data/
│   │   └── seedData.js           # 30 authentic Quran verses
│   ├── models/
│   │   └── Verse.js              # Verse schema
│   ├── routes/
│   │   └── verseRoutes.js        # API routes
│   ├── scripts/
│   │   └── seed.js               # Database seeding script
│   ├── .env.example              # Environment variables template
│   ├── .gitignore
│   ├── package.json
│   └── server.js                 # Express server entry point
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── EmotionCard.js    # Reusable emotion card
│   │   │   └── LoadingShimmer.js # Loading animation
│   │   ├── navigation/
│   │   │   └── AppNavigator.js   # Navigation setup
│   │   ├── screens/
│   │   │   ├── EmotionScreen.js  # Main emotion selection
│   │   │   ├── VerseScreen.js    # Verse display with save/share
│   │   │   ├── FavoritesScreen.js# Saved verses
│   │   │   └── AboutScreen.js    # App information
│   │   ├── services/
│   │   │   ├── api.js            # Axios API client
│   │   │   └── storage.js        # AsyncStorage wrapper
│   │   └── theme/
│   │       └── colors.js         # Design system colors
│   ├── assets/                   # App icons and images
│   ├── .env.example              # API URL configuration
│   ├── .gitignore
│   ├── App.js                    # App entry point
│   ├── app.json                  # Expo configuration
│   ├── babel.config.js
│   └── package.json
│
├── DESIGN_GUIDE.md               # Complete design documentation
└── README.md                     # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB Atlas** account (free tier works perfectly)
- **Expo Go** app on your phone (iOS/Android)

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env
   ```

4. **Configure MongoDB**
   - Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Get your connection string
   - Update `.env`:
     ```env
     MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hidayath?retryWrites=true&w=majority
     PORT=5000
     NODE_ENV=development
     ```

5. **Seed the database**
   ```bash
   npm run seed
   ```
   Expected output:
   ```
   ✅ Successfully seeded 30 verses!
   📊 Verses by emotion:
      happy: 4 verses
      sad: 4 verses
      angry: 4 verses
      stressed: 5 verses
      depressed: 4 verses
      anxious: 4 verses
      confused: 4 verses
   ```

6. **Start the server**
   ```bash
   npm run dev
   ```
   Server will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env
   ```

4. **Configure API URL**
   
   For local testing, update `.env`:
   
   **For iOS Simulator:**
   ```env
   API_BASE_URL=http://localhost:5000
   ```
   
   **For Android Emulator:**
   ```env
   API_BASE_URL=http://10.0.2.2:5000
   ```
   
   **For Physical Device:**
   ```env
   API_BASE_URL=http://YOUR_COMPUTER_IP:5000
   ```
   *Replace YOUR_COMPUTER_IP with your actual local IP (find with `ipconfig` on Windows or `ifconfig` on Mac/Linux)*

5. **Start Expo**
   ```bash
   npm start
   ```

6. **Run on device**
   - Scan QR code with **Expo Go** app (Android) or **Camera** app (iOS)
   - Or press `i` for iOS Simulator, `a` for Android Emulator

## 🔌 API Endpoints

### Base URL
```
http://localhost:5000
```

### Endpoints

| Method | Endpoint | Description | Response |
|--------|----------|-------------|----------|
| GET | `/` | API information | Server info and available endpoints |
| GET | `/api/verses` | Get all verses | Array of all verses |
| GET | `/api/verses/:emotion` | Get random verse by emotion | Single random verse |
| GET | `/api/verses/all/:emotion` | Get all verses for emotion | Array of verses for emotion |

### Valid Emotions
- `happy`
- `sad`
- `angry`
- `stressed`
- `depressed`
- `anxious`
- `confused`

### Example API Response

```json
{
  "success": true,
  "data": {
    "_id": "...",
    "emotion": "happy",
    "arabic": "فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا",
    "english": "For indeed, with hardship will be ease.",
    "surah": "Ash-Sharh",
    "ayah": "94:5-6",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

### Testing API with cURL

```bash
# Get server info
curl http://localhost:5000

# Get random verse for 'happy' emotion
curl http://localhost:5000/api/verses/happy

# Get all verses
curl http://localhost:5000/api/verses
```

## 🎨 Design System

### Color Palette

The app uses a premium dark theme:

```javascript
Primary Colors:
- Deep Navy: #0A1628
- Charcoal Black: #1A1F2E
- Emerald Green: #10B981
- Soft Teal: #14B8A6
- Gold: #F59E0B
- Warm Gold: #FCD34D

Emotion Colors:
- Happy: #FCD34D (Warm Yellow)
- Sad: #60A5FA (Soft Blue)
- Angry: #EF4444 (Deep Red)
- Anxious: #A78BFA (Purple)
- Stressed: #FB923C (Orange)
- Depressed: #0D9488 (Dark Teal)
- Confused: #818CF8 (Indigo)
```

See [DESIGN_GUIDE.md](file:///Users/shahidnoushad/Documents/Hidayath/DESIGN_GUIDE.md) for complete design documentation.

## 📸 Screenshots

The app features:
- Beautiful emotion selection grid
- Elegant Arabic calligraphy display
- Smooth animations and transitions
- Dark theme for comfortable viewing
- Islamic geometric patterns

## 🧪 Testing

### Backend Testing

1. **Check MongoDB connection:**
   ```bash
   cd backend
   npm run dev
   ```
   Look for: `✅ MongoDB Connected`

2. **Test API endpoint:**
   ```bash
   curl http://localhost:5000/api/verses/happy
   ```

### Frontend Testing

1. **Test on iOS Simulator:**
   ```bash
   cd frontend
   npm start
   # Press 'i' for iOS
   ```

2. **Test on Android Emulator:**
   ```bash
   npm start
   # Press 'a' for Android
   ```

3. **Test features:**
   - ✅ Tap each emotion card
   - ✅ Verify verse displays with Arabic + English
   - ✅ Save verse to favorites
   - ✅ Check favorites screen
   - ✅ Share verse
   - ✅ Delete from favorites

## 🔧 Troubleshooting

### Backend Issues

**MongoDB Connection Failed:**
- Check your MongoDB Atlas connection string
- Ensure IP whitelist includes your current IP
- Verify username/password are correct

**Port Already in Use:**
```bash
# Change PORT in .env file
PORT=5001
```

### Frontend Issues

**Cannot Connect to API:**
- Ensure backend server is running
- Check API_BASE_URL in frontend `.env`
- For physical device, use computer's local IP
- Disable firewall temporarily for testing

**Expo Not Starting:**
```bash
# Clear Expo cache
npx expo start -c
```

## 🚀 Deployment

### Backend Deployment (Render/Railway/Heroku)

1. Push code to GitHub
2. Connect repository to hosting platform
3. Set environment variables (MONGODB_URI, PORT)
4. Deploy!

### Frontend Deployment

**Build for Production:**
```bash
# iOS
eas build --platform ios

# Android
eas build --platform android

# Both
eas build --platform all
```

See [Expo EAS Build](https://docs.expo.dev/build/setup/) for detailed instructions.

## 📚 Future Improvements

- [ ] 🔊 Audio recitation of verses
- [ ] 🌐 Multi-language support (Malayalam, Urdu, etc.)
- [ ] 🔔 Daily verse notifications
- [ ] 📊 Mood tracking over time
- [ ] 🎨 Customizable themes
- [ ] 🔍 Search verses by keyword
- [ ] 📱 Widget for quick access
- [ ] 🌙 Dark/Light mode toggle
- [ ] 🎯 Verse of the day feature
- [ ] 💬 Community sharing features

## 📄 License

MIT License - feel free to use this project for learning or personal use.

## 🤲 Islamic Disclaimer

This app provides Quran verses as emotional support and guidance. For complete understanding and context, please consult the full Quran and seek knowledge from qualified Islamic scholars. All translations are provided for general understanding and should not replace proper Quranic study.

## 👨‍💻 Author

Built with ❤️ for spiritual wellbeing

May Allah guide us all to the straight path.

---

## 🆘 Support

For issues or questions:
- Check existing issues on GitHub
- Review the troubleshooting section
- Ensure all dependencies are correctly installed

## 📝 Notes

- The app includes 30 authentic Quran verses (4-5 per emotion)
- All verses include Arabic text, English translation, and references
- Favorites are stored locally using AsyncStorage
- Backend uses ES modules (import/export syntax)
- Frontend uses Expo managed workflow for easy setup

---

**Made with intention of serving the Muslim community 🌙**
# Hidayath
