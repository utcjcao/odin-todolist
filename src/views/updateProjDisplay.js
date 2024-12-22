import { projectPopupController } from "../controllers/projectPopupController";
import Main from "../models/Main";
import { updateTodoDisplay } from "./updateTodoDisplay";

export function updateProjDisplay(app) {
  const projectContainerDiv = document.getElementById("project-container");
  projectContainerDiv.innerHTML = "";

  for (let project of app.projects) {
    const projectBtn = document.createElement("button");
    projectBtn.innerText = project.title;
    console.log(project);
    console.log(project.title);
    projectBtn.addEventListener("click", () => {
      app.setCurrentProjId(project.id);
      updateTodoDisplay(app);
      //   update todo display after this b/c it updates the todos too
    });
    projectContainerDiv.appendChild(projectBtn);
  }

  const addProjectBtn = document.createElement("button");
  addProjectBtn.id = "proj-popup-button";
  addProjectBtn.innerText = "add project + ";

  projectContainerDiv.appendChild(addProjectBtn);

  projectPopupController();
}
