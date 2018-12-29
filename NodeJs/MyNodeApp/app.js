// const ModuleOs = require('os'); //gives OS details
// const ModuleFs=require('fs'); // used for files related operation
// var MyUser=ModuleOs.userInfo();

// ModuleFs.appendFile('hello.txt','Welcome to Node',
// function(err){
//     if(err){
//         throw err;
//     }
//     console.log('File Saved Successfuly');
// }
// );
// const MyModule=require('./students.js');
// var name=MyModule.getStudent('Jay');
// console.log(name);

// const AddModule=require('./add.js');
// var RESULT =AddModule.addValues(20,10);
// console.log(RESULT);

// const _=require('lodash');

// var MyArr=_.uniq(['Anish',123,123,'Anish','Anish','hi']);
// console.log(MyArr);

const express = require('express');
const hbs = require('hbs');
var app = express();

app.set('view engine', 'hbs');
app.get('/home', (req, res) => {
    res.render('home.hbs');
});


app.get('/', (req, res) => {
    res.send('Welcome to my Web Page');
});
app.get('/about', (req, res) => {
    res.render('about.hbs');
});

app.post('/getUsers', (req, res) => {
    res.send({
        name: 'Rahul',
        age: 23,
        likes: [
            'Biking',
            'Reading'
        ]
    });
});
app.listen(3000);
console.log('Server running on http://localhost:3000');