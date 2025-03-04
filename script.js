function addTask() {
  const taskList = document.getElementById('taskList');
  const inputField = document.getElementById('taskInput');

  const taskInput = inputField.value;

  if (taskInput === '') {
    alert('Please Enter the task');
    return;
  }
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.onchange = function () {
    li.classList.toggle('completed', this.checked);
  };

  const span = document.createElement('span');
  span.innerText = taskInput;

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'X';
  deleteBtn.style.backgroundColor = 'red';
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  inputField.value = '';
}

function clearAllTasks() {
  document.getElementById('taskList').innerHTML = '';
}
