const todoList = [{
  name: "make dinner",
  dueDate: "2022-12-22"
}, {
  name: "wash dishes",
  dueDate: "2022-12-23"
}];

const inputElement = document.querySelector(".js-name-input");
const dateInputElement = document.querySelector(".js-due-date-input");
const addTodoElement = document.querySelector(".js-add-todo");
const editTodoButton = document.querySelector(".js-edit-button");
const deleteTodoButton = document.querySelector(".js-delete-button");

inputElement.addEventListener("input", () => {
  if (inputElement.value) {
    inputElement.style.border = "1px black solid";
  } else {
    addTodoElement.style.backgroundColor = "#76767676";
    addTodoElement.style.cursor = "default";
  }
  if (inputElement.value && dateInputElement.value) {
    addTodoElement.style.backgroundColor = "black";
    addTodoElement.style.cursor = "pointer";
  } else {
    addTodoElement.style.backgroundColor = "#76767676";
    addTodoElement.style.cursor = "default";
  }
})

dateInputElement.addEventListener("input", () => {
  if (dateInputElement.value) {
    dateInputElement.style.border = "1px black solid";
  } else {
    addTodoElement.style.backgroundColor = "#76767676";
    addTodoElement.style.cursor = "default";
  }
  if (inputElement.value && dateInputElement.value) {
    addTodoElement.style.backgroundColor = "black";
    addTodoElement.style.cursor = "pointer";
  } else {
    addTodoElement.style.backgroundColor = "#76767676";
    addTodoElement.style.cursor = "default";
  }
})

addTodoElement.addEventListener("click", () => {
  enterAddTodoFn()
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    enterAddTodoFn()
  }
})

function addTodo() {
  const name = inputElement.value;
  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate
  });

  inputElement.value = "";
  dateInputElement.value = "";

  renderTodoList();
}

function enterAddTodoFn() {
  if (inputElement.value && dateInputElement.value) {
    addTodo();
    addTodoElement.style.backgroundColor = "#76767676";
    addTodoElement.style.cursor = "default";
    inputElement.style.border = "1px black solid";
    dateInputElement.style.border = "1px black solid";
  } else if (!inputElement.value && !dateInputElement.value) {
    inputElement.style.border = "1px red solid";
    dateInputElement.style.border = "1px red solid";
  } else if (!inputElement.value) {
    inputElement.style.border = "1px red solid";
  } else if (!dateInputElement.value) {
    dateInputElement.style.border = "1px red solid";
  }
}

function renderTodoList() {
  const todoListHTML = todoList.map((todoObject, index) => {
    const { name, dueDate } = todoObject;
    return `
      <div class="todo-wrap" data-id="${index}">
        <div class="left"><div>${name}</div></div> 
        <div class="right">
          <div class="date">${dueDate}</div>
          <span class="more js-more" data-id="${index}">...</span>
        </div>      
      </div>
    `;
  }).join('');

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;

  buttonFn();
}

let clickIdex = -1;
let isClick = false;

const buttonFn = function () {
  clickIdex = -1;
  isClick = false;
  
  const mores = document.querySelectorAll(".js-more");
  const displayButton = function (index) {
    const toggleButtonDisplay = function (display) {
      if (display) {
        isClick = true;
        editTodoButton.style.display = "block";
        deleteTodoButton.style.display = "block";
        editTodoButton.dataset.id = index;
        deleteTodoButton.dataset.id = index;
      } else {
        isClick = false;
        editTodoButton.style.display = "none";
        deleteTodoButton.style.display = "none";
      }
    }
    if (clickIdex === index) {
      if (!isClick) {
        toggleButtonDisplay(true);
      } else {
        toggleButtonDisplay(false);
      }
    } else {
      clickIdex = index;
      toggleButtonDisplay(true);
    }
  };
  mores.forEach((more, index) => {
    more.removeEventListener("click", () => {
      displayButton(index);
    });
    more.addEventListener("click", () => {
      displayButton(index);
    });
  });
};

buttonFn();

const editTodo = function () {
  const todoWraps = document.querySelectorAll(".todo-wrap");
  let index = editTodoButton.dataset.id;
  const todoWrap = todoWraps[index];
  const todoNameDiv = todoWrap.querySelector(".left > div");
  const existingInput = todoWrap.querySelector("input");

  if (existingInput) {
    editTodoButton.style.backgroundColor = "#76767676";
    todoList[index].name = existingInput.value;
    todoNameDiv.textContent = existingInput.value;
    todoNameDiv.style.display = "block";
    existingInput.parentNode.removeChild(existingInput);
  } else {
    editTodoButton.style.backgroundColor = "black";
    const newInputElement = document.createElement("input");
    newInputElement.value = todoNameDiv.textContent;
    todoNameDiv.style.display = "none";
    todoNameDiv.parentNode.insertBefore(newInputElement, todoNameDiv.nextSibling);
  }
};

const deleteTodo = function () {
  let id = deleteTodoButton.dataset.id;
  todoList.splice(id, 1);
  renderTodoList();
  isClick = false;
  editTodoButton.style.display = "none";
  deleteTodoButton.style.display = "none";
};

const hideButtonsIfClicked = function () {
  if (isClick) {
    isClick = false;
    editTodoButton.style.display = "none";
    deleteTodoButton.style.display = "none";
  }
};

editTodoButton.addEventListener("click", editTodo);
deleteTodoButton.addEventListener("click", deleteTodo);
inputElement.addEventListener("click", hideButtonsIfClicked);
dateInputElement.addEventListener("click", hideButtonsIfClicked);
