var chtabot = document.getElementById('chtabot');
var chatbotbar = document.getElementById('chatbotbar');
var replyinput = document.getElementById('replyinput');
var msgList = document.getElementById('msgList');
var closebtn = document.getElementById('closebtn');
var messagesListFromUser = [];


chatbotbar.addEventListener('click',function(){
    chtabot.classList="chatbot open";
})


replyinput.addEventListener('keyup',function(e){
    const code = e.code;
    const val = e.target.value;
    

    if (code === 'Enter') {
        if (val !== '') {
            const element = `<div class="message-row">
            <div class="sent-msg">
                ${val}
            </div>
        </div>`;

        messagesListFromUser.push(val);

        msgList.innerHTML = msgList.innerHTML + element;

        replyinput.value='';

        relpyFromBot();
        }
    }

    
})



function relpyFromBot(){

    const msgFromUser = messagesListFromUser.pop();
    const keyWorksFromUser = msgFromUser.split(" ");

    console.log(keyWorksFromUser);

    // test if the user is traying to say hello

    const dicHello = [ 'slt' ,'sltt','hello', 'hi','bonjour' ];


    // test if the user is traying to buy a product

    const dicProduit = [ 'produit','product','samsung','tv','buy','nechri' ];
    
    let botDidReplyMe = false;


    for (let index = 0; index < keyWorksFromUser.length; index++) {
        
        const keyWord = keyWorksFromUser[index];

        if (dicHello.indexOf(keyWord) != -1) {
            const element = `<div class="message-row">
                <div class="recive-msg">
                    welcome to our app, how can i help you.
                </div>
            </div>`;
            msgList.innerHTML = msgList.innerHTML + element;

            botDidReplyMe = true;
            break;

        }else if( dicProduit.indexOf(keyWord) != -1 ){
            const element = `<div class="message-row">
            <div class="recive-msg">
                you can access our shop via <a href="#">this link</a>
            </div>
        </div>`;
        botDidReplyMe = true;
        msgList.innerHTML = msgList.innerHTML + element;

        break;
        }
    
        
    }

    if ( botDidReplyMe === false) {
        const element = `<div class="message-row">
        <div class="recive-msg">
                sorry, i could't undrestand :'(
        </div>`;
    
        msgList.innerHTML = msgList.innerHTML + element;
    }
 


}




closebtn.addEventListener('click',function(){
    chtabot.classList="chatbot closed";
})





/**
 * 

let prs = [ 
    { id:5, name:"chourabi taher 0" },
    { id:6, name:"chourabi taher 1" },
    { id:7, name:"chourabi taher 2" },
    
].filter((p)=>p.id>5)

console.log(prs);
 */