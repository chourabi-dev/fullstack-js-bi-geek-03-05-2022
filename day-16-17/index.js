const express = require('express')
const { addNewFruit, getFruitsList, outOfStock, outOfStockUpdate, updateFruit, deleteFruit } = require('./main/fruitsModule')
const app = express()
const port = 8080
var jwt = require('jsonwebtoken');



/*** midlleware to test if the user is connected or not */
app.use(function(req,res,next){
    const authorization = req.headers.authorization


     var token = jwt.sign({ user:'chourabi taher',id:15 , 

    exp: Math.floor(Date.now() / 1000) + (30),

}, 'secretkey');


     console.log(token); 


     




    
    

    if (authorization != null) {
        // 

        try {
            let data = jwt.verify(authorization,'secretkey')
    
            console.log(data); 
    
            next();
        } catch (error) {
            res.send({ success:false, message:"session expired" })
        }
    } else {
        res.send({ success:false, message:"access for users only." })
    }

 
   
})




/**
 * app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/date',(req,res)=>{

    res.send(new Date());
})


app.get('/employees',(req,res)=>{

    res.send( [ { name:'chourabi' },{ name:"test employee"} ] );
})


app.post('/add-fruit',(req,res)=>{

    let stream = [];

    req.on('data',(data)=>{
        stream.push(data);
    }).on('end',()=>{
        const body = JSON.parse(Buffer.concat(stream).toString());

        res.send(body);
    })
})

 */



/******************************** main app *******************************/

app.post('/api/add-fruit',(req,res)=>{
    addNewFruit(req,res);
})



app.get('/api/fuits/list',(req,res)=>{
    getFruitsList(req,res);
})


app.get('/api/fuits/out-of-stock',(req,res)=>{
    outOfStock(req,res);
})


app.put('/api/fuits/update/out-of-stock',(req,res)=>{
     outOfStockUpdate(req,res);
})



app.put('/api/fuits/update',(req,res)=>{
   updateFruit(req,res);
})




app.delete('/api/fuits/delete',(req,res)=>{
   deleteFruit(req,res);
 })
 
 
 
 




/*** when to use PUT DELETE GET POST */ 

/**
 * app.get('/user') 

app.post('/user')

app.put('/user')

app.delete('/user')

 */





app.listen(port, () => {
  console.log(`Tuto listening on port ${port}`)
})