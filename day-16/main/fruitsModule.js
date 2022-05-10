const mongodb = require('mongodb');

exports.addNewFruit = function(req,resGlobale){
    // code...
    let stream = [];

    req.on('data',(data)=>{
        stream.push(data);
    }).on('end',()=>{
        const body = JSON.parse(Buffer.concat(stream).toString());

        // connect to mongoDB
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/";

        MongoClient.connect(url, function(err, myMongoServer) {
        if (err) throw err;
        var dbo = myMongoServer.db("bigeekdemo");
        var myobj = body;


            dbo.collection("fruits") .insertOne(myobj, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                myMongoServer.close();

                resGlobale.send({ success:true, message:"fruit inserted successfully" });
            });


        });
                
        

    })
}


exports.getFruitsList = function(req,res){
    // connect to mongoDB
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function(err, myMongoServer) {
    if (err) throw err;
    var dbo = myMongoServer.db("bigeekdemo"); 
        dbo.collection("fruits").find({}).toArray().then((fruits)=>{
            res.send(fruits);
        }).catch((err)=>{
            res.send({ success: false });
        })


    });
            
}



exports.outOfStock = function(req,res){
    // connect to mongoDB
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function(err, myMongoServer) {
    if (err) throw err;
    var dbo = myMongoServer.db("bigeekdemo"); 

        let filter = {
            quantity : 0
        };


        dbo.collection("fruits").find(filter).toArray().then((fruits)=>{
            res.send(fruits);
        }).catch((err)=>{
            res.send({ success: false });
        })


    });
            
}