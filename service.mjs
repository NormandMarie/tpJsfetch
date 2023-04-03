  import {Task} from "./task.mjs";



  let tasks = [
    new Task( "vaisselle", "faire la vaisselle", false,1),
    new Task( "course", "faire course", false,2),
    new Task("jouer", "jouer elden ring", false,3)
  ]


  class ServiceTache {

    addTask(name, description) {
      tasks.push({ name: name }, {description: description});
    }

      getTasks = () => {
        const promes = new Promise((resolve, reject) => {
          resolve(tasks);
    });
    return promes;
  }


    // updateTask(oldName, newName,oldDescription,newDescription, oldMake, newMake) {
    //   tasks.forEach(task => {
    //     if (task.name === oldName) {
    //       task.name = newName;
    //     }
    //     if (task.Description === oldDescription) {
    //       task.Description = newDescription;
    //     }
    //     if (task.Make === oldMake) {
    //       task.Make = newMake;
    //     }
    //   });
    // }
    deleteTask(id) {
      tasks = tasks.filter(task => task.id !== id);
      console.log(tasks);
      return tasks;
    }
  }
  export {ServiceTache};
  // tasks.forEach(task => console.log(task.name, task.description , task.make));
