var lignesDisplay = document.getElementById('lignesDisplay');
var gridDisplay = document.getElementById('gridDisplay');

var display = 0; // 0 ligne // 1 colones

var priceToShow = document.getElementById('priceToShow');
var priceRange = document.getElementById('priceRange');
var searchFeild = document.getElementById('searchFeild');

var productsListElement = document.getElementById('productsListElement');


var priceFilter = 8000;
var query = '';

 


var productsList = [
    { price:8000, title:"iPhone 13 pro max",  category:"Smart phone", photoURL:"https://bgr.com/wp-content/uploads/2021/04/iphone-13-design-schematic-3d-leak-1.jpg?quality=70&strip=all&w=834" },
    { price:5500, title:"PlayStation 5",  category:"Entertaimnet", photoURL:"https://akket.com/wp-content/uploads/2020/10/Sony-PlayStation-5-Pro-1.jpg" },
    { price:3000, title:"Samsung smart TV 50'",  category:"Smart phone", photoURL:"https://ksassets.timeincuk.net/wp/uploads/sites/54/2020/06/Samsung-TU8000.jpg" },
 
];
 


searchFeild.addEventListener('keyup',function(e){
    const val = e.target.value;
    query = val;
    initData();
})

lignesDisplay.addEventListener('click',function(){
    gridDisplay.classList='item';
    lignesDisplay.classList='item active';
    display =0;
    initData();
})

gridDisplay.addEventListener('click',function(){
    gridDisplay.classList='item active';
    lignesDisplay.classList='item';
    display = 1;
    initData();
})


function maxProcuctPrice(){
    let max =0 ;

    productsList.map((p)=>{
        if (p.price > max) {
            max = p.price;
        }
    })

    return max;
}

priceRange.addEventListener('change',function(e){
    const val = e.target.value; 
    /**
     * 100 max
     * val  ?
     */  
    let price = ( ( Number(val) * maxProcuctPrice() ) / 100 )

    priceFilter = price;

    priceToShow.innerHTML = price+'$';

    initData();
    
})




function initData(){
    // UI
    productsListElement.innerHTML = '';

    let produitsFianl = productsList.filter((p)=> ( p.title.toLowerCase().indexOf(query.toLowerCase()) != -1 ) && ( p.price <= priceFilter ) );

   

    produitsFianl.map((p)=>{
        if (display == 0) {
            const element = `
            <div class="col-md-12  mt-3">
                                 <div class="row">
                                    <div class="col-sm-6">
                                        <img src="${p.photoURL}" class="w-100" alt="">
                                    </div>
                                    <div class="col-sm-6">
                                       <h3>${p.title}</h3>
                                       <p class="text-muted">${p.category}</p>
                                       <p class="text-muted">${p.price}$</p>
                                       
                                    </div>
                                    
                                 </div>
                             </div>`;
            productsListElement.innerHTML=productsListElement.innerHTML+element;
        } else {
            const element = `
            <div class="col-md-4  mt-3">
                                  
                                    
                                        <img src="${p.photoURL}" class="w-100" alt="">
                                     
                                    <div class="card-body">
                                       <h3>${p.title}</h3>
                                       <p class="text-muted">${p.category}</p>
                                       <p class="text-muted">${p.price}$</p>
                                       
                                    </div>
                                    
                                  
                             </div>`;
            productsListElement.innerHTML=productsListElement.innerHTML+element;
        }
    })
    
}


initData();