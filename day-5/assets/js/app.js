console.log("js works from app.js");

// variables

/**
 * var x;

{
    var name =" chourabi taher";
}
 
let year = 2022; 

console.log(document); 
console.log(window);
 */

//** variable types */
/*
console.log(typeof "hello");;
console.log(typeof 2006);;
console.log(typeof 2.6);;
console.log(typeof  true);;
console.log(typeof  [1,2,3,5,6] );;
console.log(typeof {} );;
console.log(typeof  function(){}  );;
console.log(typeof  new Date() );;
*/

 /***** first app***** */




 // OLD console.log("Somme de x et y = "+z);
 
 // console.log( `Somme de x et y =  ${z}` );
 

 // first , we must select the HTML element to work with
 var sommeElement = document.getElementById("somme");
 var xElement = document.getElementById("inputx");
 var yElement = document.getElementById("inputy");
 
 
function somme(){
    var x = Number(xElement.value);
    var y = Number(yElement.value);
   

    if (xElement.value == '' ||  yElement.value =='' ) {
        
       
        alert("bad params");
    }else{
        var z = (x+y);
        sommeElement.innerText = z;
    }

}
 