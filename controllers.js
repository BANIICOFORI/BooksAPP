const BooksModal = require("./model");
//const StationsModel =require("./StationsModel");

//list all books
const listBooksController = (req,res) =>{
    const {id} = req.params;
    if(id){
        BooksModal.find({_id:id}).then(books=>{
        res.json({data:books});
        }).catch(err=>console.log(err));
    }else{
        BooksModal.find().then(books=>{
        res.json({data:books});
        }).catch(err=>console.log(err));
    }
}
//create all books
const createBooksController = (req,res) =>{
    const {Title,Author,Description} = req.body;
    //Now create an instance BookModel
    const book = new BooksModal ({Title,Author,Description});

    book.save().then(result =>{
    res.json({message:"Create successful", data:result});  
}).catch(error=>console.log(error));
}
//update all books
const updateBooksController = (req,res) =>{    
    const {id,Title,Author,Description} = req.body;
   
    BooksModel.findById(id).then(books=>{
        if(books){
             books.Title=Title;
             books.Author=Author;
             books.Description=Description;

             books.save();
             res.json({message:"Update successful", data:books});
        }
        res.json({message:"Document dose not exsist"});
    }).catch(error=>console.log(error));
} 

const deleteBooksController = (req,res) =>{
    //delete all books
    const {id} = req.body;
    BooksModal.findByIdAndRemove(id).then(deletebook=>{
        if(deletebook){
            res.json({message:"deleted successful", data:deletebook}); 
            return;
        }
        res.json({message:"deleted successful"}); 
    });
    
}
module.exports ={
   listBooksController,
   createBooksController,
   updateBooksController,
   deleteBooksController
}