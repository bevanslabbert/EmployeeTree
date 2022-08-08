// var env = require('../../environments/environment.ts')
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongo = require('mongoose');

var db = mongo.connect('mongodb+srv://bevanslabbert:qk7XtDzywmAOBk82@database.e5s3d.mongodb.net/?retryWrites=true&w=majority', function(err, response){
    if(err){console.log(err);}
    // else {console.log('Connected to ' + db, ' + ', response)};
});

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({limit:'5mb'}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTION, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next(); 
});

var Schema = mongo.Schema;

var RegisteredUsersSchema = new Schema({
    id: { type: String },
    username: { type: String },
    first_name: { type: String },
    surname: { type: String },
    password: { type: String },
}, { versionKey: false});

var model = mongo.model('registered_users', RegisteredUsersSchema, 'registered_users');

// app.post('/api/SaveUser', function(req,res) {
//     var mod = new model(req.body);

//     if(req.body.mode == 'Save'){
//         mod.save(function(err,data) {
//             mod.save(function(err, data) {
//                 if(err) {
//                     res.send(err);
//                 }
//                 else {
//                     res.send({data:'Record has been inserted'});
//                 }
//             });
//         });
//     }
//     else
//     {
        
//     }
// })

app.post('/api/login', (req, res, next) =>  {
    model.findOne({username : req.body.username}, 'username password first_name surname id').exec((err, resp)   =>  {
        if(err) console.log(err);
        if(resp != null) {
            console.log('valid')
            console.log(resp)
            let resObj  = resp
            res.json(resObj)
        }
        else
            res.json(null)   
            
    })
})

app.listen(8080, (req,res,next) =>  {
    console.log('Listening on port 8080')
})