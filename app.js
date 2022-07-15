const input_txt = document.getElementById("todotxt");
const add_btn = document.querySelector(".add-btn");
const todolst = document.getElementById("todo-view");
const clear_btn = document.querySelector("#clear-btn");

var todos = [];
function addTodo(text) {
  const todo_data = {
    key: Date.now(),
    text: input_txt.value,
    checked: false,
  };
  todos.push(todo_data);
  renderTodo(todo_data);
}
function renderTodo(todo) {
  localStorage.setItem("todosRef", JSON.stringify(todos));

  const li = document.createElement("li");
  const deleteIcon = document.createElement("img");
  const text = document.createTextNode(todo.text);
  
  li.setAttribute("data-key", todo.key);
  const item = document.querySelector(`[data-key='${todo.key}']`)
  li.append(text);
  if (todo.deleted) {
    todolst.remove(li)
    return;
  }

  todolst.appendChild(li);
  deleteIcon.src = "./img/delete (1).png";
  deleteIcon.style.width = "2em";
  deleteIcon.style.height = "2em";
  li.style.display = "flex";
  li.style.alignItems = "center";
  li.style.justifyContent = "space-between";
  li.append(deleteIcon);

  deleteIcon.addEventListener("click", () => {
    deleteTodo(todo.key)
  });

  li.addEventListener("click", () => {
    TickTodo(todo.key)
      if (li.style.textDecoration == "") {
      li.style.textDecoration = "line-through";
      } else {
        //set the textdecoration to null
      li.style.textDecoration = "";
    
      }

    
  });
  if(todo.checked){
    if (li.style.textDecoration == "") {
      li.style.textDecoration = "line-through";
      } else {
        //set the textdecoration to null
      li.style.textDecoration = "";
    
      }
  }
}
function TickTodo(key) {
  const index = todos.findIndex((item) => item.key === Number(key));
  
  todos[index].checked = !todos[index].checked
  localStorage.setItem("todosRef", JSON.stringify(todos));
}
function deleteTodo(key) {
  // find the corresponding todo object in the todoItems array
  const index = todos.findIndex((item) => item.key === Number(key));
  // Create a new object with properties of the current todo item
  // and a `deleted` property which is set to true
  const todo = {
    deleted: true,
    ...todos[index],
  };
  // remove the todo item from the array by filtering it out
  todos = todos.filter((item) => item.key !== Number(key));
  renderTodo(todo);
}
//create the click function for the clear button

// todos.push(todo_data);
// localStorage.setItem("Todos", JSON.stringify(todos));

add_btn.addEventListener("click", () => {
  if (input_txt.value.trim() !== "") {
    addTodo(input_txt.value);
    input_txt.value = "";
    input_txt.focus();
  }
});
window.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    if (input_txt.value.trim() !== "") {
      addTodo(input_txt.value);
      input_txt.value = "";
      input_txt.focus();
    }
  }
});
const lis = document.querySelector("#todo-view li");
//Dark mode feature
function Darkmode() {
  const body = document.body;
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}
window.onload = () => {
  let ref = localStorage.getItem("todosRef");
  if (ref) {
    todos = JSON.parse(ref);
    todos.forEach((todo) => {
      renderTodo(todo);
    });
  }
};
