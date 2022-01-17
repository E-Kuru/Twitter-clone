const express = require("express")
const app = express()
const Coment = require('../models/Coment')

app.get('/', async (req, res) => {
    try{
        const coments = await Coment.find.exec()

        res.json(coments)

    }catch (err){
        res.status(500).json({ error: err })
    }
})

app.get('/:id', async (req, res) => {
    const {id} = req.params
    try{
        const coment = await Coment.findById(id).exec()
        res.json(coment)
    }catch (err) {
        res.status(500).json({ error: err })
    }
})

app.post('/', async (req, res) => {
    const coment = new Coment({
        ...req.body
    })
    coment.save((err, coment) => {
        if(err) {   
            res.status(500).json({ error: err })
            return
        }

        res.json(coment)
    })
})

module.exports = app