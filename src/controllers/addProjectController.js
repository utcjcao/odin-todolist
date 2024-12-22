import Project from "../models/project";
import { updateProjDisplay } from "../views/updateProjDisplay";
import { updateTodoDisplay } from "../views/updateTodoDisplay";

export function addProjectController(app) {
  const addProjectBtn = document.getElementById("add-proj-button");
  addProjectBtn.addEventListener("click", () => {
    let projectTitle = document.getElementById("proj-title").value;
    document.getElementById("proj-title").value = "";
    if (projectTitle == "") {
      projectTitle = "placeholder project title";
    }
    app.addProject(projectTitle);

    const projectPopDiv = document.getElementById("add-proj-container");
    projectPopDiv.style.display = "none";

    updateProjDisplay(app);
    updateTodoDisplay(app);
  });
}
