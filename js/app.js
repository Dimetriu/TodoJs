function addTodoItem(e) {
  e.preventDefault();

  if (addInput.value === "") return alert(
    "Необходимо ввести название задачи."
  );

  const listItem = createTodoItem(addInput.value);
}

function createTodoItem(title) {
  const checkbox = document.createElement("input");

  checkbox.type = "checkbox";
  checkbox.className = "checkbox";

  const label = document.createElement("label");
  label.innerText = title;
  label.className = "title";

  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.className = "textfield";

   const editButton = document.createElement("button");
   editButton.innerText = "Изменить";
   editButton.className = "edit";

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Удалить";
  deleteButton.className = "delete";

  const listItem = document.createElement("li");
  listItem.className = "todo-item";

  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);

  return listItem;
}

const todoForm = document.getElementById("tot-form");
const addInput = document.getElementById("add-input");
const todoList = document.getElementById("toto-list");
const todoItems = document.querySelectorAll(".todo-item");

todoForm.addEventListener("submit", addTodoItem);
