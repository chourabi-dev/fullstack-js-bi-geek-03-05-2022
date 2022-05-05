const http = require('http');
const url = require('url');
const { getCurrentYear, getCurrentMonth, getCurrentDate } = require('./modules/dateModule');

const upperModule = require('upper-case');



http.createServer(function(req,res){
    const year =  getCurrentYear();
    const month =  getCurrentMonth();
    const date =  getCurrentDate();
     

    const str = upperModule.upperCase('date');

    res.write(` ${str} :  ${year} / ${month} / ${date}`);

    res.end();

     

}).listen(8080);






/*** MINI APP 1
 * 
 * 
 * const path = url.parse(req.url,true).pathname;

    if (path === '/somme') {
        const params = url.parse(req.url,true).query;
        res.write(    (Number(params.x) + Number(params.y) ).toString()    );
        res.end();
    }else if (path === '/multi') {
        const params = url.parse(req.url,true).query;
        res.write(    (Number(params.x) * Number(params.y) ).toString()    );
        res.end();
    }else if (path === '/sous') {
        const params = url.parse(req.url,true).query;
        res.write(    (Number(params.x) - Number(params.y) ).toString()    );
        res.end();
    } else {
        res.write('Welcome to app you can add number via /somme');
        res.end();
    }
 */