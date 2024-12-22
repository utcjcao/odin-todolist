import Todo from "../models/todo";
import { updateTodoDisplay } from "../views/updateTodoDisplay";

export function addTodoController(app) {
  const addTodoBtn = document.getElementById("add-todo-button");
  addTodoBtn.addEventListener("click", () => {
    let todoTitle = document.getElementById("todo-title").value;
    if (todoTitle == "") {
      todoTitle = "placeholder todo title";
    }
    document.getElementById("todo-title").value = "";
    let todoPriority = document.getElementById("todo-priority").value;
    if (todoPriority == "") {
      todoPriority = 0;
    }
    document.getElementById("todo-priority").value = "";
    let todoDescription = document.getElementById("todo-desc").value;
    if (todoDescription == "") {
      todoDescription = "placeholder todo description";
    }
    document.getElementById("todo-desc").value = "";
    let todoDueDate = document.getElementById("todo-due-date").value;
    if (todoDueDate == "") {
      todoDueDate = new Date();
    }
    document.getElementById("todo-due-date").value = "";
    const newTodo = new Todo(
      todoTitle,
      todoDueDate,
      todoDescription,
      todoPriority
    );
    app.addTodo(newTodo);
    // turn the popup off
    const todoPopDiv = document.getElementById("add-todo-container");
    todoPopDiv.style.display = "none";

    updateTodoDisplay(app);
  });
}
