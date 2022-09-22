const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
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
        type: String
    },
    lastUpdated: {
        type: String
    },
    active :{
        required : true,
        type :Number
    }
})

module.exports = mongoose.model('Testimonial', dataSchema)