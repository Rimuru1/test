var mongoose = require('mongoose');

var Schema = mongoose.Schema
const FeedbackSchema = new Schema({
    id_product: { type: String },
    email: { type: String},
    productName: { type: String,require: true },
    price: { type: String ,require: true},
    image: { type: String}

})

var FeedbackModel = mongoose.model('UserProduct', FeedbackSchema);
module.exports = FeedbackModel;