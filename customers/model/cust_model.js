let mongoose = require('mongoose')
//let validator = require('validator')
mongoose.pluralize(null);              // removing s from all collection 
let emailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
    
   
  },

  address: {
    type: String,
    required: true,
    
    lowercase: true
    
  }
})

module.exports = mongoose.model('Customer', emailSchema)