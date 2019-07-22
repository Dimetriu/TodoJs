import TodoItemModel from "./models/TodoItemModel";
import TodoItemView from "./views/TodoItemView";
import TodoItemController from "./controllers/TodoItemsController";

const model = new TodoItemModel();
const view = new TodoItemView();
const controller = new TodoItemController(model, view);
