var sha1 = require('sha1');
var jwt = require('jsonwebtoken');


exports.createUser = function (req,res){
    let stream = [];
    req.on('data',(info)=>{
        stream.push(info);
    }).on('end',()=>{
        const body = (JSON.parse(stream.toString()));
        
        const mongoClient = require('mongodb').MongoClient;

        mongoClient.connect('mongodb://localhost:27017',function(err,db){
            console.log("connected");

            const appDb = db.db('mygarageapp');


            // install sha1 first
            // npm i sha1
            
            const doc = {
                username: body.username.trim(),
                password : sha1(body.password),
                email: body.email.trim()
            }; 

            appDb.collection('users').insertOne(doc).then((response)=>{
                res.send({success:true, message:"user created successfully."})
            }).catch((err)=>{
                res.send({success:false, message:"Something went wrong, pleaase try again."})
            })
            
            
           
        });

    }) 


   
}




exports.authUser = function (req,res){
    let stream = [];
    req.on('data',(info)=>{
        stream.push(info);
    }).on('end',()=>{
        const body = (JSON.parse(stream.toString()));
        
        const mongoClient = require('mongodb').MongoClient;

        mongoClient.connect('mongodb://localhost:27017',function(err,db){
            console.log("connected");

            const appDb = db.db('mygarageapp');


            // install sha1 first
            // npm i sha1
            
            const filter = {
                username: body.username,
                password : sha1(body.password)
            }; 

            appDb.collection('users').findOne(filter).then((response)=>{
                
                if (response != null) {
                    // first we need to install jwt
                    // npm i jsonwebtoken
                    var token = jwt.sign( {  exp: Math.floor(Date.now() / 1000) + (60 * 60),  user : response } , 'secret-key-in-string-fomr');


                    res.send({success:true, message:"connected." , token:token})
                } else {
                    res.send({success:false, message:"wrong username or password."})
                }

            }).catch((err)=>{
                res.send({success:false, message:"Something went wrong, pleaase try again."})
            })
            
            
           
        });

    }) 


   
}