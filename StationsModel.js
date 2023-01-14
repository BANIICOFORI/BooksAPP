const mongoose = require("mongoose");
//const RequestSchema = require("./model")
const Schema = mongoose.Schema;

 const StationsSchema = new Schema({
    StationName:String,
    StationCode:String,
    RequestsId:String,
    //StationName:{         
    //     stationType:string,
    //      required : true     
    // },
    //  StationCode :{
    //     type:string,
    //      required : true
    //  }, 
    //  RequestsId:{
    //      type:Schema.Types.ObjectId,
    //      ref:"Request",
    //      required:true
    //  } 
 });
 const StationsModel = mongoose.model("Stations",StationsSchema);
 module.exports = StationsModel;