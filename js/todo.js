const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY = "todos";

// 입력한 list 저장 fnc
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//삭제 버튼 fnc
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  saveToDos();
}

// done 버튼
function doneTodo(event) {
  const li = event.target.parentElement;
  li.classList.add("done-line");
}

// todo 리스트 만드는 fnc
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.addEventListener("click", deleteTodo);
  const doneButton = document.createElement("button");
  doneButton.innerText = "✓";
  doneButton.addEventListener("click", doneTodo);
  li.appendChild(span);
  li.appendChild(deleteButton);
  li.appendChild(doneButton);
  toDoList.appendChild(li);
}

// event fnc
function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
