const express = require("express")
const app = express()
const cors = require("cors")
const port = 5000
const { dbConnect } = require("./config/db")
const users = require('./routes/users')
const coment = require('./routes/coments')

dbConnect()

app.use(cors({
    origin: 'http://localhost:3000',
}))

app.use(express.json())

app.use('/tweet', tweet)
app.use('/users', users)
app.use('coments', coment)


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})