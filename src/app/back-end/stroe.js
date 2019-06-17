var mongoose = require('mongoose');

var Schema = mongoose.Schema
const FeedbackSchema = new Schema({
    //id: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'members', require: true},
    storeName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    type : { type : Boolean }
   
    
    

})

var FeedbackModel = mongoose.model('stroe', FeedbackSchema);
module.exports = FeedbackModel;
