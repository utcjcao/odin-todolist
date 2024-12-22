import Project from "../models/project";
import { updateProjDisplay } from "../views/updateProjDisplay";

export function addProjectController(app) {
  const projectPopUpBtn = document.getElementById("add-project-button");
  projectPopUpBtn.addEventListener("click", () => {
    console.log("daf");
    let projectTitle = document.getElementById("proj-title").value;
    if (projectTitle == "") {
      projectTitle = "placeholder project title";
    }
    const newProj = new Project(projectTitle);
    app.addProject(newProj);
    updateProjDisplay(app);

    const projectPopDiv = document.getElementById("add-proj-popup");
    projectPopDiv.style.display = "none";
  });
}
