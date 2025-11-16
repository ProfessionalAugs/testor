# 🚀 DEPLOYMENT GUIDE - Kido Quest

## OPTION 1: GitHub Pages (Easiest - Recommended)

### Step-by-Step Instructions:

1. **Create GitHub Account** (if you don't have one)
   - Go to https://github.com
   - Sign up for free

2. **Create New Repository**
   - Click "+" in top right → "New repository"
   - Name: `kido-quest`
   - Public repository
   - Don't initialize with README (we have one)
   - Click "Create repository"

3. **Upload Files**
   
   **Method A: Using GitHub Web Interface**
   - On your new repository page
   - Click "uploading an existing file"
   - Drag and drop ALL files from the kido-quest folder
   - Commit changes

   **Method B: Using Git (if installed)**
   ```bash
   cd kido-quest
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/kido-quest.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Folder: "/ (root)"
   - Click "Save"

5. **Get Your Live URL**
   - Wait 2-3 minutes
   - Your site: `https://YOUR_USERNAME.github.io/kido-quest/`

---

## OPTION 2: Netlify (Super Easy)

1. Go to https://app.netlify.com/drop
2. Drag the entire `kido-quest` folder
3. Get instant URL like: `https://random-name-123.netlify.app`
4. Optional: Change domain name in Site settings

---

## OPTION 3: Vercel

1. Go to https://vercel.com
2. Sign up with GitHub
3. Import your `kido-quest` repository
4. Deploy automatically
5. Get URL like: `https://kido-quest.vercel.app`

---

## OPTION 4: Firebase Hosting

### Prerequisites:
- Node.js installed
- Firebase CLI

### Steps:

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in project
cd kido-quest
firebase init hosting

# When prompted:
# - Select your Firebase project
# - Public directory: . (current directory)
# - Single page app: No
# - Overwrite index.html: No

# Deploy
firebase deploy --only hosting
```

Your site: `https://YOUR_PROJECT.firebaseapp.com`

---

## ⚙️ FIREBASE SETUP (Required for all options)

### 1. Create Firebase Project

1. Go to https://console.firebase.google.com/
2. Click "Add project"
3. Name: "kido-quest" (or your choice)
4. Disable Google Analytics (optional)
5. Click "Create project"

### 2. Enable Authentication

1. In Firebase Console → Authentication
2. Click "Get started"
3. Sign-in method → Email/Password
4. Enable Email/Password
5. Click "Save"

### 3. Create Firestore Database

1. In Firebase Console → Firestore Database
2. Click "Create database"
3. Start in "Test mode" (we'll secure later)
4. Choose location (closest to your users)
5. Click "Enable"

### 4. Get Firebase Config

1. In Firebase Console → Project Settings (gear icon)
2. Scroll to "Your apps"
3. Click Web icon (</>) to add web app
4. Register app name: "Kido Quest"
5. Copy the `firebaseConfig` object

### 5. Update Your Code

Open `js/firebase-config.js` and replace:

```javascript
const firebaseConfig = {
    apiKey: "PASTE_YOUR_API_KEY_HERE",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

### 6. Security Rules (Important!)

In Firestore → Rules, paste:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Parents collection
    match /parents/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Progress collection
    match /progress/{progressId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
    
    // Leaderboard collection
    match /leaderboard/{entryId} {
      allow read: if true; // Everyone can view leaderboard
      allow write: if request.auth != null;
    }
  }
}
```

Click "Publish"

---

## 📱 TESTING

### Before Going Live:

1. ✅ Test login/signup
2. ✅ Create child profile
3. ✅ Test each lesson (alphabet, counting)
4. ✅ Test voice commands (Chrome only)
5. ✅ Test games
6. ✅ Test on mobile device
7. ✅ Check Firebase data is saving

### Browser Testing:

- Chrome (recommended) ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Mobile browsers ✅

---

## 🔒 SECURITY CHECKLIST

- [ ] Firebase rules updated (not in test mode)
- [ ] API keys are public (this is okay for web)
- [ ] Authentication enabled
- [ ] Test user accounts work
- [ ] No sensitive data exposed
- [ ] COPPA compliance reviewed

---

## 🐛 COMMON ISSUES

### "Firebase not defined"
- Check `firebase-config.js` is loaded BEFORE other scripts
- Verify Firebase CDN scripts are present in HTML

### "Permission denied" in Firestore
- Update Firestore security rules
- Make sure user is logged in

### Voice commands not working
- Only works in Chrome/Edge
- Requires HTTPS (GitHub Pages has this)
- Microphone permission needed

### Sounds not playing
- Browser must interact with page first
- Audio files must exist in `assets/audio/sfx/`
- Use free sounds from freesound.org

---

## 📊 MONITORING

### Firebase Console:
- **Authentication**: See user signups
- **Firestore**: View all data
- **Usage**: Check free tier limits

### Free Tier Limits:
- Authentication: 10K phone auth/month
- Firestore: 1GB storage, 50K reads/day
- Hosting: 10GB transfer/month

---

## 🎉 YOU'RE LIVE!

Share your app:
- `https://YOUR_USERNAME.github.io/kido-quest/`

Promote it:
- Social media
- Parent groups
- Educational forums
- Teacher networks

---

## 📞 SUPPORT

If you need help:
1. Check browser console (F12) for errors
2. Review Firebase console for data issues
3. Test in incognito mode
4. Clear cache and reload

Happy Teaching! 🎓
