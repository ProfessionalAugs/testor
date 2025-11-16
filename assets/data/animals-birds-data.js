// Animals Data

const animalsData = {
    en: [
        { name: 'Lion', emoji: '🦁', sound: 'Roar!', description: 'King of the jungle' },
        { name: 'Elephant', emoji: '🐘', sound: 'Trumpet!', description: 'Big and gentle' },
        { name: 'Monkey', emoji: '🐵', sound: 'Ooh ooh!', description: 'Loves bananas' },
        { name: 'Tiger', emoji: '🐯', sound: 'Growl!', description: 'Orange with stripes' },
        { name: 'Bear', emoji: '🐻', sound: 'Grr!', description: 'Big and furry' },
        { name: 'Dog', emoji: '🐶', sound: 'Woof woof!', description: 'Best friend' },
        { name: 'Cat', emoji: '🐱', sound: 'Meow!', description: 'Soft and cuddly' },
        { name: 'Rabbit', emoji: '🐰', sound: 'Hop hop!', description: 'Loves carrots' },
        { name: 'Fox', emoji: '🦊', sound: 'Yip!', description: 'Red and clever' },
        { name: 'Panda', emoji: '🐼', sound: 'Munch!', description: 'Black and white' }
    ]
};

const birdsData = {
    en: [
        { name: 'Parrot', emoji: '🦜', sound: 'Squawk!', description: 'Colorful talker' },
        { name: 'Peacock', emoji: '🦚', sound: 'Meow!', description: 'Beautiful feathers' },
        { name: 'Owl', emoji: '🦉', sound: 'Hoot hoot!', description: 'Wise night bird' },
        { name: 'Eagle', emoji: '🦅', sound: 'Screech!', description: 'Strong flyer' },
        { name: 'Duck', emoji: '🦆', sound: 'Quack quack!', description: 'Swims in pond' },
        { name: 'Penguin', emoji: '🐧', sound: 'Honk!', description: 'Lives in ice' },
        { name: 'Flamingo', emoji: '🦩', sound: 'Honk!', description: 'Pink and tall' },
        { name: 'Swan', emoji: '🦢', sound: 'Hiss!', description: 'White and elegant' },
        { name: 'Chicken', emoji: '🐔', sound: 'Cluck cluck!', description: 'Lays eggs' },
        { name: 'Turkey', emoji: '🦃', sound: 'Gobble!', description: 'Big tail feathers' }
    ]
};

function getAnimalsData() {
    return animalsData.en;
}

function getBirdsData() {
    return birdsData.en;
}

window.animalsData = animalsData;
window.birdsData = birdsData;
window.getAnimalsData = getAnimalsData;
window.getBirdsData = getBirdsData;
