class Main {
  constructor() {
    this.projects = [];
  }
  addProject(title) {
    const newProject = new Project(title);
    this.projects.push(newProject);
  }
  deleteProject(targetProject) {
    this.projects = this.projects.filter(
      (project) => targetProject.id != project.id
    );
  }
}

export default Main;
