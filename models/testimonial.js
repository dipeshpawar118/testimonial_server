const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
    testimonialId : {
        required : true ,
        type : Number
    } ,
    image: {
        type: String
    },
    name: {
        required: true,
        type: String
    } ,
    post: {
        type: String
    },
    description: {
        required: true,
        type: String
    },
    createdOn: { 
        type: Date,
        default: Date.now 
    },
    updatedOn: { 
        type: Date,
        default: Date.now 
    },
    active :{
        required : true,
        type :Number
    }
})

module.exports = mongoose.model('Testimonial', TestimonialSchema)