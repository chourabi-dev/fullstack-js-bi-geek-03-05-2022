 // JSON
/**
 *  var employee = { name:'chourabi taher', email:'tchourabi@gmail', phone:"93863732",
 address: {
     city:'Tunisia',
     zipCode:'1006'
 }
}
 
 */


var productsList = [
    1,2,3,5,6,8,7,4,5,9,6,3,2
];

/** PUSH
 * productsList.push(20)
  15 = > new length
 */

  /**
   * productsList.pop()
20 remove from the end 
   */


/**
 * productsList.shift() // remove from start
 * 
 * productsList.splice(2,3)
(3) [5, 6, 8]
 */

/**
 * productsList.slice( 8,10 )  // start end return a part from the array
 */

/**
 * productsList.concat([88,199])
(12) [2, 3, 7, 4, 5, 9, 6, 3, 2, 19, 88, 199]
 */

/**
 * taher#chourabi#test'.split("#")
(3) ['taher', 'chourabi', 'test']
['taher', 'chourabi', 'test'].join("#")
'taher#chourabi#test'

 */


//******************MAP********************** */

// Simple loop with a function on a array
productsList.map( (e)=>{
    console.log(e);
});

/************ filter ************ */
/**
 * 
var tmp = [];

productsList.map((e)=>{
    if (e < 8) {
        tmp.push(e);
    }
})


console.log(tmp);
 */


var tmp = productsList.filter( (e)=> {
    return ( e < 8 );
});
 
var tmp = productsList.filter( (e)=>    ( e < 8 )  );


var products = [
    { title:"samsung a52" , price : 1800 },
    { title:"samsung a51" , price : 1200 },
    { title:"samsung a50" , price : 1000 },
    { title:"samsung a12" , price : 500 } 
    
] 


var f = products.filter( (p)=> p.price <= 1000 );



var transactions = [
    { amount: 1000 , date:'2022-03-05' },
    { amount: 1000 , date:'2022-03-06' },
    { amount: 1805 , date:'2022-03-07' },
    { amount: 1000 , date:'2022-03-08' },
    { amount: 1200 , date:'2022-03-09' }  
] 

var tf = transactions.filter( (t)=> ( new Date(t.date).getTime() < new Date('2022-03-07').getTime() )  )


/************************************************************************************ */


var productsCart = [
    { name:"A75", price:8000 },
    { name:"A71", price:1200 },
    { name:"A72", price:900 },
    
];


var ulElement = document.getElementById('list-cart');
var BlocHTML = '';

productsCart.map((p)=>{
    let tmpHTMLBloc = `<li><h3>${p.name}</h3> <p><small>${p.price} $</small></p> </li>`;
    BlocHTML = BlocHTML+tmpHTMLBloc;
})
console.log(BlocHTML);

ulElement.innerHTML = BlocHTML;