const mongoose = require('mongoose');
const mongoString = "mongodb://localhost:27017/testimonial";


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
