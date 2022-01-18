const User = require('../models/User')

const verifyUser = async (req, res, next) => {  

    if (!req.user) {
        console.log("T'as pas le droit");
        res.status(401).json({error : "Unauthorized"})
    } else {
        next()
    }
}

const verifySession = async (req,res,next) => {
    const {id} = req.params
    const SessionId = req.user
    if(SessionId === id){
        next()
    } else {
        res.status(401).json({error : "Unauthorized"})
    }
}

const verifyMail = async (req,res,next) => {

    const {email} = req.body
    const checkMail = await User.findOne(email)

    if(checkMail){
        res.status(409).json({ error : "This mail already exist"})
    }
    else {
        next()
    }
}

module.exports = {
    verifyUser,
    verifySession,
    verifyMail,
}