const addBtn = document.getElementById('add-btn')
const taskInput = document.getElementById('task-input')
const taskList = document.getElementById('task-list')

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim()
  if(taskText === "") return

  const li = document.createElement('li')
  li.textContent = taskText

  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = "Delete"
  deleteBtn.addEventListener('click', () => {
    li.remove()
  })

  li.appendChild(deleteBtn)
  taskList.appendChild(li)
  taskInput.value = ""
})
