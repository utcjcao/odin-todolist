import Main from "../models/Main";

export function updateProjDisplay(app) {
  const projectContainerDiv = document.getElementById("project-container");
  projectContainerDiv.innerHTML = "";

  for (let project of app.projects) {
    const projectBtn = document.createElement("button");
    projectBtn.innerText = project.title;
    projectBtn.addEventListener("click", () => {
      app.setCurrentProjId(project.id);
      //   update todo display after this b/c it updates the todos too
    });
    projectContainerDiv.appendChild(projectBtn);
  }

  const addProjectBtn = document.createElement("button");
  addProjectBtn.id = "project-popup";
  addProjectBtn.innerText = "add project + ";

  projectContainerDiv.appendChild(addProjectBtn);
}
