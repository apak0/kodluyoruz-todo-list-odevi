let input = document.getElementById("task")
let formTodo = document.getElementById("form")
let ulList = document.getElementById("list")


formTodo.addEventListener("submit", addTodo)

function addTodo (e){
    newTodo = input.value;
    if (newTodo === ""){
        // uyarı mesajı
        alert("lütfen boş girmeyin")
    }else {
        // eklendi mesajı
        
        addNewTodo();
    }
    
    console.log(newTodo);
    e.preventDefault();
}


function addNewTodo () {
    
    let todoLi = document.createElement("li");
    todoLi.textContent = input.value;
    let iconX = document.createElement("i");
    iconX.classList = `fa-solid fa-x`;
    todoLi.appendChild(iconX)

    ulList.appendChild(todoLi)
    addTodosToStorage(todoLi)

}

function removeTodosFromUI (e) {
    console.log()
    // if(e.target.className === `fa-solid fa-x`){
    //     e.target.parentElement.innerHtml.remove()
    // }
}
removeTodosFromUI()

// function addTodosToStorage (todo){
//     let todos = [todo];
    
//    console.log(todos)
// }

// addTodosToStorage()


// function getTodoFromStorage () {
//     let todos = ulList.forEach(liItem => {
//         console.log(liItem)
//     });
    
// }

// getTodoFromStorage()