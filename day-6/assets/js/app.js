var todosList = document.getElementById('todos-list');
var todoInput = document.getElementById('todo-input');

 

function removeElement(e){
    console.log(e);
    const parent = e.target.parentNode;

    e.target.parentNode.parentNode.removeChild(parent);
}


function addTodo(){
    const val = todoInput.value;

    if( val != '' ){
        todoInput.value= ''; 
        const liElement = `<li>${val}  <span class="delete-pointer" onclick="removeElement(event)" >&times;</span> </li>`; 
        todosList.innerHTML = todosList.innerHTML +  liElement;
    }


}