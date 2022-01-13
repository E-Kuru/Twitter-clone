const express = require("express")
const app = express()
const cors = require("cors")
const port = 5000
const { dbConnect } = require("./config/db")
<<<<<<< HEAD
const tweet = require('./routes/tweet')

=======
const users = require('./routes/users')
>>>>>>> 11b0b1e53472ef4dcb2011c1e0cd67767c3f0169

dbConnect()

app.use(cors({
    origin: 'http://localhost:3000',
}))

app.use(express.json())
<<<<<<< HEAD

app.use('/tweet', tweet)

=======
app.use('/users', users)
const port = 5000
>>>>>>> 11b0b1e53472ef4dcb2011c1e0cd67767c3f0169

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})