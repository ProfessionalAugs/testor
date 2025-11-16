// Counting Data - Numbers 1 to 10

const countingData = {
    en: [
        { number: 1, word: 'One', emoji: '⭐', phrase: 'One star' },
        { number: 2, word: 'Two', emoji: '🍎', phrase: 'Two apples' },
        { number: 3, word: 'Three', emoji: '🐱', phrase: 'Three cats' },
        { number: 4, word: 'Four', emoji: '🚗', phrase: 'Four cars' },
        { number: 5, word: 'Five', emoji: '✋', phrase: 'Five fingers' },
        { number: 6, word: 'Six', emoji: '🌸', phrase: 'Six flowers' },
        { number: 7, word: 'Seven', emoji: '🌈', phrase: 'Seven rainbow colors' },
        { number: 8, word: 'Eight', emoji: '🦋', phrase: 'Eight butterflies' },
        { number: 9, word: 'Nine', emoji: '⚽', phrase: 'Nine balls' },
        { number: 10, word: 'Ten', emoji: '🎈', phrase: 'Ten balloons' }
    ],
    
    hi: [
        { number: 1, word: 'एक', emoji: '⭐', phrase: 'एक तारा' },
        { number: 2, word: 'दो', emoji: '🍎', phrase: 'दो सेब' },
        { number: 3, word: 'तीन', emoji: '🐱', phrase: 'तीन बिल्लियाँ' },
        { number: 4, word: 'चार', emoji: '🚗', phrase: 'चार गाड़ियाँ' },
        { number: 5, word: 'पाँच', emoji: '✋', phrase: 'पाँच उंगलियाँ' },
        { number: 6, word: 'छः', emoji: '🌸', phrase: 'छः फूल' },
        { number: 7, word: 'सात', emoji: '🌈', phrase: 'सात रंग' },
        { number: 8, word: 'आठ', emoji: '🦋', phrase: 'आठ तितलियाँ' },
        { number: 9, word: 'नौ', emoji: '⚽', phrase: 'नौ गेंद' },
        { number: 10, word: 'दस', emoji: '🎈', phrase: 'दस गुब्बारे' }
    ],
    
    es: [
        { number: 1, word: 'Uno', emoji: '⭐', phrase: 'Una estrella' },
        { number: 2, word: 'Dos', emoji: '🍎', phrase: 'Dos manzanas' },
        { number: 3, word: 'Tres', emoji: '🐱', phrase: 'Tres gatos' },
        { number: 4, word: 'Cuatro', emoji: '🚗', phrase: 'Cuatro coches' },
        { number: 5, word: 'Cinco', emoji: '✋', phrase: 'Cinco dedos' },
        { number: 6, word: 'Seis', emoji: '🌸', phrase: 'Seis flores' },
        { number: 7, word: 'Siete', emoji: '🌈', phrase: 'Siete colores' },
        { number: 8, word: 'Ocho', emoji: '🦋', phrase: 'Ocho mariposas' },
        { number: 9, word: 'Nueve', emoji: '⚽', phrase: 'Nueve pelotas' },
        { number: 10, word: 'Diez', emoji: '🎈', phrase: 'Diez globos' }
    ],
    
    fr: [
        { number: 1, word: 'Un', emoji: '⭐', phrase: 'Une étoile' },
        { number: 2, word: 'Deux', emoji: '🍎', phrase: 'Deux pommes' },
        { number: 3, word: 'Trois', emoji: '🐱', phrase: 'Trois chats' },
        { number: 4, word: 'Quatre', emoji: '🚗', phrase: 'Quatre voitures' },
        { number: 5, word: 'Cinq', emoji: '✋', phrase: 'Cinq doigts' },
        { number: 6, word: 'Six', emoji: '🌸', phrase: 'Six fleurs' },
        { number: 7, word: 'Sept', emoji: '🌈', phrase: 'Sept couleurs' },
        { number: 8, word: 'Huit', emoji: '🦋', phrase: 'Huit papillons' },
        { number: 9, word: 'Neuf', emoji: '⚽', phrase: 'Neuf balles' },
        { number: 10, word: 'Dix', emoji: '🎈', phrase: 'Dix ballons' }
    ],
    
    ru: [
        { number: 1, word: 'Один', emoji: '⭐', phrase: 'Одна звезда' },
        { number: 2, word: 'Два', emoji: '🍎', phrase: 'Два яблока' },
        { number: 3, word: 'Три', emoji: '🐱', phrase: 'Три кота' },
        { number: 4, word: 'Четыре', emoji: '🚗', phrase: 'Четыре машины' },
        { number: 5, word: 'Пять', emoji: '✋', phrase: 'Пять пальцев' },
        { number: 6, word: 'Шесть', emoji: '🌸', phrase: 'Шесть цветов' },
        { number: 7, word: 'Семь', emoji: '🌈', phrase: 'Семь цветов' },
        { number: 8, word: 'Восемь', emoji: '🦋', phrase: 'Восемь бабочек' },
        { number: 9, word: 'Девять', emoji: '⚽', phrase: 'Девять мячей' },
        { number: 10, word: 'Десять', emoji: '🎈', phrase: 'Десять шаров' }
    ]
};

function getCountingData() {
    const profile = JSON.parse(localStorage.getItem('childProfile') || '{}');
    const lang = profile.language || 'en';
    return countingData[lang] || countingData.en;
}

window.countingData = countingData;
window.getCountingData = getCountingData;
