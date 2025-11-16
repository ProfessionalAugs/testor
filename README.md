# 🎮 KIDO QUEST - AI Agent for Kids Learning with Fun

A complete web-based learning platform for children aged 3-5 years with AI chat, voice interaction, animated lessons, games, and multilingual support.

## ✨ Features

### 🔐 Authentication System
- Parent login/signup with Firebase Auth
- Child profile management
- Multiple child profiles per parent
- Guest mode for quick access
- Avatar selection for each child

### 🗣️ Voice & TTS System
- **4 Voice Types**: Male Narrator, Female Narrator, Child Voice, Cartoon Character
- Text-to-Speech using Web Speech API
- Speech Recognition for voice commands
- **5 Languages**: English, Hindi, Spanish, French, Russian
- Voice-controlled navigation

### 📚 Interactive Lessons
- **Alphabet (A-Z)**: Learn letters with visual aids and pronunciation
- **Counting (1-10)**: Numbers with interactive counting objects
- **Animals**: Learn animal names and sounds
- **Birds**: Discover different bird species
- **Safety Education**: Good Touch/Bad Touch (parent-gated)

### 🎮 Educational Games
- Letter Pop
- Shape Match
- Count & Drag
- Animal Sound Match
- Bird Name Match
- Color Splash
- Leaderboard system
- Progress tracking

### 💬 AI Chatbot
- Kid-safe conversational AI
- Intent classification
- Cloud fallback with parent permission
- Natural language understanding

### 🎨 Kid-Friendly UI
- Large, colorful buttons
- High-contrast mode support
- Reduced motion support
- Touch-optimized
- Fully responsive (works on all devices)

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Firebase account (free tier works)
- Text editor for configuration

### Setup Instructions

#### 1. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project (name it "kido-quest")
3. Enable Authentication:
   - Go to Authentication > Sign-in method
   - Enable "Email/Password"
4. Create Firestore Database:
   - Go to Firestore Database > Create database
   - Start in "test mode" (you can secure it later)
5. Get your Firebase config:
   - Go to Project Settings > General
   - Scroll to "Your apps" > Web app
   - Copy the firebaseConfig object

#### 2. Configure the App

Open `js/firebase-config.js` and replace with your Firebase credentials:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_ACTUAL_API_KEY",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "your-app-id"
};
```

#### 3. Deploy to GitHub Pages

1. Create a new repository on GitHub
2. Upload all files:
```bash
git init
git add .
git commit -m "Initial commit - Kido Quest"
git remote add origin https://github.com/YOUR_USERNAME/kido-quest.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings > Pages
   - Source: Deploy from branch "main"
   - Folder: / (root)
   - Click Save

4. Your site will be live at: `https://YOUR_USERNAME.github.io/kido-quest/`

#### 4. Alternative Hosting Options

**Netlify (Easiest)**:
1. Drag and drop the entire `kido-quest` folder to [Netlify Drop](https://app.netlify.com/drop)
2. Get instant URL

**Vercel**:
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in the project folder
3. Follow prompts

**Firebase Hosting**:
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## 📁 Project Structure

```
kido-quest/
├── index.html              # Login page
├── dashboard.html          # Child profile selector
├── home.html              # Main navigation
├── css/
│   ├── main.css           # Global styles
│   ├── login.css          # Login page styles
│   ├── lessons.css        # Lesson page styles
│   └── games.css          # Game styles
├── js/
│   ├── firebase-config.js # Firebase configuration
│   ├── auth.js            # Authentication logic
│   ├── dashboard.js       # Profile management
│   ├── home.js            # Home page logic
│   ├── tts-engine.js      # Text-to-Speech engine
│   ├── speech-recognition.js # Voice commands
│   ├── lesson-player.js   # Lesson controller
│   ├── game-engine.js     # Game logic
│   ├── chatbot.js         # AI chatbot
│   └── i18n.js            # Internationalization
├── lessons/
│   ├── alphabet.html      # ABC lesson
│   ├── counting.html      # Numbers lesson
│   ├── animals.html       # Animals lesson
│   ├── birds.html         # Birds lesson
│   └── safety.html        # Safety education
├── games/
│   ├── letter-pop.html    # Letter popping game
│   ├── shape-match.html   # Shape matching game
│   ├── count-drag.html    # Counting game
│   ├── animal-sound.html  # Animal sounds game
│   ├── bird-match.html    # Bird matching game
│   └── color-splash.html  # Color game
├── assets/
│   ├── data/
│   │   ├── alphabet-data.js  # Alphabet content
│   │   ├── counting-data.js  # Number content
│   │   ├── animals-data.js   # Animal content
│   │   ├── birds-data.js     # Bird content
│   │   └── intents.json      # Chatbot intents
│   ├── audio/
│   │   ├── bgm/           # Background music
│   │   └── sfx/           # Sound effects
│   └── images/
│       ├── avatars/       # Child avatars
│       └── ui/            # UI graphics
└── README.md
```

## 🎯 Usage Guide

### For Parents

1. **First Time Setup**:
   - Click "Create Account"
   - Enter your details
   - Create child profile(s)

2. **Adding Children**:
   - Select age (3-5 years)
   - Choose avatar
   - Select preferred language
   - Click "Create Profile"

3. **Monitoring Progress**:
   - Access progress dashboard
   - View completed lessons
   - Check game scores
   - See leaderboard rankings

### For Kids

1. **Starting**:
   - Parent selects their profile
   - Click on colorful buttons to learn

2. **Voice Commands**:
   - Click microphone button 🎤
   - Say: "alphabet", "numbers", "animals", "games"
   - Say: "play", "next", "back", "home"

3. **Learning**:
   - Follow the friendly voice
   - Click "Say It!" to hear again
   - Use arrow buttons to move forward/back

## 🌍 Language Support

Currently supports:
- **English** (en) - Full support
- **Hindi** (hi) - हिन्दी
- **Spanish** (es) - Español
- **French** (fr) - Français
- **Russian** (ru) - Русский

Adding a new language:
1. Add translations to `assets/data/alphabet-data.js`
2. Add TTS voice mapping in `js/tts-engine.js`
3. Update language selector in `dashboard.html`

## 🔒 Privacy & Safety

### COPPA Compliance
- No personal data collection from children
- Parental consent required
- Data minimization
- Parent access to all data

### Content Safety
- Age-appropriate content only
- Parental controls for sensitive topics
- No external links accessible to children
- Moderated AI responses

### Data Storage
- Firestore: User profiles, progress
- Local Storage: Current session only
- No cookies except Firebase Auth
- Offline-first architecture

## 🛠️ Customization

### Change Colors
Edit `css/main.css`:
```css
:root {
    --primary: #FF6B6B;    /* Main color */
    --secondary: #4ECDC4;  /* Secondary */
    --accent: #FFE66D;     /* Accent */
}
```

### Add New Lessons
1. Create HTML file in `lessons/`
2. Add data file in `assets/data/`
3. Add nav button in `home.html`
4. Update `lesson-player.js`

### Add Sound Effects
1. Add MP3 files to `assets/audio/sfx/`
2. Use: `playSound('filename')`

## 📊 Firebase Database Structure

```javascript
// Firestore Collections

parents/{userId}
  ├── name: string
  ├── email: string
  ├── createdAt: timestamp
  └── children: array
      ├── name: string
      ├── age: number
      ├── avatar: string
      ├── language: string
      └── progress: object

progress/{progressId}
  ├── userId: string
  ├── childName: string
  ├── lesson: string
  ├── completedAt: timestamp
  └── score: number

leaderboard/{entryId}
  ├── childName: string
  ├── game: string
  ├── score: number
  └── date: timestamp
```

## 🐛 Troubleshooting

### Voice not working?
- **Chrome/Edge**: Microphone permission required
- **Safari**: May need HTTPS
- **Firefox**: Check browser support

### Firebase errors?
- Check `firebase-config.js` is updated
- Verify Firestore rules allow read/write
- Ensure Authentication is enabled

### Sound not playing?
- User must interact with page first (browser policy)
- Check audio files exist in `assets/audio/`
- Verify file format is MP3

## 📱 Browser Support

- ✅ Chrome 90+ (Recommended)
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎓 Educational Standards

Aligned with:
- Early Childhood Education standards
- Pre-K learning objectives
- Common Core readiness skills
- Social-emotional learning (SEL)

## 📄 License

This project is provided as-is for educational purposes.

## 🤝 Contributing

To add features:
1. Fork the repository
2. Create feature branch
3. Test thoroughly with kids 3-5
4. Submit pull request

## 📞 Support

For issues:
1. Check troubleshooting section
2. Review Firebase console for errors
3. Check browser console (F12)
4. Create GitHub issue with details

## 🎉 Acknowledgments

Built with:
- Firebase (Backend)
- Web Speech API (Voice)
- Lottie (Animations)
- Love for kids' education ❤️

---

**Made with 💙 for curious little minds**
