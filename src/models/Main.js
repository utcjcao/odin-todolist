import Project from "./project";

class Main {
  constructor() {
    this.projects = [];
    this.currentProjectId = -1;
  }
  addProject(title) {
    const newProject = new Project(title);
    this.projects.push(newProject);
    this.currentProjectId = newProject.id;
  }
  deleteProject(targetProject) {
    this.projects = this.projects.filter(
      (project) => targetProject.id != project.id
    );
    this.currentProjectId = -1;
  }
  setCurrentProjId(id) {
    this.currentProjectId = id;
  }
  getCurrentProjId() {
    return this.currentProjectId;
  }
}

export default Main;
