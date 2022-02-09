const input = document.querySelector(".todo_____input");
const todoBtn = document.querySelector(".add_____icon");
const list = document.querySelector(".todo_____list");
const selectTodo = document.querySelector(".user___select");


// item button eventlister
document.addEventListener("DOMContentLoaded" , getTodo);
todoBtn.addEventListener("click", addTodo);
list.addEventListener("click", deleteBtnFunc);
// selectTodo.addEventListener("click", filterTodo);


// add item function
function addTodo(event){
    event.preventDefault();

    // create li
    const todoLI = document.createElement('li');
    todoLI.classList.add('todo_____li');

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todoLI_____div");

    const todoPara = document.createElement("p");
    todoPara.innerText = input.value;
    todoPara.classList.add("liText");

    // add to localStorage
    saveLocalTodos(input.value);

    todoLI.appendChild(todoDiv);
    todoDiv.appendChild(todoPara);

    const todoBtn = document.createElement("div");
    todoBtn.classList.add("todoBtn");

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete_____button");

    const checkBtn = document.createElement('button');
    checkBtn.innerText = "Complete";
    checkBtn.classList.add("com_____button");


    todoBtn.appendChild(deleteBtn);
    todoBtn.appendChild(checkBtn);

    todoDiv.appendChild(todoBtn);

    list.appendChild(todoLI);


    // clear input

    input.value = " ";
}



function deleteBtnFunc(e){
    const item = e.target;

    if(item.classList[0] === 'delete_____button'){
       const todoParent1 =  item.parentElement;
       const todoParent2 =  todoParent1.parentElement;
       const todoParent3 =  todoParent2.parentElement;
       

       todoParent3.classList.add("fall");
       removeLocalTodo(item);

       todoParent3.addEventListener("transitionend", function(){
        todoParent3.remove();
       });
    }


    if(item.classList[0] === 'com_____button'){
        const todoParent1 =  item.parentElement;
       const todoParent2 =  todoParent1.parentElement;
       const todoParent3 =  todoParent2.parentElement;
       todoParent3.classList.toggle("completed");
     }
}

// function filterTodo(e){
//     const filtering = list.childNodes;
//     console.log(filtering)
//     filtering.forEach(function(todoLI){
//         switch (e.target.value){
//             case "all":
//                 todoLI.style.display = "block";
//                 break;
//             case "completed":
//                 if(todoLI.classList.contains("completed")){
//                     todoLI.style.display = "block"; 
//                 }else{
//                     todoLI.style.display = "none"; 
//                 }    
//         }
//     })
// }


function saveLocalTodos(item){
    // check
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(item);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodo(){
    // check
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.forEach(function (item){
         // create li
    const todoLI = document.createElement('li');
    todoLI.classList.add('todo_____li');

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todoLI_____div");

    const todoPara = document.createElement("p");
    todoPara.innerText = item;
    todoPara.classList.add("liText");

    todoLI.appendChild(todoDiv);
    todoDiv.appendChild(todoPara);

    const todoBtn = document.createElement("div");
    todoBtn.classList.add("todoBtn");

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete_____button");

    const checkBtn = document.createElement('button');
    checkBtn.innerText = "Complete";
    checkBtn.classList.add("com_____button");


    todoBtn.appendChild(deleteBtn);
    todoBtn.appendChild(checkBtn);

    todoDiv.appendChild(todoBtn);

    list.appendChild(todoLI);

    })
}


function removeLocalTodo(item){
    // check
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    const bhaiReBhai = item.parentElement;
    const oreBhai = bhaiReBhai.parentElement;
    const baal = oreBhai.parentElement;

    const baaaaaaal = baal.children[0].children[0].innerText;
    todos.splice(todos.indexOf(baaaaaaal), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}