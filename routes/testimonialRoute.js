const express = require('express')
const testimonialModel = require('../models/testimonialModel');
const router = express.Router();

router.get('/get', async (req, res) => {
    try{
        const data = await testimonialModel.find({ active: 1 });
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/add', async (req, res) => {
    var reqbody=  req.body;
    const data = new testimonialModel(reqbody);
    try {
        const dataToSave = await data.save();
        res.status(201).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.put('/edit/:id', async (req, res) => {
    var update=  req.body;
    var reqId = { testimonialId : req.params.id };
    try {
        const data = await testimonialModel.findOneAndUpdate( reqId , update);
        res.status(200).json(data)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.delete('/delete/:id', async (req, res) => {
    var reqId = { testimonialId : req.params.id };
    try {
        const update = { active: 0 };
        const data = await testimonialModel.findOneAndUpdate( reqId , update);
        res.status(200).json(data)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = router;

