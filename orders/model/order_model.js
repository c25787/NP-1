let mongoose = require('mongoose')
//let validator = require('validator')
mongoose.pluralize(null);              // removing s from all collection 
let emailSchema = new mongoose.Schema({
  Bookid: {
    type:mongoose.Types.ObjectId,
    required: true
    
   
  },

  Customerid: {
    type:mongoose.Types.ObjectId,
    required: true,
    
    lowercase: true
    
  },
  Date: {
    type:Date,
    required: true,
    
    lowercase: true
    
  }

})

module.exports = mongoose.model('Order', emailSchema)