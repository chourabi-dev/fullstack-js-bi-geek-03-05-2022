var state = false;
var switchBtn = document.getElementById('switch');
var body = document.getElementById('body');



function changeState(){
    state = ! state; 
    if (state == true ) {
        switchBtn.className ='toggle-switch active';
        body.className='dark-mode';
    }else{
        switchBtn.className ='toggle-switch';
        body.className='';
    }
}

/**************************************************************************** */
var size = 15;

function bigP(event){
   size+=10;
    const element = event.target
    element.style.fontSize=`${size}px`;
}

 