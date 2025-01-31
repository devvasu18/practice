const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task === '') {
        alert('Please enter a task!');
        return;
    }

    createTaskElemnt(task);
    taskInput.value = '';
});

function createTaskElemnt(task) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${task}</span>
        <button class="delete-btn">delete</button>
    `;
    taskList.appendChild(li);

    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
        saveTasks();
    });
    saveTasks();
}

function saveTasks() {
    const tasks = Array.from(document.querySelectorAll('#task-list li span')).map(span => span.textContent);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

window.addEventListener('load', () => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => createTaskElemnt(task));
});