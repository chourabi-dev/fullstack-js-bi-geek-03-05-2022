const mongodb = require('mongodb');
const urlModule = require('url');


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
            quantity : 0,
            // less than 10 items { quantity : { $lt : value }  }   
            //                               // selector
        };


        dbo.collection("fruits").find(filter).toArray().then((fruits)=>{
            res.send(fruits);
        }).catch((err)=>{
            res.send({ success: false });
        })


    });
            
}





exports.outOfStockUpdate = function(req,resGlobale){
    // connect to mongoDB
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function(err, myMongoServer) {
    if (err) throw err;
    var dbo = myMongoServer.db("bigeekdemo"); 

        let filter = {
            quantity : 0 
        };


        dbo.collection("fruits").updateMany( 
            filter,

            { $set :{ quantity : 10, updatedAt: new Date() } }

         ).then((updateResult)=>{
         

            resGlobale.send( { success:true, message : `${updateResult.modifiedCount} product updated.` })


        }).catch((err)=>{
            res.send({ success: false });
        })


    });
            
}




exports.updateFruit = function(req,resGlobale){
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

            const params = urlModule.parse(req.url,true).query;

            if (params.id != null) {
                dbo.collection("fruits").updateOne(
                    { _id : mongodb.ObjectId(params.id) },
                    { $set: { provider : body.provider } }
                ).then((updateResult)=>{
         

                    console.log(updateResult.modifiedCount);

                    resGlobale.send( { success:true, message : `product updated successfully.` })
        
        
                }).catch((err)=>{
                    res.send({ success: false });
                })


            } else {
                res.send({ success: false, message:'missing id' });
            }
            


        });
                
        

    })
}




exports.deleteFruit = function(req,resGlobale){
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

            const params = urlModule.parse(req.url,true).query;

            if (params.id != null) {
                dbo.collection("fruits").deleteOne(
                    { _id : mongodb.ObjectId(params.id) } 
                ).then((deleteResult)=>{
         

                    console.log(deleteResult.deletedCount);

                    if (deleteResult.deletedCount == 1) {
                        resGlobale.send( { success:true, message : `product deleted successfully.` })
        
                    } else {
                        res.send({ success: false, message:'cannot find product with givin id' });
                    }
        
                }).catch((err)=>{
                    res.send({ success: false });
                })


            } else {
                res.send({ success: false, message:'missing id' });
            }
            


        });
                
        

    })
}