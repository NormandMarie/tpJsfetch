import {ServiceTache} from "./service.mjs";
const taskList = document.getElementById("task-list");
const service = new ServiceTache();


const display1Task = (task,container) => {
  let card =
  `
  <div class="item">
  <h1> ${task.name}</h1>
  <p> ${task.description}</p>
  <p> tâche faite:${task.make}</p>
  <input type="button" value="delete" id="${task.id}">Delete </input>
</div>
  `
  ;
  taskList.innerHTML += card;
}

const taskDisplay = (taskList) => {
  taskList.forEach(task => display1Task(task));
}
service
.getTasks()
.then(tasks => taskDisplay(tasks));

let addTaskForm = document.getElementById("add-task-form");
addTaskForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let taskNameInput = document.getElementById("task-name");
  let taskdescriptionInput = document.getElementById("task-description");
  let taskdescription = taskdescriptionInput.value;
  let taskName = taskNameInput.value;
  console.log(taskName, taskdescription);
  service.addTask(taskName, taskdescription);
  console.log(tasks);
  taskNameInput.value = "";
  taskdescriptionInput.value = "";
  service
.getTasks()
.then(tasks => taskDisplay(tasks));

});

const recupérationbtn = (task) => {
  let btn = document.getElementById(`${task.id}`);
  btn.addEventListener(`click`, () =>{
    service.deleteTask(task.id);
    service
    .getTasks()
    .then(tasks => taskDisplay(tasks));
  }
  );
}

console.log(tasks);

