import "./sortFactory.js";

class Project {
  constructor(title) {
    this.title = title;
    this.id = crypto.randomUUID();
    this.todos = [];
  }
  addTodo(title, dueDate, desc, priority) {
    const newTodo = new Todo(title, dueDate, desc, priority);
    this.todos.push(newTodo);
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
