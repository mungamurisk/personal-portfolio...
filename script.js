const taskList = document.getElementById("taskList");

function addTask() {
    const taskInput = document.getElementById("taskInput");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span onclick="toggleTask(this)">
            ${taskInput.value}
        </span>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);

    taskInput.value = "";
}

function deleteTask(button) {
    button.parentElement.remove();
}

function toggleTask(task) {
    task.classList.toggle("completed");
}