// ===== Step 1: Creat array manage task =====
let tasks = []

// ===== Step 2: Take data from localStorage when the page loads =====
const savedTasks = localStorage.getItem("tasks")
if (savedTasks) {
  tasks = JSON.parse(savedTasks)
}

// ===== Step 3: Render tasks into  screen =====
const taskList = document.getElementById("taskList")

function renderTasks() {
  taskList.innerHTML = ""  // Delete all data before recreating

  tasks.forEach((task, index) => {
    const li = document.createElement("li")
    li.innerText = task

    // Create button delete
    const delBtn = document.createElement("button")
    delBtn.innerText = "Delete"
    delBtn.onclick = () => {
      tasks.splice(index, 1)  // Delete from array
      localStorage.setItem("tasks", JSON.stringify(tasks))  // Save localStorage
      renderTasks()  // Redraw the UI
    }

    li.appendChild(delBtn)
    taskList.appendChild(li)
  })
}

// ===== Step 4: Add new task =====
const input = document.getElementById("taskInput")
const addBtn = document.getElementById("addBtn")

addBtn.onclick = () => {
  const value = input.value.trim()
  if (value === "") return  // Do not allow adding empty tasks

  tasks.push(value)  // Add to array
  localStorage.setItem("tasks", JSON.stringify(tasks))  // Lưu vào localStorage
  renderTasks()  // Redraw the UI
  input.value = ""  // Delete input
}

// ===== Step 5: The first render call is made when the page loads =====
renderTasks()
