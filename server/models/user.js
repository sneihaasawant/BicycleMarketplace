const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const UserSchema = mongoose.Schema({
    firstname: { type: String, required: true, minlength: 1 },
    lastname: { type: String, required: true, minlength: 1 },
    email: { type: String, required: true, minlength: 1 },
    password: { type: String, required: true, minlength: 1 },
    bikes: [ { type: Schema.Types.ObjectId, ref: 'Bike' } ]
}, { timestamps: true })


mongoose.model("User", UserSchema)

// var PostSchema = new mongoose.Schema({
//     name: { type: String, required: true }, 
//     message :  { type: String, required: true }, 
//     comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
//    }, { timestamps: true });
  