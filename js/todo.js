const TODOS_KEY = 'todos';

const todoForm = document.getElementById('todo-form');
const showList = document.getElementById('todo-list');

let todos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((item) => parseInt(li.id) !== item.id);
    saveTodos();
}

function paintTodo(newTodoObj) {
    const li = document.createElement('li');
    const span = document.createElement('span');

    li.setAttribute('id', newTodoObj.id);
    span.innerText = newTodoObj.text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.addEventListener('click', deleteTodo);

    li.appendChild(span);
    li.appendChild(deleteBtn);

    showList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const todoInput = todoForm.querySelector('input');
    const newTodoObj = {
        id: Date.now(),
        text: todoInput.value,
    };
    todoInput.value = '';
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}
todoForm.addEventListener('submit', handleTodoSubmit);

// localstorage 에 저장되어있는 todos 불러오기
const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) {
    parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}