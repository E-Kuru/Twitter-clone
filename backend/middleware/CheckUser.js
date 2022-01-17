const verifyUser = async (req, res, next) => {
  
    if (!req.user) {
        console.log("T'as pas le droit");
        res.status(401).json({error : "Unauthorized"})
    } else {
        next()
    }
}

module.exports = {
    verifyUser
}