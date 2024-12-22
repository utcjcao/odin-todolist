import Todo from "../models/todo";

export function addTodoController(app) {
  const addTodoBtn = document.getElementById("add-todo-button");
  addTodoBtn.addEventListener("click", () => {
    let todoTitle = document.getElementById("todo-title").value;
    if (todoTitle == "") {
      todoTitle = "placeholder project title";
    }
    let todoPriority = document.getElementById("todo-priority").value;
    if (todoPriority == "") {
      todoPriority = 0;
    }
    let todoDescription = document.getElementById("todo-description").value;
    if (todoDescription == "") {
      todoDescription = "placeholder todo description";
    }
    let todoDueDate = document.getElementById("todo-due-date").value;
    if (todoDueDate == "") {
      todoDueDate = new Date();
    }
    const newTodo = new Todo(
      todoTitle,
      todoDueDate,
      todoDescription,
      todoPriority
    );
    app.addProject(newTodo);
  });
}
