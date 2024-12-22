import "./sortFactory.js";

class Project {
  constructor(title) {
    this.title = title;
    this.id = crypto.randomUUID();
    this.todos = [];
  }
  addTodo(todo) {
    this.todos.push(todo);
  }
  deleteTodo(targetTodo) {
    this.todos = this.todos.filter((todo) => targetTodo.id != todo.id);
  }
  sortTodos(sortName) {
    const sortFn = sortFactory(sortName);
    this.todos.sort(sortFn);
  }
}

export default Project;
