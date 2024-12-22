export function handlePopupsController() {
  const projectPopUpBtn = document.getElementById("project-popup");
  const todoPopupBtn = document.getElementById("todo-popup");
  const exitProjectBtn = document.getElementById("proj-exit");
  const exitTodoBtn = document.getElementById("todo-exit");

  // Handle project popup toggle
  projectPopUpBtn.addEventListener("click", () => {
    const todoPopDiv = document.getElementById("add-todo-popup");
    const todoPopStyle = window.getComputedStyle(todoPopDiv);

    if (todoPopStyle.display == "none") {
      const projectPopDiv = document.getElementById("add-proj-popup");
      projectPopDiv.style.display = "flex";
      // app.addProject("placeholder"); // Uncomment this when the method is needed
    }
  });

  // Handle todo popup toggle
  todoPopupBtn.addEventListener("click", () => {
    const projectPopDiv = document.getElementById("add-proj-popup");
    const projectPopStyle = window.getComputedStyle(projectPopDiv);

    if (projectPopStyle.display == "none") {
      const todoPopDiv = document.getElementById("add-todo-popup");
      todoPopDiv.style.display = "flex";
    }
  });

  // Handle project popup close
  exitProjectBtn.addEventListener("click", () => {
    const popDiv = document.getElementById("add-proj-popup");
    popDiv.style.display = "none";
  });

  // Handle todo popup close
  exitTodoBtn.addEventListener("click", () => {
    const popDiv = document.getElementById("add-todo-popup");
    popDiv.style.display = "none";
  });
}
