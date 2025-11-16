// TTS Engine - Text to Speech with Multiple Voices

class TTSEngine {
    constructor() {
        this.synth = window.speechSynthesis;
        this.voices = [];
        this.currentVoice = null;
        this.speaking = false;
        
        // Wait for voices to load
        this.loadVoices();
        
        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = () => this.loadVoices();
        }
    }
    
    loadVoices() {
        this.voices = this.synth.getVoices();
        this.selectDefaultVoice();
    }
    
    selectDefaultVoice() {
        // Get child profile language
        const profile = JSON.parse(localStorage.getItem('childProfile') || '{}');
        const lang = profile.language || 'en';
        
        // Map language to voice
        const langMap = {
            'en': 'en-US',
            'hi': 'hi-IN',
            'es': 'es-ES',
            'fr': 'fr-FR',
            'ru': 'ru-RU'
        };
        
        const targetLang = langMap[lang] || 'en-US';
        
        // Find female voice for kids (more friendly)
        this.currentVoice = this.voices.find(v => 
            v.lang.startsWith(targetLang.split('-')[0]) && v.name.toLowerCase().includes('female')
        ) || this.voices.find(v => 
            v.lang.startsWith(targetLang.split('-')[0])
        ) || this.voices[0];
    }
    
    speak(text, options = {}) {
        if (this.speaking) {
            this.stop();
        }
        
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Voice settings
        utterance.voice = options.voice || this.currentVoice;
        utterance.rate = options.rate || 0.9; // Slightly slower for kids
        utterance.pitch = options.pitch || 1.1; // Slightly higher for friendly tone
        utterance.volume = options.volume || 1.0;
        
        // Callbacks
        utterance.onstart = () => {
            this.speaking = true;
            if (options.onStart) options.onStart();
        };
        
        utterance.onend = () => {
            this.speaking = false;
            if (options.onEnd) options.onEnd();
        };
        
        utterance.onerror = (event) => {
            console.error('TTS Error:', event);
            this.speaking = false;
        };
        
        this.synth.speak(utterance);
    }
    
    stop() {
        this.synth.cancel();
        this.speaking = false;
    }
    
    // Get available voice types
    getVoiceTypes() {
        return {
            maleNarrator: this.voices.find(v => v.name.toLowerCase().includes('male') && !v.name.toLowerCase().includes('female')),
            femaleNarrator: this.voices.find(v => v.name.toLowerCase().includes('female')),
            childVoice: this.voices[0], // Use high pitch setting
            cartoonCharacter: this.voices[0] // Use very high pitch
        };
    }
    
    // Preset voice styles
    speakAsMaleNarrator(text) {
        const voices = this.getVoiceTypes();
        this.speak(text, {
            voice: voices.maleNarrator,
            rate: 0.9,
            pitch: 0.8
        });
    }
    
    speakAsFemaleNarrator(text) {
        const voices = this.getVoiceTypes();
        this.speak(text, {
            voice: voices.femaleNarrator,
            rate: 0.9,
            pitch: 1.0
        });
    }
    
    speakAsChild(text) {
        this.speak(text, {
            rate: 1.0,
            pitch: 1.4
        });
    }
    
    speakAsCartoon(text) {
        this.speak(text, {
            rate: 1.1,
            pitch: 1.6
        });
    }
    
    // Spell out word letter by letter
    spellWord(word, delay = 800) {
        const letters = word.toUpperCase().split('');
        let index = 0;
        
        const spellNext = () => {
            if (index < letters.length) {
                this.speak(letters[index], {
                    onEnd: () => {
                        index++;
                        setTimeout(spellNext, delay);
                    }
                });
            } else {
                setTimeout(() => {
                    this.speak(word);
                }, 500);
            }
        };
        
        spellNext();
    }
}

// Initialize TTS Engine
const tts = new TTSEngine();

// Global speak function
function speak(text, options) {
    tts.speak(text, options);
}

// Export for other modules
window.tts = tts;
window.speak = speak;
