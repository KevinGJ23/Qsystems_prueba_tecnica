// Referencias a elementos
const taskInput = document.getElementById("taskText");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Estado: array de tareas
let tasks = [];

// Renderizado dinámico de tareas
function renderTasks() {
    taskList.innerHTML = ""; // limpiar lista

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "task" + (task.completed ? " completed" : "");
        li.dataset.index = index;

        li.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button class="complete-btn">✔</button>
                <button class="delete-btn">✖</button>
            </div>
        `;

        taskList.appendChild(li);
    });
}

// Agregar tareas
addTaskBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();

    if (text === "") return;

    tasks.push({
        text,
        completed: false
    });

    taskInput.value = "";
    renderTasks();
});

// Delegación de eventos (maneja completar/eliminar)
taskList.addEventListener("click", (event) => {
    const parentLi = event.target.closest("li");

    if (!parentLi) return;

    const index = parentLi.dataset.index;

    // Marcar como completada
    if (event.target.classList.contains("complete-btn")) {
        tasks[index].completed = !tasks[index].completed;
        renderTasks();
    }

    // Eliminar tarea
    if (event.target.classList.contains("delete-btn")) {
        tasks.splice(index, 1);
        renderTasks();
    }
});
