import TodoItemModel from "./models/TodoItemModel";
import TodoItemView from "./views/TodoItemView";
import TodoItemController from "./controllers/TodoItemsController";
import { save, load } from "./helpers";

const state = load();

const model = new TodoItemModel(state || undefined);
model.on("change", state => save(state));

const view = new TodoItemView();
const controller = new TodoItemController(model, view);
