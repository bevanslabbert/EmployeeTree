// var env = require('../../environments/environment.ts')
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongo = require('mongoose');
var bcrypt = require('bcrypt');
const { json } = require('body-parser');

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
                        first_name : resp.first_name,
                        surname : resp.surname, 
                        username : resp.username, 
                        id : resp.id
                    };
                    
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
app.post('/api/employees', (req, res, next)   =>  {
    
    employeesModel.find({reports_to : req.body.id}, 'username password first_name surname id').exec((err, resp)   =>  {
        res.json(resp);
        console.log(resp)
    });
})

//Get schedules by ID
app.post('/api/schedules', (req, res, next)  =>  {
    // console.log("SCHEDULES")
    let numEmployees = req.body.employees.length
    let count = 0
    var schedules = new Array()
    req.body.employees.forEach((e)   =>  {
        schedulesModel.find({id : e.id}, 'id schedule').exec((err, resp)   =>  {
            // console.log(e)
            // resp.name = e.name
            // resp.surname = e.surname
            // resp.username = e.username
            schedules.push(resp);
            count++;

            if(count == numEmployees)
                res.json(schedules)
            // console.log(schedules)
            // console.log(resp);
        });
    })
})

app.post('/api/employeeDetails', (req, res, next)   =>  {
    model.find({id : req.body.id}, 'username first_name surname').exec((err, resp)  =>  {
        // console.log(resp)
        res.json(resp)
    })
})

//Get all employees that work for req.id
app.post('/api/schedulesById', (req, res, next)   =>  {
    
    schedulesModel.find({id : req.body.id}, 'id schedule').exec((err, resp)   =>  {
        res.json(resp)
        // console.log(resp)
    });
})

//Update an employees schedule
app.post('/api/addScheduleItem', (req, res, next)   =>  {
    
    const filter = { id : req.body.id};
    const update = { 'title' : req.body.item.title, 'description' : req.body.item.description, 'start_time' : req.body.item.start_time, 'end_time' : req.body.item.end_time }
    console.log(update)
    try {
        const updatedDoc = schedulesModel.findOneAndUpdate( 
            filter,
            { 
                $push : {
                    'schedule' : update
                }
            },
            {new : true}, (err, result) =>  {
                console.log(err)
                console.log(result)
            }
        );
        // console.log(updatedDoc)
    }
    catch (e) {
        console.error(e)
    }
})

//Remove schedule item from employee
app.post('/api/updateSchedule', (req, res, next)    =>  {
    console.log(req.body)
    const filter = { id : req.body.employee.id }
    // const item = { 'title' : req.body.item.title, 'description' : req.body.item.description, 'start_time' : req.body.item.start_time, 'end_time' : req.body.item.end_time}
    // console.log(item, filter)
    // try {
    //     const udpatedDoc = schedulesModel.findOneAndUpdate(
    //         filter,
    //         {
    //             $pull: {
    //                 schedule: {
    //                     start_date : req.body.item.start_date
    //                     // $elemMatch: item
    //                 }
    //             }
    //         },
    //         {
    //             safe : true,
    //             multi : true
    //         }
    //         ,(err, data)   =>  {
    //             console.log(err, data)
    //         })
    // }
    // catch (e) {
    //     console.error(e)
    // }
    // let s = "schedules." + i

    //Sincec mongoose doesn't allow for deleting element by index in array, and the elements are without unique identifiers, the entire field needs to be reset
    try {
    schedulesModel.findOneAndUpdate(
        filter,
        { 
            schedule : req.body.employee.schedules[0].schedule
        }, ()   =>  {

        })
    }
    catch(e) {
        console.log(e)
    }

    // schedulesModel.findOne({id : req.body.id}, (err, doc)  => {
    //     console.log(doc)
    //     let i = req.body.index
    //     console.log(doc.schedule[i])
    //     doc.schedule.splice(i,1)
    //     doc.save()
    // })
})

app.get('/api/users', (req, res, next)  =>  {
    // model.findOne
})

app.listen(3000, (req,res,next) =>  {
    console.log('Listening on port 3000')
})

// model.aggregate([{
//     $lookup: {
//         from: "employees",
//         localField: "id",
//         foreignField: "id",
//         as: "users"
//     }
// }]).exec(function(err, users) {
//     console.log(users)
//     console.log(users[0].users)
// })