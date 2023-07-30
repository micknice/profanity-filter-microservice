const profanityCheck = require('../profanityFilter/profanityFilter')

const getProfanityCheck = (req, res, next) => {
    const {text} = req.body;
    if(text !== "") {
        const profane = profanityCheck(text)    
        res.status(200).send({containsProfanity: profane})   
    } else {
        res.status(201).send({msg: 'error: request must contain text'})
    }
}

module.exports = {getProfanityCheck}