var MongoClient = require('mongodb').MongoClient
var url = 'mongodb+srv://bevanslabbert:qk7XtDzywmAOBk82@database.e5s3d.mongodb.net/?retryWrites=true&w=majority'
var bcrypt = require('bcrypt');

MongoClient.connect(url, (err, db)  =>  {
    if(err) throw err;

    var dbo = db.db("test");
    var myobj = [
        {
            "id": "6C4E2C5D-BBBB-4386-AA71-B7F56727433C",
            "username": "knopel",
            "first_name": "Leslie",
            "surname": "Knope",
            "password": "jjsdiner"
        },
        {
            "id": "CBB8569D-C331-4629-A1F7-236BFA1A2822",
            "username": "dwyera",
            "first_name": "Andy",
            "surname": "Dwyer",
            "password": "mouserat"
        },
        {
            "id": "F29B9474-CABC-46E3-8B75-66281ABFBA92",
            "username": "beaslyp",
            "first_name": "Pam",
            "surname": "Beasly",
            "password": "jim"
        },
        {
            "id": "EB3741EF-929D-430C-B637-EA5425ABB0E7",
            "username": "ludgatea",
            "first_name": "April",
            "surname": "Ludgate",
            "password": "mouserat"
        },
        {
            "id": "64F25F3B-0F65-45EE-92A7-2B53E58B5CDD",
            "username": "baskinc",
            "first_name": "Carole",
            "surname": "Baskin",
            "password": "sosavage"
        },
        {
            "id": "7EE29BBE-259C-402B-B870-7C32FC845674",
            "username": "schruted",
            "first_name": "Dwight",
            "surname": "Schrute",
            "password": "bearsbeatsbattlestargalatica"
        },
        {
            "id": "24D54F49-1D8C-417A-9B43-AC12F43DE294",
            "username": "haverfordt",
            "first_name": "Tom",
            "surname": "Haverford",
            "password": "treatyoself720"
        },
        {
            "id": "A44424B0-3253-4EE7-9060-7C977F4840C8",
            "username": "scottm",
            "first_name": "Michael",
            "surname": "Scott",
            "password": "worldsbestboss"
        },
        {
            "id": "B8501AFC-AD8F-4EBD-B733-87D9DA6AD713",
            "username": "halpertj",
            "first_name": "Jim",
            "surname": "Halpert",
            "password": "pam"
        },
        {
            "id": "57569BE4-FF4A-4C56-A274-A24CBB7E4672",
            "username": "wyattb",
            "first_name": "Ben",
            "surname": "Wyatt",
            "password": "itsabouthecones"
        },
        {
            "id": "F33941A1-7623-4192-80E0-7B1511C17883",
            "username": "thegreyg",
            "first_name": "Gandalf",
            "surname": "The Grey",
            "password": "flyyoufools"
        },
        {
            "id": "A31CDB07-17EE-4F50-B635-247BB9163EDF",
            "username": "potterh",
            "first_name": "Harry",
            "surname": "Potter",
            "password": "scarhead"
        },
        {
            "id": "93179369-BD5D-42CE-A266-8F164D9C0700",
            "username": "speedyRenels",
            "first_name": "Marcel",
            "surname": "Renels",
            "password": "speedy@renels123"
        },
        {
            "id": "51E7ABC4-7F01-42EF-A6F2-E8E3379FBB26",
            "username": "Brokei",
            "first_name": "Thomas",
            "surname": "Renels",
            "password": "tomy1"
        },
        {
            "id": "C9191B2C-08D1-48F0-8F19-FE4FA92A852A",
            "username": "Louis",
            "first_name": "Louis",
            "surname": "Late",
            "password": "louisss1"
        },
        {
            "id": "A7DF2E8E-71DD-4C32-AE92-EE33E2D4DF18",
            "username": "KaenuReeves",
            "first_name": "Keanu",
            "surname": "integ",
            "password": "kia"
        },
        {
            "id": "BD506F8D-F4CD-4E19-ABCA-573808390FB6",
            "username": "Vince",
            "first_name": "Vincent",
            "surname": "Baker",
            "password": "VinceWins"
        },
        {
            "id": "36BFBBB6-15ED-4222-9528-9830434A59FC",
            "username": "Jesi",
            "first_name": "Jesse",
            "surname": "Kolvan",
            "password": "Jess9181"
        }

    ];

    // myobj.forEach((doc) =>  {
    //     bcrypt.hash(doc.password, 10, (err, hash)     =>  {
    //         doc.password = hash;
    //         // console.log(doc.password);
    //         dbo.collection("registered_users").insertOne(doc, (err, res)    =>  {
    //             if(err) throw err;
    //         })
    //     });
    // })

    // dbo.collection("registered_users").insertMany(myobj, (err, res) => {
    //     if(err) throw err;
    //     console.log("Numver of docs inserted : " + res.insertedCount);
    //     db.close();
    // })
})

// var mongo = require('mongoose');

// var db = mongo.connect('mongodb+srv://bevanslabbert:qk7XtDzywmAOBk82@database.e5s3d.mongodb.net/?retryWrites=true&w=majority', function(err, response){
//     if(err){console.log(err);}
//     // else {console.log('Connected to ' + db, ' + ', response)};
// });
// var coll
// db.employees.insertMany();