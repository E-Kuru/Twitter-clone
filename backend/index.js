const express = require("express")
const app = express()
const cors = require("cors")
const port = 5000
const { dbConnect } = require("./config/db")
const tweet = require('./routes/tweet')


dbConnect()

app.use(cors({
    origin: 'http://localhost:3000',
}))

app.use(express.json())

app.use('/tweet', tweet)


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})