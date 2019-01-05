var mongoose=require('mongoose');

var Users = mongoose.model('Users',{    //first User is model structure name and second Users is collection name
    name:{
        type:String
    },
    age:{
        type:Number
    },
    rollno:{
        type:Number
    },
    admno:{
        type:String
    },
    college:{
        type:String
    }
});

module.exports={Users};