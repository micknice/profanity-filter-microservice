const words = require('../data/words')

const profanityMap = new Map();

for (const word of words) {
    profanityMap.set(word, word)
}


function profanityCheck(text)  {
    const wordArr = text.split(' ')
    for(const word of wordArr) {
        if(profanityMap.has(word)) {
            return true;
        }
    }
    return false;
}

module.exports = profanityCheck