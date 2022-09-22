const testimonialModel = require('../models/testimonial');
const counterModel =  require('../models/counter');

const getTestimonial = async function ( ) {
    
    try {

        let testimonialsaved = await  testimonialModel.find({ active: 1 })
        return testimonialsaved

    } catch (e) {
        return { error: e.message, success: false } ;

    }
}

const addTestimonial = async function (reqBody) {
  
    try {
        let id = await getTestimonialId()
        reqBody.testimonialId =  id ;
        var testimonialData = new testimonialModel(reqBody);
        const testimonialsaved = await testimonialData.save()
        return testimonialsaved
      
    } catch (e) {
        return { error: e.message, success: false } ;
    }
}


const updateTestimonial = async function (id ,reqBody ) {
    try {
        var update=  reqBody;
        update.updatedOn = new Date()
        var reqId = { testimonialId : id };
        const testimonialsaved = await testimonialModel.findOneAndUpdate( reqId , update);
        return testimonialsaved
       
    } catch (e) {
        return { error: e.message, success: false } ;
    }
}


const deleteTestimonial = async function (id) {
 
    try {
        const update = { active: 0 };
        const testimonialsaved = await testimonialModel.findOneAndUpdate( id , update);
        return testimonialsaved;

    } catch (e) {
        return { error: e.message, success: false } ;
    }

}

async function getTestimonialId( ) {
    try {
        let id = await counterModel.find();
        if(id.length === 0 ){
            var counterData = new counterModel({ count : 1 });
            const counterSaved = await counterData.save()
            return 1;

        }else {
            let newTestimonialId =  id[0].count + 1;
            var reqId = { count : id[0].count };
            var update = { count :newTestimonialId };
            await counterModel.findOneAndUpdate( reqId , update);
            return newTestimonialId;
        }
       

    } catch (err) {
        console.log(err)
    }
}


module.exports = {
    getTestimonial,
    addTestimonial,
    updateTestimonial,
    deleteTestimonial
}