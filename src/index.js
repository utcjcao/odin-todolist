import "./template.css";
import Main from "./models/Main";
import { updateProjDisplay } from "./views/updateProjDisplay";
import { updateTodoDisplay } from "./views/updateTodoDisplay";
import { addProjectController } from "./controllers/addProjectController";
import { addTodoController } from "./controllers/addTodoController";

const app = new Main();

updateProjDisplay(app);
updateTodoDisplay(app);

addProjectController(app);
addTodoController(app);
