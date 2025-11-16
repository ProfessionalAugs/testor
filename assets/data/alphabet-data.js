// Alphabet Data - A to Z with multilingual support

const alphabetData = {
    en: [
        { letter: 'A', word: 'Apple', emoji: '🍎', phrase: 'A for Apple' },
        { letter: 'B', word: 'Ball', emoji: '⚽', phrase: 'B for Ball' },
        { letter: 'C', word: 'Cat', emoji: '🐱', phrase: 'C for Cat' },
        { letter: 'D', word: 'Dog', emoji: '🐶', phrase: 'D for Dog' },
        { letter: 'E', word: 'Elephant', emoji: '🐘', phrase: 'E for Elephant' },
        { letter: 'F', word: 'Fish', emoji: '🐟', phrase: 'F for Fish' },
        { letter: 'G', word: 'Grapes', emoji: '🍇', phrase: 'G for Grapes' },
        { letter: 'H', word: 'House', emoji: '🏠', phrase: 'H for House' },
        { letter: 'I', word: 'Ice Cream', emoji: '🍦', phrase: 'I for Ice Cream' },
        { letter: 'J', word: 'Juice', emoji: '🧃', phrase: 'J for Juice' },
        { letter: 'K', word: 'Kite', emoji: '🪁', phrase: 'K for Kite' },
        { letter: 'L', word: 'Lion', emoji: '🦁', phrase: 'L for Lion' },
        { letter: 'M', word: 'Monkey', emoji: '🐵', phrase: 'M for Monkey' },
        { letter: 'N', word: 'Nest', emoji: '🪹', phrase: 'N for Nest' },
        { letter: 'O', word: 'Orange', emoji: '🍊', phrase: 'O for Orange' },
        { letter: 'P', word: 'Penguin', emoji: '🐧', phrase: 'P for Penguin' },
        { letter: 'Q', word: 'Queen', emoji: '👸', phrase: 'Q for Queen' },
        { letter: 'R', word: 'Rainbow', emoji: '🌈', phrase: 'R for Rainbow' },
        { letter: 'S', word: 'Sun', emoji: '☀️', phrase: 'S for Sun' },
        { letter: 'T', word: 'Tiger', emoji: '🐯', phrase: 'T for Tiger' },
        { letter: 'U', word: 'Umbrella', emoji: '☂️', phrase: 'U for Umbrella' },
        { letter: 'V', word: 'Van', emoji: '🚐', phrase: 'V for Van' },
        { letter: 'W', word: 'Watch', emoji: '⌚', phrase: 'W for Watch' },
        { letter: 'X', word: 'Xylophone', emoji: '🎵', phrase: 'X for Xylophone' },
        { letter: 'Y', word: 'Yo-Yo', emoji: '🪀', phrase: 'Y for Yo-Yo' },
        { letter: 'Z', word: 'Zebra', emoji: '🦓', phrase: 'Z for Zebra' }
    ],
    
    hi: [
        { letter: 'अ', word: 'अनार', emoji: '🍎', phrase: 'अ से अनार' },
        { letter: 'आ', word: 'आम', emoji: '🥭', phrase: 'आ से आम' },
        { letter: 'इ', word: 'इमली', emoji: '🌿', phrase: 'इ से इमली' },
        { letter: 'ई', word: 'ईख', emoji: '🌾', phrase: 'ई से ईख' },
        { letter: 'उ', word: 'उल्लू', emoji: '🦉', phrase: 'उ से उल्लू' }
        // Add more Hindi letters as needed
    ],
    
    es: [
        { letter: 'A', word: 'Avión', emoji: '✈️', phrase: 'A de Avión' },
        { letter: 'B', word: 'Bola', emoji: '⚽', phrase: 'B de Bola' },
        { letter: 'C', word: 'Casa', emoji: '🏠', phrase: 'C de Casa' }
        // Add more Spanish letters
    ],
    
    fr: [
        { letter: 'A', word: 'Avion', emoji: '✈️', phrase: 'A comme Avion' },
        { letter: 'B', word: 'Ballon', emoji: '⚽', phrase: 'B comme Ballon' },
        { letter: 'C', word: 'Chat', emoji: '🐱', phrase: 'C comme Chat' }
        // Add more French letters
    ],
    
    ru: [
        { letter: 'А', word: 'Арбуз', emoji: '🍉', phrase: 'А как Арбуз' },
        { letter: 'Б', word: 'Банан', emoji: '🍌', phrase: 'Б как Банан' },
        { letter: 'В', word: 'Волк', emoji: '🐺', phrase: 'В как Волк' }
        // Add more Russian letters
    ]
};

// Get alphabet for current language
function getAlphabet() {
    const profile = JSON.parse(localStorage.getItem('childProfile') || '{}');
    const lang = profile.language || 'en';
    return alphabetData[lang] || alphabetData.en;
}

// Export
window.alphabetData = alphabetData;
window.getAlphabet = getAlphabet;
