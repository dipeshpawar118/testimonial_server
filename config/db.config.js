const mongoose = require('mongoose');
const mongoString = "mongodb+srv://rohit:ionic%4012345@dndevcluster.k7fvkpb.mongodb.net/defineNext?retryWrites=true&w=majority";
// const mongoString = "mongodb://localhost:27017/testimonial";

const connectDataBase = () =>{
    mongoose.connect(mongoString);
    const database = mongoose.connection;
    
    database.on('error', (error) => {
        console.log(error)
    })
    
    database.once('connected', () => {
        console.log('Database Connected');
    })
}

module.exports = connectDataBase;
