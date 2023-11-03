const additem = document.getElementById("add-btn");
const todoinput = document.getElementById("todo-input");
const list = document.getElementById('list');

additem.addEventListener("click", function () {
 const taskname = todoinput.value;
 if (taskname.trim()!=="") {
   const task = document.createElement("div");
   task.classList.add("task-div")
   const singaltask = document.createElement("p");
   singaltask.classList.add("title");
   singaltask.innerHTML = taskname;
   list.appendChild(task)
   task.appendChild(singaltask);
   todoinput.value=""
 }
});
