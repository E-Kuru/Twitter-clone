const express = require("express")
const app = express()
const cors = require("cors")
const port = 5000
const session = require("express-session")
const passport = require("./config/passport")
const { dbConnect } = require("./config/db")

const users = require('./routes/users')
const coment = require('./routes/coments')
const tweet = require('./routes/tweets')

dbConnect()

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.use(express.json())

app.use(session({
  secret: 'MyAwesomeSecret',
  resave: true,
  saveUninitialized: false 
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/tweet', tweet)
app.use('/users', users)
app.use('/coments', coment)


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})