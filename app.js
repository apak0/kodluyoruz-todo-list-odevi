let input = document.getElementById("task")
let formTodo = document.getElementById("form")
let ulList = document.getElementById("list")

eventListeners()
function eventListeners (){ // bütün event listener'lar bu fonksiyonun içinde bulunacak.
   formTodo.addEventListener("submit", addTodo) 
   ulList.addEventListener("click",deleteTodoFromUI )
   document.addEventListener("DOMContentLoaded", loadTodoFromStorage)
}

function addTodo (e){
    const newTodo = input.value.trim();
    if (newTodo === ""){
        alertFromUI("danger","Lütfen bir todo giriniz")
    }else {
        addNewTodo(newTodo);
        addTodoToStorage(newTodo);
        if(ulList.childElementCount <2) {
            alertFromUI("primary", "Bir todo eklendi")
        }else{
            alertFromUI("primary", "Bir todo daha eklendi")
        }
        clearInput()
    };
    
    
    e.preventDefault();
}

function clearInput (){
    input.value = "";
}

function addNewTodo (todo) {
    let todoLi = document.createElement("li");
    todoLi.textContent = todo;
    let iconX = document.createElement("i");
    iconX.classList = `fa-solid fa-x`;
    todoLi.appendChild(iconX);
    ulList.appendChild(todoLi);
   
}



function alertFromUI (type,message) {
    let alertItem = document.createElement("div");
    alertItem.classList = `alert alert-${type}`;
    alertItem.style.position="fixed";
    alertItem.style.marginTop="1rem";
    alertItem.textContent = `${message}`;
    ulList.previousElementSibling.appendChild(alertItem);

    setTimeout(() => {
        alertItem.remove();
    }, 1000);
    
}

function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos))
    
}


function getTodosFromStorage() { 
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function deleteTodoFromUI (e){
    if(e.target.className === "fa-solid fa-x"){
        e.target.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.textContent)
        alertFromUI("warning","Bir todo silindi.")
    };
   
}

function loadTodoFromStorage () {
    let todos = getTodosFromStorage();
    todos.forEach(todo => {
        addNewTodo(todo)
    });
}

function deleteTodoFromStorage (deleteTodo) {
    let todos = getTodosFromStorage();
    todos.forEach(function (todo,index){
       if(todo === deleteTodo){
        todos.splice(index,1)
       } 
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}