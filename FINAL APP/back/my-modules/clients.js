exports.createNewClient = function(req,res){
    let stream = [];
    req.on('data',(info)=>{
        stream.push(info);
    }).on('end',()=>{
        const body = (JSON.parse(stream.toString()));
        
        const mongoClient = require('mongodb').MongoClient;

        mongoClient.connect('mongodb://localhost:27017',function(err,db){
            console.log("connected");

            const appDb = db.db('mygarageapp'); 
            
            const doc = {
                firstname: body.firstname,
                lastname: body.lastname,
                email: body.email,
                phone: body.phone,
                cin: body.cin,
                address: body.address
            }; 

            appDb.collection('clients').insertOne(doc).then((response)=>{
                res.send({success:true, message:"clients inserted successfully."})
            }).catch((err)=>{
                res.send({success:false, message:"Something went wrong, pleaase try again."})
            })
           
        });

    }) 
}


exports.getAllClients = function(req,res){
    const mongoClient = require('mongodb').MongoClient;

    mongoClient.connect('mongodb://localhost:27017',function(err,db){
        console.log("connected");

        const appDb = db.db('mygarageapp');  

        appDb.collection('clients').find({}).toArray().then((response)=>{
            res.send(response)
        }).catch((err)=>{
            res.send({success:false, message:"Something went wrong, pleaase try again."})
        })
       
    });
}