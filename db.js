const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://kkp785215database1:9721179735@inotebook.eqe4k.mongodb.net/test';

const connectToMongoose =  () => {
  mongoose.connect(mongoURI, ()=>{
    console.log('Connected to mongodb successfully');
  });
}

module.exports = connectToMongoose;