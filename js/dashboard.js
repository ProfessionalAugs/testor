// Dashboard - Child Profile Management

let selectedAvatar = '🦁';
let currentUser = null;

// Check authentication
auth.onAuthStateChanged(async (user) => {
    if (!user && !localStorage.getItem('guestMode')) {
        window.location.href = 'index.html';
        return;
    }
    
    currentUser = user;
    
    if (user) {
        document.querySelector('.welcome').textContent = `Welcome back, ${user.displayName || 'Parent'}!`;
        await loadProfiles();
    }
});

// Load existing profiles
async function loadProfiles() {
    const container = document.getElementById('profiles-container');
    container.innerHTML = '';
    
    try {
        const doc = await db.collection('parents').doc(currentUser.uid).get();
        const data = doc.data();
        
        if (data && data.children && data.children.length > 0) {
            data.children.forEach((child, index) => {
                const card = createProfileCard(child, index);
                container.appendChild(card);
            });
        } else {
            container.innerHTML = '<p style="color:white; font-size:24px; grid-column:1/-1;">No profiles yet. Create one to start!</p>';
        }
    } catch (error) {
        console.error('Error loading profiles:', error);
    }
}

// Create profile card element
function createProfileCard(child, index) {
    const card = document.createElement('div');
    card.className = 'profile-card';
    card.onclick = () => selectProfile(child);
    
    card.innerHTML = `
        <div class="avatar">${child.avatar}</div>
        <div class="profile-name">${child.name}</div>
        <div class="profile-age">${child.age} years old</div>
    `;
    
    return card;
}

// Select and load child profile
function selectProfile(child) {
    localStorage.setItem('childProfile', JSON.stringify(child));
    playSound('pop');
    window.location.href = 'home.html';
}

// Show create profile modal
function showCreateProfile() {
    document.getElementById('create-modal').style.display = 'block';
    playSound('pop');
}

// Close create profile modal
function closeCreateProfile() {
    document.getElementById('create-modal').style.display = 'none';
}

// Select avatar
function selectAvatar(emoji) {
    selectedAvatar = emoji;
    playSound('pop');
    
    // Visual feedback
    document.querySelectorAll('.avatar').forEach(av => {
        av.style.border = 'none';
    });
    event.target.style.border = '4px solid #FF6B6B';
}

// Create new child profile
async function createChildProfile() {
    const name = document.getElementById('child-name').value.trim();
    const age = document.getElementById('child-age').value;
    const language = document.getElementById('child-language').value;
    
    if (!name) {
        alert('Please enter child\'s name');
        return;
    }
    
    if (!age) {
        alert('Please select age');
        return;
    }
    
    const newChild = {
        name: name,
        age: parseInt(age),
        avatar: selectedAvatar,
        language: language,
        createdAt: new Date().toISOString(),
        progress: {
            lessonsCompleted: [],
            gamesPlayed: 0,
            totalScore: 0
        }
    };
    
    try {
        await db.collection('parents').doc(currentUser.uid).update({
            children: firebase.firestore.FieldValue.arrayUnion(newChild)
        });
        
        closeCreateProfile();
        await loadProfiles();
        playSound('success');
        alert(`Profile created for ${name}!`);
        
        // Reset form
        document.getElementById('child-name').value = '';
        document.getElementById('child-age').value = '';
        selectedAvatar = '🦁';
    } catch (error) {
        console.error('Error creating profile:', error);
        alert('Error creating profile. Please try again.');
    }
}

// Logout
async function logout() {
    try {
        await auth.signOut();
        localStorage.clear();
        window.location.href = 'index.html';
    } catch (error) {
        console.error('Logout error:', error);
    }
}

// Play sound effect
function playSound(type) {
    const audio = new Audio(`assets/audio/sfx/${type}.mp3`);
    audio.volume = 0.5;
    audio.play().catch(e => console.log('Audio play failed:', e));
}
