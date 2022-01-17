const passport = require("passport")
const passportLocal = require("passport-local")
const User = require("../models/User")

const LocalStrategy = passportLocal.Strategy

passport.use(new LocalStrategy({ usernameField : "email"}, async (username, password, done) => {

    const user = await User.findOne({email : username, password : password})

    if (!user) {
        return done(null, false)
    } 
    return done(null, user)
}))

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((id, done) => {
  
    const user = User.findById(id)
    
    done(null, user)
})

module.exports = passport