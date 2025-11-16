// Speech Recognition - Voice Commands

class SpeechRecognizer {
    constructor() {
        // Check browser support
        this.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        
        if (!this.SpeechRecognition) {
            console.warn('Speech recognition not supported');
            return;
        }
        
        this.recognition = new this.SpeechRecognition();
        this.listening = false;
        this.setupRecognition();
    }
    
    setupRecognition() {
        // Get child's language
        const profile = JSON.parse(localStorage.getItem('childProfile') || '{}');
        const lang = profile.language || 'en';
        
        const langMap = {
            'en': 'en-US',
            'hi': 'hi-IN',
            'es': 'es-ES',
            'fr': 'fr-FR',
            'ru': 'ru-RU'
        };
        
        this.recognition.lang = langMap[lang] || 'en-US';
        this.recognition.continuous = false;
        this.recognition.interimResults = false;
        this.recognition.maxAlternatives = 1;
        
        // Event handlers
        this.recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript.toLowerCase();
            console.log('Heard:', transcript);
            this.handleCommand(transcript);
        };
        
        this.recognition.onerror = (event) => {
            console.error('Recognition error:', event.error);
            this.listening = false;
        };
        
        this.recognition.onend = () => {
            this.listening = false;
        };
    }
    
    start() {
        if (!this.recognition) {
            speak('Sorry, voice commands are not supported on your device');
            return;
        }
        
        if (!this.listening) {
            this.recognition.start();
            this.listening = true;
            playSound('listen');
            speak('I am listening');
        }
    }
    
    stop() {
        if (this.recognition && this.listening) {
            this.recognition.stop();
            this.listening = false;
        }
    }
    
    handleCommand(transcript) {
        // Navigation commands
        const commands = {
            // Lessons
            'alphabet': () => navigate('lessons/alphabet.html'),
            'abc': () => navigate('lessons/alphabet.html'),
            'letters': () => navigate('lessons/alphabet.html'),
            
            'numbers': () => navigate('lessons/counting.html'),
            'counting': () => navigate('lessons/counting.html'),
            'count': () => navigate('lessons/counting.html'),
            
            'animals': () => navigate('lessons/animals.html'),
            'animal': () => navigate('lessons/animals.html'),
            
            'birds': () => navigate('lessons/birds.html'),
            'bird': () => navigate('lessons/birds.html'),
            
            // Games
            'game': () => navigate('games/letter-pop.html'),
            'games': () => navigate('games/letter-pop.html'),
            'play': () => navigate('games/letter-pop.html'),
            
            // Chat
            'chat': () => navigate('chat.html'),
            'talk': () => navigate('chat.html'),
            'friend': () => navigate('chat.html'),
            
            // Navigation
            'home': () => navigate('home.html'),
            'back': () => window.history.back(),
            'go back': () => window.history.back(),
            
            // Progress
            'progress': () => navigate('progress.html'),
            'stars': () => navigate('progress.html'),
            'achievements': () => navigate('progress.html')
        };
        
        // Check for exact matches
        for (const [key, action] of Object.entries(commands)) {
            if (transcript.includes(key)) {
                playSound('pop');
                action();
                return;
            }
        }
        
        // If no match, try chatbot
        if (typeof processChatMessage === 'function') {
            processChatMessage(transcript);
        } else {
            speak('I did not understand that. Try saying alphabet, numbers, animals, or games');
        }
    }
}

// Initialize Speech Recognition
const speechRecognizer = new SpeechRecognizer();

// Global functions
function startListening() {
    speechRecognizer.start();
}

function stopListening() {
    speechRecognizer.stop();
}

// Export
window.speechRecognizer = speechRecognizer;
window.startListening = startListening;
window.stopListening = stopListening;
