// Firebase Configuration
// REPLACE WITH YOUR FIREBASE PROJECT CREDENTIALS

const firebaseConfig = {
    apiKey: "AIzaSyBnJx5FnoOwodCT-QQN5CiBicsmd7vhs5M",
    authDomain: "kido-quest.firebaseapp.com",
    projectId: "kido-quest",
    storageBucket: "kido-quest.firebasestorage.app",
    messagingSenderId: "96018257746",
    appId: "1:96018257746:web:fbcfee7a5e050cb2b10c8b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase Services
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// Enable offline persistence
db.enablePersistence()
    .catch((err) => {
        console.warn('Offline mode not available:', err);
    });

console.log('Firebase initialized successfully');
