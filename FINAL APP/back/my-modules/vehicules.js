const { ObjectId } = require('mongodb');

exports.addNewVehicule = function(req,res){
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
                mark: body.mark,
                model: body.model,
                dmepc: body.dmepc,
                registration: body.registration,
                color: body.color,
                
                owner: body.owner
            }; 

            appDb.collection('vechiuels').insertOne(doc).then((response)=>{
                res.send({success:true, message:"vehicule inserted successfully."})
            }).catch((err)=>{
                res.send({success:false, message:"Something went wrong, pleaase try again."})
            })
           
        });

    }) 
}



exports.getClientVehicules = function(req,res){
 
        
        const mongoClient = require('mongodb').MongoClient;

        mongoClient.connect('mongodb://localhost:27017',function(err,db){
            console.log("connected");

            const appDb = db.db('mygarageapp');  

            const filter = {
                owner: req.query.owner
            };

 
            appDb.collection('vechiuels').find(filter).toArray().then((response)=>{
                res.send(response)
            }).catch((err)=>{
                res.send({success:false, message:"Something went wrong, pleaase try again."})
            })
           
        });

   
}



exports.findVehiculeByID = function(req,res){
 
        
    const mongoClient = require('mongodb').MongoClient;

    mongoClient.connect('mongodb://localhost:27017',function(err,db){
        console.log("connected");

        const appDb = db.db('mygarageapp');  
        
        const filter = {
            _id: ObjectId(req.query.id)
        };


        appDb.collection('vechiuels').findOne(filter).then((response)=>{
            if (response != null) {
                res.send(response)
            
            } else {
                res.send({ success : false, message:'Vehicule not found' })
            }
        }).catch((err)=>{
            res.send({success:false, message:"Something went wrong, pleaase try again."})
        })
       
    });


}






exports.addNewIntervention = function(req,res){
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
                price: body.price,
                vehicule: body.vehicule,
                description: body.description,
                operationID: body.operationID
                
            }; 

            appDb.collection('interventions').insertOne(doc).then((response)=>{
                res.send({success:true, message:"interventions inserted successfully."})
            }).catch((err)=>{
                res.send({success:false, message:"Something went wrong, pleaase try again."})
            })
           
        });

    }) 
}








exports.getInterventionsListByVehiculeID = function(req,res){
      
        const mongoClient = require('mongodb').MongoClient;

        mongoClient.connect('mongodb://localhost:27017',function(err,db){
            console.log("connected");

            const appDb = db.db('mygarageapp'); 
            
            const filter = {
                vehicule: req.query.vehicule
            }; 

            appDb.collection('interventions').find(filter).toArray().then((response)=>{
                res.send(response)
            }).catch((err)=>{
                res.send({success:false, message:"Something went wrong, pleaase try again."})
            })
           
        });
 
}





exports.getOperationsList = function(req,res){
      
    const mongoClient = require('mongodb').MongoClient;

    mongoClient.connect('mongodb://localhost:27017',function(err,db){
        console.log("connected");

        const appDb = db.db('mygarageapp'); 
        
        

        appDb.collection('operations').find({}).toArray().then((response)=>{
            res.send(response)
        }).catch((err)=>{
            res.send({success:false, message:"Something went wrong, pleaase try again."})
        })
       
    });

}
