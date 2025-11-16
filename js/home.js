// Home Page Functionality

let childProfile = null;

// Load child profile on page load
window.addEventListener('DOMContentLoaded', () => {
    loadChildProfile();
    greetChild();
});

// Load child profile from localStorage
function loadChildProfile() {
    const profileData = localStorage.getItem('childProfile');
    
    if (!profileData) {
        window.location.href = 'dashboard.html';
        return;
    }
    
    childProfile = JSON.parse(profileData);
    
    // Display profile
    document.getElementById('current-avatar').textContent = childProfile.avatar;
    document.getElementById('child-name').textContent = `Hi, ${childProfile.name}!`;
    
    // Set language
    setLanguage(childProfile.language || 'en');
}

// Greet child with TTS
function greetChild() {
    setTimeout(() => {
        const greetings = {
            en: `Hello ${childProfile.name}! What would you like to learn today?`,
            hi: `नमस्ते ${childProfile.name}! आज क्या सीखना चाहते हो?`,
            es: `¡Hola ${childProfile.name}! ¿Qué quieres aprender hoy?`,
            fr: `Bonjour ${childProfile.name}! Qu'est-ce que tu veux apprendre aujourd'hui?`,
            ru: `Привет ${childProfile.name}! Что ты хочешь изучать сегодня?`
        };
        
        const message = greetings[childProfile.language] || greetings.en;
        speak(message);
    }, 1000);
}

// Navigate to page
function navigate(page) {
    playSound('pop');
    window.location.href = page;
}

// Change profile
function changeProfile() {
    playSound('pop');
    localStorage.removeItem('childProfile');
    window.location.href = 'dashboard.html';
}

// Open settings
function openSettings() {
    playSound('pop');
    // TODO: Implement settings modal
    alert('Settings coming soon!');
}

// Toggle voice control
function toggleVoice() {
    const btn = document.getElementById('voice-btn');
    
    if (btn.classList.contains('listening')) {
        stopListening();
        btn.classList.remove('listening');
    } else {
        startListening();
        btn.classList.add('listening');
    }
}

// Play sound effect
function playSound(type) {
    const audio = new Audio(`assets/audio/sfx/${type}.mp3`);
    audio.volume = 0.5;
    audio.play().catch(e => console.log('Audio play failed'));
}

// Set language for app
function setLanguage(lang) {
    document.documentElement.lang = lang;
    // Language-specific content will be loaded via i18n
}
