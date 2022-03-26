/*var box = document.getElementById('box');

 
box.addEventListener('click',function(event){

    box.classList=box.classList+" box-100";

});*/


/********************************************************************************** */
/*
var searchInput = document.getElementById('search-input');
var list = document.getElementById('list');



searchInput.addEventListener('keyup',function(){
    const val = searchInput.value;
    


    for (let index = 0; index < list.children.length; index++) {
          const element = list.children[index]; // <li>
        
         const txt = element.innerText; // text inside the li

        
        if (txt.indexOf(val) == -1) {
            element.style.display = "none";
        }else{
            element.style.display = "list-item";
            
        } 
        
    }
    
})*/

/************************************************************************************* */
/*
var chatzone = document.getElementById("chatzone");
var msgZone = document.getElementById('msgZone');
var statusElement = document.getElementById('status');



msgZone.addEventListener('keyup',function(e){
    const val = e.target.value;

    if (val !== '') {
        statusElement.classList = '';
    }else{
        statusElement.classList = 'd-none';
    }


    if (e.code === 'Enter') {
        const date = new Date();

        // add msg 
        let msgElement = `
        <div> <p>${val}</p> <small>${ date  }</small> </div>
        `;

        chatzone.innerHTML = chatzone.innerHTML+msgElement;
        msgZone.value = '';
        statusElement.classList = 'd-none';



        chatzone.scrollTo(0,chatzone.scrollHeight)
    }
})*/



/******************************************************************* */

var feild = document.getElementById('feild');
var global = document.getElementById('global');



var ball = document.getElementById('ball');

feild.addEventListener('mousemove',function(e){
    const x = e.clientX;
    const y = e.clientY;
     
    ball.style.left=(x-25)+'px';
    ball.style.top=(y -25)+'px';
    
})

feild.addEventListener("mousedown",function(e){
    const x = e.clientX;
    const y = e.clientY;
     
    let elemnt = `<div class="ball-2" style="left: ${x}px;top:${y}px" ></div>`;

    global.innerHTML= global.innerHTML+elemnt;
    
})

