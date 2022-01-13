const express = require("express")
const app = express()
const cors = require("cors")
const { dbConnect } = require("./config/db")
const users = require('./routes/users')

dbConnect()

app.use(cors({
    origin: 'http://localhost:3000',
}))

app.use(express.json())
app.use('/users', users)
const port = 5000

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})