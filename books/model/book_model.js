let mongoose = require('mongoose')
let validator = require('validator')
mongoose.pluralize(null);              // removing s from all collection 
let emailSchema = new mongoose.Schema({
  publisher: {
    type: String,
    required: true
    
   
  },

  title: {
    type: String,
    required: true,
    
    lowercase: true
    
  },
  author: {
    type: String,
    required: true,
    
    lowercase: true,
    
  },
  NumberPages: {
    type: String,
    required: true,
    
    lowercase: true
    
    
  }
})

module.exports = mongoose.model('Books', emailSchema)