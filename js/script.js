const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", newTodo);
todoList.addEventListener("click", deletecheck);

function newTodo(e) {
  // Prevent from submitting
  e.preventDefault();
  // Prevent from empty input
  if (!todoInput.value) {
    alert("Add task");
    return;
  }
  // Create DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // Create LI
  const todoLi = document.createElement("li");
  todoLi.innerText = todoInput.value;
  todoLi.classList.add("todo-item");
  todoDiv.appendChild(todoLi);
  // Create Check Button
  const checkTodo = document.createElement("button");
  checkTodo.innerHTML = '<i class="fas fa-check"></i>';
  checkTodo.classList.add("todo-check");
  todoDiv.appendChild(checkTodo);
  // Create Trash Button
  const deleteTodo = document.createElement("button");
  deleteTodo.innerHTML = '<i class="fas fa-trash"></i>';
  deleteTodo.classList.add("todo-delete");
  todoDiv.appendChild(deleteTodo);
  // Append to List
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deletecheck(e) {
  const item = e.target;
  // delete todo
  if (item.classList[0] === "todo-delete") {
    const todo = item.parentElement;
    todo.remove();
  }
  // Check
  if (item.classList[0] === "todo-check") {
    const todo = item.parentElement;
    todo.classList.toggle("done");
  }
}
