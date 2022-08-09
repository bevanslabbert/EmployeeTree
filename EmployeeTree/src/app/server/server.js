// var env = require('../../environments/environment.ts')
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongo = require('mongoose');
var bcrypt = require('bcrypt');

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


var EmployeesSchema = new Schema({
    id: { type: String },
    title: { type: String },
    reports_to: { type: String }
}, { versionKey: false});

var employeesModel = mongo.model('employees', EmployeesSchema, 'employees');


var SchedulesSchema = new Schema({
    id: { type: String },
    schedule: {type : Schema.Types.Mixed}
    // {
    //     start_time : { type: String },
    //     end_time : { type : String },
    //     title : { type : String },
    //     description : { type : String }

    // },
}, { versionKey: false});

var schedulesModel = mongo.model('schedules', SchedulesSchema, 'schedules');


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
            bcrypt.compare(req.body.password, resp.password, (err, same) =>  {
                if(same) {
                    console.log('valid')
                    console.log(resp)
                    let resObj = {
                        success : true,
                        name : resp.first_name,
                        surname : resp.surname, 
                        username : resp.username, 
                        id : resp.id};
                    
                    res.json(resObj)
                }
                else
                {
                    console.log('invalid')
                    let resObj  = {success : false}
                    res.json(resObj)
                }
            })
        }
        else {
            console.log('invalid')
            let resObj  = {success : false}
            res.json(resObj)
        }            
    })
})

//Get all employees that work for req.id
app.get('api/employees', (req, res, next)   =>  {

})

app.get('/api/users', (req, res, next)  =>  {
    // model.findOne
})


app.listen(3000, (req,res,next) =>  {
    console.log('Listening on port 3000')
})