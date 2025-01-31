// Add Task Function
function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
  
    if (taskInput.value !== "") {
      // Create a new list item
      const li = document.createElement("li");
      li.textContent = taskInput.value;
  
      // Add a delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = function () {
        taskList.removeChild(li);
        saveTasks();
      };
  
      li.appendChild(deleteButton);
      taskList.appendChild(li);
      taskInput.value = "";
  
      // Save tasks to local storage
      saveTasks();
    }
  }
  
  // Save Tasks to Local Storage
  function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#task-list li").forEach(task => {
      tasks.push(task.textContent.replace("Delete", "").trim());
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  // Load Tasks from Local Storage
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList = document.getElementById("task-list");
  
    tasks.forEach(task => {
      const li = document.createElement("li");
      li.textContent = task;
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = function () {
        taskList.removeChild(li);
        saveTasks();
      };
  
      li.appendChild(deleteButton);
      taskList.appendChild(li);
    });
  }
  
  // Load tasks when the page loads
  window.onload = loadTasks;