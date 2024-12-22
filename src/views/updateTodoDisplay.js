import { todoPopupController } from "../controllers/todoPopupController";

export function updateTodoDisplay(app) {
  const todoContainerDiv = document.getElementById("todo-container");
  todoContainerDiv.innerHTML = "";
  const curProjId = app.getCurrentProjId();
  if (curProjId != -1) {
    const curProj = app.projects.find((p) => p.id === curProjId);
    for (let todo of curProj.todos) {
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo");

      const todoTitleDiv = document.createElement("div");
      const todoDescDiv = document.createElement("div");
      const todoPriorityDiv = document.createElement("div");
      const todoDueDateDiv = document.createElement("div");

      todoTitleDiv.textContent = todo.title;
      todoDescDiv.textContent = todo.desc;
      todoPriorityDiv.textContent = todo.priority;
      todoDueDateDiv.textContent = todo.dueDate;

      todoDiv.appendChild(todoTitleDiv);
      todoDiv.appendChild(todoDescDiv);
      todoDiv.appendChild(todoPriorityDiv);
      todoDiv.appendChild(todoDueDateDiv);

      todoContainerDiv.appendChild(todoDiv);
    }
    const addTodoBtn = document.createElement("button");
    addTodoBtn.id = "todo-popup-button";
    addTodoBtn.innerText = "add todo + ";

    todoContainerDiv.appendChild(addTodoBtn);
    todoPopupController();
  }
}
