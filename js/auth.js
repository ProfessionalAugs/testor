// Authentication Module

// Parent Login
async function parentLogin() {
    const email = document.getElementById('parent-email').value;
    const password = document.getElementById('parent-password').value;
    
    if (!email || !password) {
        showError('Please enter email and password');
        return;
    }
    
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        console.log('Login successful:', userCredential.user.uid);
        window.location.href = 'dashboard.html';
    } catch (error) {
        showError(getErrorMessage(error.code));
    }
}

// Parent Signup
async function parentSignup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;
    
    if (!name || !email || !password || !confirm) {
        showError('Please fill all fields');
        return;
    }
    
    if (password.length < 6) {
        showError('Password must be at least 6 characters');
        return;
    }
    
    if (password !== confirm) {
        showError('Passwords do not match');
        return;
    }
    
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        
        // Update profile
        await user.updateProfile({ displayName: name });
        
        // Create user document
        await db.collection('parents').doc(user.uid).set({
            name: name,
            email: email,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            children: []
        });
        
        console.log('Account created:', user.uid);
        window.location.href = 'dashboard.html';
    } catch (error) {
        showError(getErrorMessage(error.code));
    }
}

// Guest Mode
function guestMode() {
    localStorage.setItem('guestMode', 'true');
    localStorage.setItem('childProfile', JSON.stringify({
        name: 'Guest',
        age: 4,
        avatar: 'default.png',
        language: 'en'
    }));
    window.location.href = 'home.html';
}

// UI Functions
function showLogin() {
    document.getElementById('parent-login').style.display = 'block';
    document.getElementById('parent-signup').style.display = 'none';
}

function showSignup() {
    document.getElementById('parent-login').style.display = 'none';
    document.getElementById('parent-signup').style.display = 'block';
}

function showError(message) {
    const errorDiv = document.getElementById('error-msg');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    setTimeout(() => {
        errorDiv.style.display = 'none';
    }, 5000);
}

function getErrorMessage(code) {
    const messages = {
        'auth/email-already-in-use': 'Email already registered',
        'auth/invalid-email': 'Invalid email address',
        'auth/weak-password': 'Password is too weak',
        'auth/user-not-found': 'No account found with this email',
        'auth/wrong-password': 'Incorrect password',
        'auth/too-many-requests': 'Too many attempts. Try again later'
    };
    return messages[code] || 'An error occurred. Please try again';
}

// Check if already logged in
auth.onAuthStateChanged((user) => {
    if (user && window.location.pathname.includes('index.html')) {
        window.location.href = 'dashboard.html';
    }
});
