const AuthorsModel = require("./AuthModel");
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
   
    BooksModal.findById(id).then(books=>{
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
const createAuthorsController = (req,res) => {
    const {Title,AuthName,PhoneNo,booksId} = req.body;
   
     const Authors = new AuthorsModel ({Title,AuthName,PhoneNo,booksId});
   
       Authors.save().then(result => {
           if(result)
            res.json({message:"Author Created", data:result});
            else {
                res.json({message: "Failed to create Station"});
            }
          
       }); 
    }
    const listAuthorsController = (req,res) =>{
        const {id} = req.params;
        if(id){
            AuthorsModel.find({_id:id})
            .populate("booksId", "Title AuthName PhoneNo")
            .then(Authors=>{
            res.json({data:Authors});
            }).catch(err=>console.log(err));
        }else{
            AuthorsModel.find()
        //    .populate("RequestsId", "serviceNo firstname middlename lastname -_id")
        .populate("booksId", "Title AuthName PhoneNo")
           .then(Authors=>{
            res.json({data:Authors});
            }).catch(err=>console.log(err));
        }
       
     }

module.exports ={
   listBooksController,
   listAuthorsController,

   createBooksController,
   createAuthorsController,

   updateBooksController,

   deleteBooksController
   //createAuthorsController
}