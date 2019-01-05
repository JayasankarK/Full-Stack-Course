var mongoose =require('mongoose');
mongoose.Promise=global.Promise; //
mongoose.connect('mongodb://localhost:27017/Users',{useNewUrlParser:true});            //connects with mongo db; Users is the database

module.exports={
    mongoose:mongoose
}