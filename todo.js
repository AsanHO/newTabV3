const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const TODOS_KEY = "todos"
let todos = JSON.parse(localStorage.getItem(TODOS_KEY));

function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}
function loadTodos(){
    todoList.replaceChildren();
    todos = JSON.parse(localStorage.getItem(TODOS_KEY));
    todos.forEach(element => {
        showTodo(element);
    },);
}

function showTodo(todo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.id = todo.id;
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = todo.text;
    button.innerText = "❌";
    button.addEventListener("click",deleteTodo);
    todoList.appendChild(li);
}

function deleteTodo(event){
    const target = event.target.parentElement.id;
    todos = todos.filter((e)=> {        
        return e.id !== parseInt(target);
    });
    saveTodos();
    loadTodos();
}

function addTodo(text){
    const newTodo = {
        text:text,
        id:Date.now()
    }
    todos.push(newTodo);
    saveTodos();
}

function handleToDoSubmit(event){
    event.preventDefault(); 
    const newToDo = todoInput.value;
    todoInput.value = "";
    addTodo(newToDo);
    loadTodos();
 } 

if (todos !== null){
    loadTodos();
}


todoForm.addEventListener("submit",handleToDoSubmit);