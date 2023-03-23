const mongoose = require('mongoose');
const connectDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.1hrsjly.mongodb.net/juneEnglish?retryWrites=true&w=majority')
        console.log('database connected')
    } catch (error) {
        console.log('something went wrong',error)
    }
}

module.exports = connectDB;