const mongoose = require("mongoose")

const dbConnect = () => {
  const dbName = 'tweetter'

  try {
    mongoose.connect(`mongodb+srv://twitter-clone:BMy8g5NG9PmC7yq@twitter-clone.75dut.mongodb.net/${dbName}?retryWrites=true&w=majority`)
    console.log(`Connected to ${dbName} database`)
  } catch (err) {
    console.log(err)
  }
}

module.exports = { 
  dbConnect
}