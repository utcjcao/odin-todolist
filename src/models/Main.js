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
  //   assuming that the curProj is not empty (-1)
  addTodo(todo) {
    console.log(todo, "this is ur todo");
    let curProj = this.projects.find(
      (project) => this.currentProjectId == project.id
    );

    if (curProj) {
      console.log(curProj);
      curProj.addTodo(todo); // Call the method if curProj is valid
    } else {
      console.log("No project found with currentProjectId");
    }
  }
}

export default Main;
