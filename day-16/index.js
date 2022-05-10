const express = require('express')
const { addNewFruit, getFruitsList, outOfStock } = require('./main/fruitsModule')
const app = express()
const port = 8080

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






app.listen(port, () => {
  console.log(`Tuto listening on port ${port}`)
})