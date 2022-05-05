const http = require('http');
const fs = require('fs');
const url = require('url');


http.createServer(function(req,res){


    const path = url.parse(req.url,true).pathname;
    const method = req.method;

    
/*


    switch (path) {
        case '/add-fruit':
            
            if (method==='POST') {
                 let stream = [];

                 req.on('data',(data)=>{
                     stream.push(data);                 
                }).on('end',()=>{
                     
                    const x = 15;
                    x.toString()

                    let str= Buffer.concat(stream).toString();

                    const body = (JSON.parse(str));


                    console.log(body.name);

                    fs.appendFile('./fruits.txt',body.name+'#',function(err){
                        if (err) {
                            console.log(err);
                        }

                        res.write('fruit inserted !!')
                        res.end();
                    })

                    
                })



            } else {
                res.write('bad request');
                res.end();
            }
            break;
    


        case '/fruits-list':
            if (method === 'GET') {
                fs.readFile('./fruits.txt',function(err,data){
                    const str = data.toString();
                     

                    let blocHTML='<ul>';

                    str.split('#').map(fruit => {
                            blocHTML= blocHTML+'<li>'+fruit+'</li>'
                    });


                     blocHTML=blocHTML+'</ul>';

                    res.writeHead(200,{"content-type":"text/html"})
                    res.write(blocHTML)
                    res.end();
                })
            }else{
                res.write('bad request');
                res.end();
            }
        break;



        default:
            break;
    }*/





    switch (path) {
        case '/summer':
            fs.readFile('./app/summer.html',function(err,data){
                res.end(data);
            })
            break;
        
            case '/winter':
                fs.readFile('./app/winter.html',function(err,data){
                    res.end(data);
                })
                break;
                
    
        default:
            fs.readFile('./app/index.html',function(err,data){
                res.end(data);
            })
            break;
    }

 

}).listen(8080);