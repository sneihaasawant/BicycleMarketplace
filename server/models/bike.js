const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var BikeSchema = new mongoose.Schema({
    userid : { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    location: { type: String, required: true },
    url: { type: String, required: true },
}, {timestamps: true });

mongoose.model("Bike", BikeSchema)


// var CommentSchema = new mongoose.Schema({
//    // since this is a reference to a different document, the _ is the naming convention!
//    _postid: {type: Schema.Types.ObjectId, ref: 'Post'},
//    name: { type: String, required: true },
//    comment: { type: String, required: true },
//   }, {timestamps: true });