const mongoose = require('mongoose')

const  URL = process.env.Mongo_URL


const Connectdb = async ()=>{
    try {
        await  mongoose.connect(URL)
        console.log('Database is connect');
    } catch (error) {
        
    }
}

module.exports = Connectdb