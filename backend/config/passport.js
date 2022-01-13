const passport = require("passport")
const passportLocal = require("passport-local")
const User = require("../models/User")

const LocalStrategy = passportLocal.Strategy

passport.use(new LocalStrategy({ passwordField: 'email' }, (username, password, done) => {

    const user = User.findOne({name : username, email : password}).exec()
    
    if (!user) {
    return done(null, false)
    } 
    return done(null, user)
}))

passport.serializeUser((user, done) => {
    done(null, user._id)
})

passport.deserializeUser((id, done) => {
  
    const user = User.findById(id).exec()
    
    console.log('User Passport',user);

    done(null, user)
})

module.exports = passport