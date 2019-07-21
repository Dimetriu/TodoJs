const main = (document => {
  function createElement(tag, props, ...children) {
    const element = document.createElement(tag);

    Object.keys(props).forEach(key => element[key] = props[key]);

    if (children.length > 0) {
      children.forEach(child => {
        if (typeof child === 'string') {
          child = document.createTextNode(child);
        }

        element.appendChild(child);
      });
    }

    return element;
  }

  function createTodoItem(title) {
    const checkbox = createElement("input", { type: "checkbox", className: "checkbox" });
    const label = createElement("label", { className: "title" }, title);
    const editInput = createElement("input", { type: "text", className: "textfield" });
    const editButton = createElement("button", { className: "edit" }, "Edit");
    const deleteButton = createElement("button", { className: "delete" }, "Delete");

    const listItem = createElement(
      "li",
      { className: "todo-item" },
      checkbox,
      label,
      editInput,
      editButton,
      deleteButton
    );

    bindEvents(listItem);

    return listItem;
  }

  function bindEvents(listItem) {
    const checkbox = listItem.querySelector(".checkbox");
    const editButton = listItem.querySelector("button.edit");
    const deleteButton = listItem.querySelector("button.delete");

    checkbox.addEventListener("change", toggleTodoItem);
    editButton.addEventListener("click", editTodoItem);
    deleteButton.addEventListener("click", deleteTodoItem);
  }

  function addTodoItem(e) {
    e.preventDefault();

    if (addInput.value === "") return alert(
      "Enter a task name please."
    );

    const todoItem = createTodoItem(addInput.value);
    todoList.appendChild(todoItem);
    addInput.value = "";

  }

  function toggleTodoItem() {
    const listItem = this.parentNode;
    listItem.classList.toggle("completed");
  }

  function editTodoItem() {
    const listItem = this.parentNode;
    const title = listItem.querySelector(".title");
    const editInput = listItem.querySelector(".textfield");
    const isEditing = listItem.classList.contains("editing");

    if (isEditing) {
      title.innerText = editInput.value;
      this.innerText = "Edit";
    } else {
      editInput.value = title.innerText;
      this.innerText = "Save"
    }

    listItem.classList.toggle("editing");
  }

  function deleteTodoItem() {
    const listItem = this.parentNode;

    todoList.removeChild(listItem);
  }

  function load() {
    const data = JSON.parse(localStorage.getItem("todos"));
    return data;
  }

  function save(payload) {
    const data = JSON.stringify(payload);
    localStorage.setItem("todos", data);
  }

  const todoForm = document.getElementById("todo-form");
  const addInput = document.getElementById("add-input");
  const todoList = document.getElementById("todo-list");
  const todoItems = document.querySelectorAll(".todo-item");

  function main() {
    todoForm.addEventListener("submit", addTodoItem);
    todoItems.forEach(item => bindEvents(item));
  }

  return main;

})(document);

main();