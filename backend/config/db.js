const mongoose = require("mongoose")

const dbConnect = () => {
  const dbName = 'garage'

  try {
    mongoose.connect(`mongodb://localhost:27017/${dbName}`)
    console.log(`Connected to ${dbName} database`)
  } catch (err) {
    console.log(err)
  }
}

module.exports = { 
  dbConnect
}