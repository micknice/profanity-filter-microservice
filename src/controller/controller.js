const profanityCheck = require('../profanityFilter/profanityFilter')

const getProfanityCheck = (req, res, next) => {
    const {text} = req.body;
    console.log('!!!!!', text)
    const profane = profanityCheck(text)    
    res.status(200).send({containsProfanity: profane})   
}

module.exports = {getProfanityCheck}