class TodoItemsController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    view.on("add", model.addTodd.bind(this));
  }

  addTodo(title) {
    const todo = this.model.addItem({
      id: Date.now(),
      title,
      completed: false,
    });

    this.view.addItem(todo);
  }
}

export default TodoItemsController;
