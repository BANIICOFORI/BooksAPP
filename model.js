//MODEL
const mongoose = require("mongoose");
//const StationsModel = require("./StationsModel")
const Schema = mongoose.Schema;
const booksSchema = new mongoose.Schema({
    Title : String,
    Author : String,
    Description : String,
    Authors:[
        {
        AuthorsId:{required:true, type:Schema.Types.ObjectId,ref:"Authors"}
        }
        ] 
});
const BooksModel = mongoose.model("books",booksSchema);

module.exports = BooksModel; 