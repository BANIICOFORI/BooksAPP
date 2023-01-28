//AuthMODEL
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AuthorsSchema = new mongoose.Schema({
    Title : String,
    AuthName : String,
    PhoneNo: String,
    booksId: String,
    booksId:{
        type:Schema.Types.ObjectId,
        ref:"books",
        required:true
    } 
});
const AuthorsModel = mongoose.model("Authors",AuthorsSchema);

module.exports = AuthorsModel; 