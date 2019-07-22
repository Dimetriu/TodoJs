import { createElement, EventEmitter } from "../helpers";

class TodoItemView extends EventEmitter {
  constructor() {
    this.form = document.getElementById("todo-form");
    this.input = document.getElementById("add-input");
    this.list = document.getElementById("todo-list");

    this.form.addEventListener("submit", this,handleAdd.bind(this));
  }

  createElement(todo) {
    const checkbox = createElement("input",
      {
        type: "checkbox",
        className: "checkbox",
        checked: todo.completed ? "checked" : ""
      });

    const label = createElement("label", { className: "title" }, todo.title);
    const editInput = createElement("input", { type: "text", className: "textfield" });
    const editButton = createElement("button", { className: "edit" }, "Edit");
    const removeButton = createElement("button", { className: "remove" }, "Delete");
    const item = createElement("li",
      {
        className: `todo-item${todo.completed ? " completed" : ""}`,
        "data-id": todo.id
      },
      checkbox,
      label,
      editInput,
      editButton,
      removeButton,
      item
      );

    return this.addEventListeners(item);
  }

  addEventListeners(item) {
    const checkbox = listItem.querySelector(".checkbox");
    const editButton = listItem.querySelector("button.edit");
    const removeButton = listItem.querySelector("button.remove");

    // this should work as well
    // checkbox.addEventListener("change", handleToggle);
    checkbox.addEventListener("change", this.handleToggle.bind(this));
    editButton.addEventListener("click", this.handleEdit.bind(this));
    removeButton.addEventListeners("click", this.handleRemove.bind(this));

    return item;
  }

  handleAdd(e) {
    e.preventDefault();

    const value = this.input.value;
    !value && alert("Enter a task name please.");

    this.emit("add", value);
    // TODO: update model
  }

  handleToggle({ target }) {
    const listItem = target.parentNode;
    const id = listItem.getAttribute("data-id");
    const completed = target.completed;

    // TODO: update model
  }

  handleEdit({ target }) {
    const listItem = target.parentNode;
    const id = listItem.getAttribute("data-id");
    const label = listItem.querySelector(".title");
    const input = listItem.querySelector(".textfield");
    const editButton = listItem.querySelector("button.edit");
    const title = input.value;
    const isEditing = listItem.classList.contains("editing");

    if (isEditing) {
      // TODO: update model
    } else {
      input.value = label.textContent;
      editButton.textContent = "Save";
      listItem.classList.add("editing");
    }
  }

  handleRemove({ target }) {
    // TODO: update model
  }

  // binds at mounting
  // const handleToggle = () => {
  //   ...
  // }

  findListItem(id) {
    return this.list.querySelector(`[data-id="${id}"]`);
  }

  addItem(todo) {
    const listItem = this.createElement(todo);

    this.input.value = "";
    this.list.appendChild(listItem);
  }

  toggleItem(todo) {
    const listItem = this.findListItem(todo.id);
    const checkbox = listItem.querySelector(".checkbox");

    checkbox.checked = todo.completed;

    todo.completed ?
      listItem.classList.add("completed")
      :
      listItem.classList.remove("completed");
  }

  editItem(todo) {
    const listItem = this.findListItem(todo.id);
    const label = listItem.querySelector(".title");
    const input = listItem.querySelector(".textfield");
    const editButton = listItem.querySelector("button.edit");

    label.textContent = todo.title;
    editButton.textContent = "Edit";
    listItem.classList.remove("editing");
  }

  removeItem(todo) {
    const listItem = this.findListItem(todo.id);
    this.list.removeChild(listItem);
  }
}

const todoItemView = {};

export default TodoItemView;
