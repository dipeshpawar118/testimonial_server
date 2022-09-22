const express = require('express')
const testimonialController = require('../controllers/testimonialControllers')
const testimonialModel = require('../models/testimonial');
const router = express.Router();

router.get('/get', async (req, res) => {
    try{
        const data = await testimonialController.getTestimonial();
        res.status(200).json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/add', async (req, res) => {
 
    try {
        const dataToSave = await testimonialController.addTestimonial(req.body);
        res.status(201).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.put('/edit/:id', async (req, res) => {

    try {
        const data =   await  testimonialController.updateTestimonial( req.params.id , req.body ) 
        res.status(200).json(data)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.delete('/delete/:id', async (req, res) => {
    var reqId = { testimonialId : req.params.id };
    try { 
        const data =   await  testimonialController.deleteTestimonial( req.params.id ); 
        res.status(200).json(data)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = router;

