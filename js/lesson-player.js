// Lesson Player - Controls for all lessons

let currentIndex = 0;
let lessonData = [];
let lessonType = 'alphabet'; // or 'counting', 'animals', etc.

// Initialize lesson
window.addEventListener('DOMContentLoaded', () => {
    // Detect lesson type from URL
    const path = window.location.pathname;
    if (path.includes('alphabet')) {
        lessonType = 'alphabet';
        lessonData = getAlphabet();
    } else if (path.includes('counting')) {
        lessonType = 'counting';
        lessonData = getCountingData();
    } else if (path.includes('animals')) {
        lessonType = 'animals';
        lessonData = getAnimalsData();
    } else if (path.includes('birds')) {
        lessonType = 'birds';
        lessonData = getBirdsData();
    }
    
    displayCurrentItem();
    updateProgress();
});

// Display current lesson item
function displayCurrentItem() {
    const item = lessonData[currentIndex];
    
    if (lessonType === 'alphabet') {
        document.getElementById('big-letter').textContent = item.letter;
        document.getElementById('letter-word').textContent = item.phrase;
        document.querySelector('.letter-image').textContent = item.emoji;
    } else if (lessonType === 'counting') {
        document.getElementById('big-number').textContent = item.number;
        document.getElementById('number-word').textContent = item.word;
        displayCountingObjects(item.number, item.emoji);
    } else {
        // Generic display for animals/birds
        document.getElementById('big-letter').textContent = item.emoji;
        document.getElementById('letter-word').textContent = item.name;
    }
    
    // Update alphabet grid highlighting
    if (document.querySelectorAll('.letter-btn').length > 0) {
        document.querySelectorAll('.letter-btn').forEach((btn, index) => {
            btn.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Auto-speak after 500ms
    setTimeout(() => {
        speakCurrentLetter();
    }, 500);
}

// Display counting objects
function displayCountingObjects(count, emoji) {
    const container = document.querySelector('.counting-objects');
    if (!container) return;
    
    container.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const item = document.createElement('div');
        item.className = 'count-item';
        item.textContent = emoji;
        container.appendChild(item);
    }
}

// Speak current item
function speakCurrentLetter() {
    const item = lessonData[currentIndex];
    playSound('pop');
    
    if (lessonType === 'alphabet') {
        tts.speak(item.letter, {
            onEnd: () => {
                setTimeout(() => {
                    tts.speak(item.phrase);
                }, 300);
            }
        });
    } else if (lessonType === 'counting') {
        tts.speak(item.number.toString(), {
            onEnd: () => {
                setTimeout(() => {
                    tts.speak(item.word);
                }, 300);
            }
        });
    } else {
        tts.speak(item.name);
    }
}

// Next item
function nextLetter() {
    if (currentIndex < lessonData.length - 1) {
        currentIndex++;
        displayCurrentItem();
        updateProgress();
        playSound('pop');
    } else {
        // Completed lesson
        completedLesson();
    }
}

// Previous item
function previousLetter() {
    if (currentIndex > 0) {
        currentIndex--;
        displayCurrentItem();
        updateProgress();
        playSound('pop');
    }
}

// Jump to specific letter
function jumpToLetter(index) {
    if (index >= 0 && index < lessonData.length) {
        currentIndex = index;
        displayCurrentItem();
        updateProgress();
        playSound('pop');
    }
}

// Spell word letter by letter
function spellWord() {
    const item = lessonData[currentIndex];
    playSound('pop');
    
    if (lessonType === 'alphabet') {
        tts.spellWord(item.word);
    } else if (lessonType === 'counting') {
        tts.spellWord(item.word);
    }
}

// Play slowly
function playSlowly() {
    const item = lessonData[currentIndex];
    playSound('pop');
    
    tts.speak(item.phrase || item.name, {
        rate: 0.6,
        pitch: 1.0
    });
}

// Update progress bar
function updateProgress() {
    const percentage = ((currentIndex + 1) / lessonData.length) * 100;
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    
    if (progressBar) {
        progressBar.style.width = percentage + '%';
    }
    
    if (progressText) {
        if (lessonType === 'alphabet') {
            progressText.textContent = `Letter ${currentIndex + 1} of ${lessonData.length}`;
        } else if (lessonType === 'counting') {
            progressText.textContent = `Number ${currentIndex + 1} of ${lessonData.length}`;
        } else {
            progressText.textContent = `${currentIndex + 1} of ${lessonData.length}`;
        }
    }
}

// Lesson completed
async function completedLesson() {
    playSound('success');
    tts.speak('Congratulations! You completed the lesson!');
    
    // Save progress to Firebase
    await saveProgress(lessonType);
    
    // Show completion screen
    setTimeout(() => {
        if (confirm('Great job! Do you want to play again?')) {
            currentIndex = 0;
            displayCurrentItem();
            updateProgress();
        } else {
            goHome();
        }
    }, 3000);
}

// Save progress
async function saveProgress(lesson) {
    try {
        const profile = JSON.parse(localStorage.getItem('childProfile') || '{}');
        const user = firebase.auth().currentUser;
        
        if (!user) return;
        
        await db.collection('progress').add({
            userId: user.uid,
            childName: profile.name,
            lesson: lesson,
            completedAt: firebase.firestore.FieldValue.serverTimestamp(),
            score: 100
        });
    } catch (error) {
        console.error('Error saving progress:', error);
    }
}

// Navigate back to home
function goHome() {
    playSound('pop');
    window.location.href = '../home.html';
}

// Play sound effect
function playSound(type) {
    const audio = new Audio(`../assets/audio/sfx/${type}.mp3`);
    audio.volume = 0.5;
    audio.play().catch(e => console.log('Audio play failed'));
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        nextLetter();
    } else if (e.key === 'ArrowLeft') {
        previousLetter();
    } else if (e.key === 'Enter') {
        speakCurrentLetter();
    }
});
