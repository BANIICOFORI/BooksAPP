//MODEL
const mongoose = require("mongoose");
//const StationsModel = require("./StationsModel")
const Schema = mongoose.Schema;
const booksSchema = new mongoose.Schema({
    Title : String,
    Author : String,
    Description : String,
});
const BooksModel = mongoose.model("Books",booksSchema);

module.exports = BooksModel; 