const express = require("express")
const app = express()
const cors = require("cors")
const { dbConnect } = require("./config/db")

dbConnect()

app.use(cors({
    origin: 'http://localhost:3000',
}))

app.use(express.json())

const port = 5000

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})