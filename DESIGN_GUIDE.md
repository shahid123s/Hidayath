# Hidayath - Complete Design Guide
## Islamic Emotional Guidance App

A spiritual mobile application helping users find peace and guidance through Quran verses based on their emotional state.

---

## 🎨 Color Palette

### Primary Colors
| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Deep Navy | `#0A1628` | Primary background |
| Charcoal Black | `#1A1F2E` | Secondary background |
| Emerald Green | `#10B981` | Primary accent, active states |
| Soft Teal | `#14B8A6` | Secondary accent, highlights |
| Gold | `#F59E0B` | Premium accents, borders |
| Warm Gold | `#FCD34D` | Text highlights, icons |

### Neutral Colors
| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Pure White | `#FFFFFF` | Primary text (Arabic & English) |
| Light Gray | `#E5E7EB` | Secondary text |
| Soft Gray | `#9CA3AF` | Tertiary text, timestamps |
| Dark Overlay | `#000000` (20% opacity) | Card overlays |

### Emotion-Specific Colors
| Emotion | Primary Color | Hex Code |
|---------|--------------|----------|
| Happiness | Warm Yellow | `#FCD34D` |
| Sadness | Soft Blue | `#60A5FA` |
| Anger | Deep Red | `#EF4444` |
| Anxiety | Purple | `#A78BFA` |
| Stress | Orange | `#FB923C` |
| Depression | Dark Teal | `#0D9488` |
| Confusion | Indigo | `#818CF8` |

---

## 📝 Typography

### Arabic Text (Quranic Verses)
- **Primary Font**: Noto Nastaliq Urdu / Amiri / Traditional Arabic
- **Font Weight**: Regular (400) for body, Bold (700) for emphasis
- **Font Size**: 
  - Verse Display: 28-32px
  - Card Preview: 18-20px
- **Line Height**: 1.8-2.0 for readability
- **Color**: `#F59E0B` (Gold) or `#FFFFFF` (White)

### English Text
- **Primary Font**: Inter / Poppins / Outfit
- **Font Weights**: 
  - Light (300): Descriptions
  - Regular (400): Body text
  - Medium (500): Subheadings
  - Semibold (600): Headers
  - Bold (700): Emphasis
- **Font Sizes**:
  - H1 (Page Titles): 28-32px
  - H2 (Section Headers): 22-24px
  - Body Text: 16px
  - Small Text (References): 13-14px
  - Micro Text (Timestamps): 11-12px

### Font Pairing Example
```css
/* Headers */
font-family: 'Inter', sans-serif;
font-weight: 600;

/* Arabic Verses */
font-family: 'Amiri', 'Traditional Arabic', serif;
font-weight: 400;

/* Body Text */
font-family: 'Inter', sans-serif;
font-weight: 400;
```

---

## 📱 UI Screen Breakdown

### 1. Splash Screen
**Purpose**: First impression, brand introduction

**Elements**:
- Dark gradient background (Deep Navy → Charcoal Black)
- Centered golden crescent moon with soft glow
- App name "Hidayath" in elegant calligraphy
- Subtitle: "Find Peace in Every Emotion"
- Subtle Islamic geometric patterns
- Smooth fade-in animation

**Visual Reference**:
![Splash Screen](/Users/shahidnoushad/.gemini/antigravity/brain/27219306-4658-44a6-9684-44025f818fd8/hidayath_splash_screen_1764543801951.png)

---

### 2. Emotion Selection Screen
**Purpose**: Main interface for users to select their current emotional state

**Layout**:
- **Header**: 
  - App logo/icon (top-left)
  - "How are you feeling?" text (center)
  - Profile/settings icon (top-right)
  
- **Emotion Cards Grid**: 
  - 2-3 columns responsive grid
  - Each card includes:
    - Expressive minimal icon
    - Emotion name
    - Soft glowing effect on hover/press
    - Gradient background (emotion-specific color + teal/emerald)
    - Gold accent border on active state
  
- **Emotions Included**:
  - 😊 Happiness (Yellow glow)
  - 😢 Sadness (Blue glow)
  - 😠 Anger (Red glow)
  - 😰 Anxiety (Purple glow)
  - 😫 Stress (Orange glow)
  - 😔 Depression (Dark Teal glow)
  - 🤔 Confusion (Indigo glow)

**Design Details**:
- Card border-radius: 16-20px
- Card padding: 24px
- Grid gap: 16px
- Subtle Islamic geometric pattern background
- Smooth scale animation on card press (0.95x)

**Visual Reference**:
![Emotion Selection Screen](/Users/shahidnoushad/.gemini/antigravity/brain/27219306-4658-44a6-9684-44025f818fd8/emotion_selection_screen_1764543848140.png)

---

### 3. Verse Display Screen
**Purpose**: Present the selected Quran verse with beautiful calligraphy and translation

**Layout**:
- **Header**:
  - Back button (left)
  - Selected emotion tag (center) - small pill with glow
  - Save/Heart icon (right) - toggleable favorite
  
- **Verse Container**:
  - Arabic calligraphy (large, gold color, centered)
  - Decorative separator (teal ornamental line)
  - English translation (white, readable, centered)
  - Surah & Ayah reference at bottom (small gold text)
  
- **Background**:
  - Dark gradient (navy to charcoal)
  - Subtle crescent moon watermark (15% opacity)
  - Soft radial glow behind text
  - Islamic geometric pattern border

**Interaction**:
- Swipe left/right for more verses (same emotion)
- Tap heart icon to save to favorites
- Long press for share options
- Smooth fade transition between verses

**Visual Reference**:
![Verse Display Screen](/Users/shahidnoushad/.gemini/antigravity/brain/27219306-4658-44a6-9684-44025f818fd8/verse_display_screen_1764543862394.png)

---

### 4. Complete App Interface with Tab Bar
**Purpose**: Navigation between main app sections

**Tab Bar Items** (Bottom Navigation):
1. **Emotions** 
   - Icon: Heart with pulse
   - Label: "Emotions"
   - Active state: Emerald green with glow
   
2. **Verse** 
   - Icon: Open book/scroll
   - Label: "Verse"
   - Active state: Emerald green with glow
   
3. **Favorites** 
   - Icon: Star/Bookmark
   - Label: "Saved"
   - Active state: Emerald green with glow

**Tab Bar Design**:
- Background: Dark overlay `#1A1F2E` with slight blur
- Height: 70px
- Icon size: 24px
- Active icon color: `#10B981` (Emerald)
- Inactive icon color: `#9CA3AF` (Soft gray)
- Active indicator: Soft glow effect

**Visual Reference**:
![Complete App Interface](/Users/shahidnoushad/.gemini/antigravity/brain/27219306-4658-44a6-9684-44025f818fd8/complete_app_interface_1764543877199.png)

---

### 5. Favorites/Saved Verses Screen
**Purpose**: Access previously saved verses

**Layout**:
- **Header**: "Saved Verses" with count badge
- **Filter Options**: By emotion (horizontal scrollable pills)
- **Verse Cards List**:
  - Arabic text preview (2 lines max)
  - English translation preview (2 lines max)
  - Emotion tag (colored pill)
  - Surah:Ayah reference
  - Save date/timestamp
  - Filled heart icon (gold)
  
**Card Design**:
- Background: Soft teal/emerald gradient
- Border radius: 12px
- Padding: 16px
- Soft shadow and glow
- Swipe left to delete

> [!NOTE]
> Favorites screen mockup could not be generated due to API quota limits. Design follows the same visual language as other screens.

---

## 🎯 Visual Identity Assets

### App Logo
Premium combination of:
- Glowing heart symbol (emotional connection)
- Crescent moon (Islamic symbol)
- Divine light rays (Quranic guidance)
- Gold and emerald accents
- Modern minimal aesthetic

![App Logo](/Users/shahidnoushad/.gemini/antigravity/brain/27219306-4658-44a6-9684-44025f818fd8/hidayath_app_logo_1764543770865.png)

---

### App Icon
**Specifications**:
- Format: 1024x1024px (iOS/Android standard)
- Style: Rounded square
- Background: Navy to charcoal gradient
- Symbol: Golden crescent embracing glowing heart
- Accents: Emerald and teal highlights
- Pattern: Subtle Islamic geometry

![App Icon](/Users/shahidnoushad/.gemini/antigravity/brain/27219306-4658-44a6-9684-44025f818fd8/hidayath_app_icon_1764543786104.png)

---

### Promotional Poster
**Marketing Material** featuring:
- Smartphone mockup showing app interface
- "Hidayath - A Spiritual Gift" headline
- Tagline: "Emotional Comfort Through Quran Guidance"
- "Find Peace in Every Emotion" subheading
- App icon in corner
- Dark elegant background with Islamic patterns
- Gold and emerald accents

**Use Cases**:
- Social media marketing
- App Store screenshots
- Community outreach
- Print materials for mosques/Islamic centers

![Promotional Poster](/Users/shahidnoushad/.gemini/antigravity/brain/27219306-4658-44a6-9684-44025f818fd8/hidayath_promo_poster_1764543817728.png)

---

## 🌟 Design Principles

### 1. Peaceful & Calming
- Soft gradients, no harsh contrasts
- Gentle glowing effects
- Smooth animations (300-500ms)
- Comfortable spacing (16px, 24px, 32px system)

### 2. Spiritual Connection
- Islamic geometric patterns (subtle, non-intrusive)
- Crescent moon symbolism
- Light beam elements representing divine guidance
- Respectful presentation of Quranic text

### 3. Emotional Support
- Warm, comforting color temperatures
- Emotion-specific color coding for quick recognition
- Expressive but minimal iconography
- Accessible, readable typography

### 4. Premium Quality
- Modern, sophisticated aesthetic
- High-quality typography pairing
- Attention to detail in spacing and alignment
- Professional polish in all elements

### 5. Accessibility
- High contrast text (white on dark)
- Readable font sizes (minimum 14px)
- Clear touch targets (minimum 44x44px)
- Color not sole indicator of state

---

## 🎭 UI Component Specifications

### Emotion Cards
```css
.emotion-card {
  width: 160px;
  height: 160px;
  border-radius: 20px;
  padding: 24px;
  background: linear-gradient(135deg, emotion-color, #14B8A6);
  border: 2px solid transparent;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.emotion-card:hover {
  transform: scale(1.05);
  border-color: #F59E0B;
  box-shadow: 0 12px 32px rgba(245, 158, 11, 0.3);
}

.emotion-card:active {
  transform: scale(0.95);
}
```

### Verse Container
```css
.verse-container {
  background: linear-gradient(180deg, #0A1628, #1A1F2E);
  border-radius: 24px;
  padding: 32px;
  margin: 16px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
}

.verse-container::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.1), transparent);
  pointer-events: none;
}
```

### Tab Bar
```css
.tab-bar {
  height: 70px;
  background: rgba(26, 31, 46, 0.95);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: #9CA3AF;
  transition: all 0.3s ease;
}

.tab-item.active {
  color: #10B981;
  filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.6));
}
```

---

## 📐 Spacing System

**Base Unit**: 4px

| Size | Value | Usage |
|------|-------|-------|
| xs | 4px | Icon padding, minimal gaps |
| sm | 8px | Text line gaps |
| md | 16px | Card gaps, standard padding |
| lg | 24px | Section padding |
| xl | 32px | Screen margins |
| 2xl | 48px | Large separators |

---

## 🎬 Animation Guidelines

### Micro-interactions
- **Duration**: 200-300ms
- **Easing**: cubic-bezier(0.4, 0.0, 0.2, 1)
- **Examples**: Button press, icon toggle, card hover

### Transitions
- **Duration**: 400-500ms
- **Easing**: ease-in-out
- **Examples**: Screen navigation, verse change, tab switch

### Atmospheric Effects
- **Duration**: 2000-3000ms
- **Easing**: linear or ease-in-out
- **Examples**: Glow pulse, pattern movement, gradient shift

---

## 🌍 Target Audience Considerations

### Malayali Muslim Users
- **Language**: Support for Malayalam, Arabic, and English
- **Cultural Sensitivity**: Respectful Islamic design elements
- **Age Range**: 18-55 (diverse tech literacy)
- **Use Context**: Personal reflection, daily emotional check-ins, seeking comfort

### Accessibility Features
- Dark mode optimized (default)
- Large, readable text
- Clear visual hierarchy
- Simple, intuitive navigation
- Optional text size adjustment

---

## 📱 Technical Specifications

### Supported Platforms
- iOS 13+
- Android 8.0+

### Screen Sizes
- Mobile: 375px - 428px (width)
- Tablet (future): 768px - 1024px

### Safe Areas
- Top: 44px (status bar + notch)
- Bottom: 34px (home indicator)
- Sides: 16px minimum

---

## ✨ Key Features Summary

1. **Emotion-Based Search**: Select emotion → Get relevant verse
2. **Beautiful Presentation**: Arabic calligraphy + clean translation
3. **Save Favorites**: Bookmark meaningful verses
4. **Daily Reflection**: Return to saved verses anytime
5. **Spiritual Growth**: Build emotional resilience through Quranic guidance

---

## 🎨 Brand Voice & Messaging

### Tone
- Warm, compassionate, supportive
- Peaceful, non-judgmental
- Spiritually uplifting
- Simple, clear language

### Example Messages
- "How are you feeling today?"
- "Let the Quran guide your heart"
- "Find peace in these words"
- "Your emotions are understood"
- "Saved to your spiritual journey"

---

> [!IMPORTANT]
> This design guide represents a **complete, cohesive visual system** for Hidayath. All design decisions prioritize emotional comfort, spiritual connection, and premium quality to serve Malayali Muslim users seeking guidance through Quran verses.

---

*Design created for Hidayath - Islamic Emotional Guidance App*
