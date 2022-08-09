var MongoClient = require('mongodb').MongoClient
var url = 'mongodb+srv://bevanslabbert:qk7XtDzywmAOBk82@database.e5s3d.mongodb.net/?retryWrites=true&w=majority'


MongoClient.connect(url, (err, db)  =>  {
    if(err) throw err;

    var dbo = db.db("test");
    var myobj = [
        {
            "id": "6C4E2C5D-BBBB-4386-AA71-B7F56727433C",
            "schedule":[
                {
                    "start_time":"2022-06-24 8:00",
                    "end_time":"2022-06-24 8:30",
                    "title":"Training",
                    "description":"training for interns"
                },
                {
                    "start_time":"2022-06-24 9:00",
                    "end_time":"2022-06-24 9:30",
                    "title":"Leadership",
                    "description":"leadership development meeting"
                },
                {
                    "start_time":"2022-06-24 10:00",
                    "end_time":"2022-06-24 15:30",
                    "title":"Sales",
                    "description":"service sales"
                }
            ]
        },
        {
            "id": "CBB8569D-C331-4629-A1F7-236BFA1A2822",
            "schedule":[
                {
                    "start_time":"2022-06-24 8:00",
                    "end_time":"2022-06-24 8:30",
                    "title":"Training",
                    "description":"training for interns"
                },
                {
                    "start_time":"2022-06-24 9:00",
                    "end_time":"2022-06-24 9:30",
                    "title":"Leadership",
                    "description":"leadership development meeting"
                }
            ]
        },
        {
            "id": "F29B9474-CABC-46E3-8B75-66281ABFBA92",
            "schedule":[
                {
                    "start_time":"2022-06-24 8:00",
                    "end_time":"2022-06-24 8:30",
                    "title":"Training",
                    "description":"training for interns"
                },
                {
                    "start_time":"2022-06-24 9:00",
                    "end_time":"2022-06-24 9:30",
                    "title":"Leadership",
                    "description":"leadership development meeting"
                }
            ]
        },
        {
            "id": "EB3741EF-929D-430C-B637-EA5425ABB0E7",
            "schedule":[
                {
                    "start_time":"2022-06-24 8:00",
                    "end_time":"2022-06-24 8:30",
                    "title":"standup",
                    "description":"standup meeting"
                }
               
            ]
        },
        {
            "id": "64F25F3B-0F65-45EE-92A7-2B53E58B5CDD",
            "schedule":[
                
                {
                    "start_time":"2022-06-24 10:00",
                    "end_time":"2022-06-24 15:30",
                    "title":"Dev meeting",
                    "description":"developer meeting"
                }
            ]
        },
        {
            "id": "7EE29BBE-259C-402B-B870-7C32FC845674",
            "schedule":[
                {
                    "start_time":"2022-06-24 8:00",
                    "end_time":"2022-06-24 8:30",
                    "title":"Training",
                    "description":"training for interns"
                },
                {
                    "start_time":"2022-06-24 9:00",
                    "end_time":"2022-06-24 9:30",
                    "title":"Training",
                    "description":"training for interns"
                },
                {
                    "start_time":"2022-06-24 10:00",
                    "end_time":"2022-06-24 15:30",
                    "title":"Training",
                    "description":"training for interns"
                }
            ]
        },
        {
            "id": "24D54F49-1D8C-417A-9B43-AC12F43DE294",
            "schedule":[
                {
                    "start_time":"2022-06-24 8:00",
                    "end_time":"2022-06-24 8:30",
                    "title":"Training",
                    "description":"training for interns"
                },
                {
                    "start_time":"2022-06-24 9:00",
                    "end_time":"2022-06-24 9:30",
                    "title":"Training",
                    "description":"training for interns"
                },
                {
                    "start_time":"2022-06-24 10:00",
                    "end_time":"2022-06-24 15:30",
                    "title":"Training",
                    "description":"training for interns"
                }
            ]
        },
        {
            "id": "A44424B0-3253-4EE7-9060-7C977F4840C8",
            "schedule":[
                {
                    "start_time":"2022-06-24 8:00",
                    "end_time":"2022-06-24 8:30",
                    "title":"Training",
                    "description":"training for interns"
                },
                {
                    "start_time":"2022-06-24 9:00",
                    "end_time":"2022-06-24 9:30",
                    "title":"Training",
                    "description":"training for interns"
                },
                {
                    "start_time":"2022-06-24 10:00",
                    "end_time":"2022-06-24 15:30",
                    "title":"Training",
                    "description":"training for interns"
                }
            ]
        },
        {
            "id": "B8501AFC-AD8F-4EBD-B733-87D9DA6AD713",
            "schedule":[
                {
                    "start_time":"2022-06-24 8:00",
                    "end_time":"2022-06-24 8:30",
                    "title":"Training",
                    "description":"training for interns"
                },
                {
                    "start_time":"2022-06-24 9:00",
                    "end_time":"2022-06-24 9:30",
                    "title":"Leadership meeting",
                    "description":"leadership development meeting"
                },
                {
                    "start_time":"2022-06-24 10:00",
                    "end_time":"2022-06-24 15:30",
                    "title":"Training",
                    "description":"training for interns"
                }
            ]
        },
        {
            "id": "57569BE4-FF4A-4C56-A274-A24CBB7E4672",
            "schedule":[
                {
                    "start_time":"2022-06-24 8:00",
                    "end_time":"2022-06-24 8:30",
                    "title":"Training",
                    "description":"training for interns"
                },
                {
                    "start_time":"2022-06-24 9:00",
                    "end_time":"2022-06-24 9:30",
                    "title":"Leadership meeting",
                    "description":"leadership development meeting"
                },
                {
                    "start_time":"2022-06-24 10:00",
                    "end_time":"2022-06-24 15:30",
                    "title":"Training",
                    "description":"training for interns"
                }
            ]
        },
        {
     
            "id": "F33941A1-7623-4192-80E0-7B1511C17883",
            "schedule":[
                {
                    "start_time":"2022-06-24 8:00",
                    "end_time":"2022-06-24 8:30",
                    "title":"Training",
                    "description":"training for interns"
                },
                {
                    "start_time":"2022-06-24 9:00",
                    "end_time":"2022-06-24 9:30",
                    "title":"Leadership meeting",
                    "description":"leadership development meeting"
                },
                {
                    "start_time":"2022-06-24 10:00",
                    "end_time":"2022-06-24 15:30",
                    "title":"Training",
                    "description":"training for interns"
                }
            ]
        
        },
        {
            
            "id": "A31CDB07-17EE-4F50-B635-247BB9163EDF",
            "schedule":[
                {
                    "start_time":"2022-06-24 8:00",
                    "end_time":"2022-06-24 8:30",
                    "title":"Training",
                    "description":"training for interns"
                },
                {
                    "start_time":"2022-06-24 9:00",
                    "end_time":"2022-06-24 9:30",
                    "title":"Leadership meeting",
                    "description":"leadership development meeting"
                },
                {
                    "start_time":"2022-06-24 10:00",
                    "end_time":"2022-06-24 15:30",
                    "title":"Training",
                    "description":"training for interns"
                }
            ]
          
        },
        {
           
            "id": "93179369-BD5D-42CE-A266-8F164D9C0700",
            "schedule":[
                {
                    "start_time":"2022-06-24 8:00",
                    "end_time":"2022-06-24 8:30",
                    "title":"Training",
                    "description":"training for interns"
                },
                {
                    "start_time":"2022-06-24 9:00",
                    "end_time":"2022-06-24 9:30",
                    "title":"Training",
                    "description":"training for interns"
                },
                {
                    "start_time":"2022-06-24 10:00",
                    "end_time":"2022-06-24 15:30",
                    "title":"Training",
                    "description":"training for interns"
                }
            ]
           
        },
        {
            
            "id": "51E7ABC4-7F01-42EF-A6F2-E8E3379FBB26",
            "schedule":[
                {
                    "start_time":"2022-06-24 8:00",
                    "end_time":"2022-06-24 8:30",
                    "title":"Training",
                    "description":"training for interns"
                },
                {
                    "start_time":"2022-06-24 9:00",
                    "end_time":"2022-06-24 9:30",
                    "title":"Training",
                    "description":"training for interns"
                },
                {
                    "start_time":"2022-06-24 10:00",
                    "end_time":"2022-06-24 15:30",
                    "title":"Training",
                    "description":"training for interns"
                }
            ]
           
        },
        {
         
            "id": "C9191B2C-08D1-48F0-8F19-FE4FA92A852A",
            "schedule":[
                {
                    "start_time":"2022-06-24 8:00",
                    "end_time":"2022-06-24 8:30",
                    "title":"standup",
                    "description":"standup meeting"
                }
            ]
        },
        {
          
            "id": "A7DF2E8E-71DD-4C32-AE92-EE33E2D4DF18",
            "schedule":[
                {
                    "start_time":"2022-06-24 8:00",
                    "end_time":"2022-06-24 8:30",
                    "title":"Training",
                    "description":"training for interns"
                },
                {
                    "start_time":"2022-06-24 9:00",
                    "end_time":"2022-06-24 9:30",
                    "title":"Training",
                    "description":"training for interns"
                },
                {
                    "start_time":"2022-06-24 10:00",
                    "end_time":"2022-06-24 15:30",
                    "title":"Training",
                    "description":"training for interns"
                }
            ]
        
        },
        {
            "id": "BD506F8D-F4CD-4E19-ABCA-573808390FB6",
            "schedule":[
                {
                    "start_time":"2022-06-24 8:00",
                    "end_time":"2022-06-24 8:30",
                    "title":"Training",
                    "description":"training for interns"
                },
                {
                    "start_time":"2022-06-24 9:00",
                    "end_time":"2022-06-24 9:30",
                    "title":"Training",
                    "description":"training for interns"
                },
                {
                    "start_time":"2022-06-24 10:00",
                    "end_time":"2022-06-24 15:30",
                    "title":"Training",
                    "description":"training for interns"
                }
            ]
            
        },
        {
   
            "id": "36BFBBB6-15ED-4222-9528-9830434A59FC",
            "schedule":[
                {
                    "start_time":"2022-06-24 8:00",
                    "end_time":"2022-06-24 8:30",
                    "title":"Training",
                    "description":"training for interns"
                },
                {
                    "start_time":"2022-06-24 9:00",
                    "end_time":"2022-06-24 9:30",
                    "title":"Training",
                    "description":"training for interns"
                },
                {
                    "start_time":"2022-06-24 10:00",
                    "end_time":"2022-06-24 15:30",
                    "title":"Training",
                    "description":"training for interns"
                }
            ]
          
        }
        
    ];
    dbo.collection("schedules").insertMany(myobj, (err, res) => {
        if(err) throw err;
        console.log("Numver of docs inserted : " + res.insertedCount);
        db.close();
    })
})

// var mongo = require('mongoose');

// var db = mongo.connect('mongodb+srv://bevanslabbert:qk7XtDzywmAOBk82@database.e5s3d.mongodb.net/?retryWrites=true&w=majority', function(err, response){
//     if(err){console.log(err);}
//     // else {console.log('Connected to ' + db, ' + ', response)};
// });
// var coll
// db.employees.insertMany();