const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-23'
}];

renderTodolist();

document.querySelector('.js-add-todo')
.addEventListener('click', () => {
  addTodo();
});


function renderTodolist() {
  let todoListHTML = '';
  todoList.forEach( (todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
      <div class="todo-wrap" data-id-"${index}">
        <div class="name">${name}</div> 
        <div>${dueDate}</div> 
        <div class="js-todo-button">
          <button class="js-delete-todo-button  delete-todo-button">delete</button>
          <button class="js-edit-todo-button  delete-edit-button">edit</button>
        </div>
      </div>
    `;
    todoListHTML += html;
  });
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
  
  document.querySelectorAll('.js-delete-todo-button')
  .forEach((deleteButton, index)=>{
    deleteButton.addEventListener('click',() => {
      todoList.splice(index, 1);
      renderTodolist();
    });
  });


  let wraps = document.querySelectorAll(".todo-wrap");
  wraps.forEach((wrap) => {

    wrap.addEventListener("mouseenter", ()=>{
      wrap.querySelector(".js-todo-button").style.display = "block"
    });

    wrap.addEventListener("mouseleave", ()=>{
      setTimeout(() => {
        wrap.querySelector(".js-todo-button").style.display = "none"}, 1000);
    });

  });
};




function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  console.log(name);

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    name,     
    dueDate  
  });
  console.log(todoList);

  inputElement.value = '';

  renderTodolist();

}

