var mongoose = require('mongoose');

var Schema = mongoose.Schema
const FeedbackSchema = new Schema({
    //id: { type: String, required: true },
    fnames: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    pin1: { type: Number, require: true},
    pin2: { type: Number, require: true},
    type: { type: String }
    

})

var FeedbackModel = mongoose.model('members', FeedbackSchema);
module.exports = FeedbackModel;
