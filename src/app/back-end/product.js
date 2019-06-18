var mongoose = require('mongoose');
var multer = require('./multer')

var Schema = mongoose.Schema
const FeedbackSchema = new Schema({
    //id: { type: String, required: true },
    email: { type: String},
    type: { type: String},
    productName: { type: String,require: true },
    price: { type: String ,require: true},
    image: { type: String},

})

var FeedbackModel = mongoose.model('productTree', FeedbackSchema);
module.exports = FeedbackModel;
