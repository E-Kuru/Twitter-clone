const passport = require("passport")
const passportLocal = require("passport-local")
const User = require("../models/User")

const LocalStrategy = passportLocal.Strategy

passport.use(new LocalStrategy({ usernameField : "name", passwordField: "email" }, async (username, password, done) => {

    const user = await User.findOne({name : username, email : password})

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

    console.log('User Passport',user);

    done(null, user)
})

module.exports = passport