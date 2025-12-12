// Firebase Configuration
// REPLACE WITH YOUR FIREBASE PROJECT CREDENTIALS

const firebaseConfig = {
    apiKey: ",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
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
