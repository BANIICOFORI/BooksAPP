//import express
const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require ("mongoose");

 const {createBooksController,listBooksController,updateBooksController,deleteBooksController,createAuthorsController,listAuthorsController} = require("./controllers");

 //create expree server instance
const server = express();
//midelwares
server.use(bodyparser.json());

//VIEW books - get method
server.get("/book/:id?", listBooksController);
//create book - post method
server.post("/book", createBooksController);
//update book - put method
server.put("/book", updateBooksController);
//delete book - delete mwethod
server.delete("/book", deleteBooksController);

server.post("/Author",createAuthorsController);
//VIEW banks - get method
server.get("/Author/:id?",listAuthorsController);

//mongoose.connect("mongodb://localhost:27017")
//mongoose.connect("mongodb://localhost:27017")

//const mongourl="mongodb+srv://baniico1:baniico@cluster0.dfmgnru.mongodb.net/banico?retryWrites=true&w=majority";
const mongourl="mongodb://localhost:27017/BooksDB"
mongoose.connect(mongourl,{
    useNewUrlParser:true, 
 })
 .then(()=>{
    console.log("connected to Database");
 }).catch((e)=>console.log(e));

server.listen(3000, () =>console.log("Server is Ready"));
