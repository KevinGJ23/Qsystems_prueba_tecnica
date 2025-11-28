// Referencias a elementos
// CORRECCIÓN: Se usa document.getElementById (singular)
const entrada = document.getElementById("ingresoTarea--entrada");
const agregar = document.getElementById("ingresoTarea--agregar");
const listaTareas = document.getElementById("contenedor--listatareas");

// Estado: array de tareas
let tasks = [];

// --- FUNCIÓN DE ALMACENAMIENTO (Opcional, pero recomendado) ---
// Para guardar las tareas en el almacenamiento local del navegador
function guardarTareas() {
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
}

// Para cargar las tareas al inicio
function traertareas() {
    const storedTasks = localStorage.getItem('todoTasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
}

// Renderizado dinámico de tareas
function renderizado() {
    listaTareas.innerHTML = ""; // limpiar lista

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        // Asignamos una clase 'task' y la clase 'completed' si aplica
        li.className = "task" + (task.completed ? " completed" : "");
        // El índice se usa para saber qué tarea completar o eliminar
        li.dataset.index = index;

        // Estructura interna de la tarea
        li.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button class="complete-btn" aria-label="Marcar como completada">✔</button>
                <button class="delete-btn" aria-label="Eliminar tarea">✖</button>
            </div>
        `;

        listaTareas.appendChild(li);
    });
    
    guardarTareas(); // Guardar el estado después de cada renderizado
}

// --- MANEJO DE EVENTOS ---

// 1. Agregar tareas
agregar.addEventListener("click", () => {
    // ERROR CORREGIDO: Usar 'entrada' para obtener el valor del input. 
    // Los elementos <ul> (listaTareas) no tienen propiedad .value.
    const text = entrada.value.trim(); 

    if (text === "") return;

    tasks.push({
        text,
        completed: false
    });

    // ERROR CORREGIDO: Usar 'entrada' para limpiar el valor del input.
    entrada.value = ""; 
    renderizado();
});

// Permite agregar la tarea presionando Enter en el campo de texto
entrada.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        agregar.click(); // Simular el clic en el botón
    }
});


// 2. Delegación de eventos (maneja completar/eliminar)
listaTareas.addEventListener("click", (event) => {
    // Busca el elemento padre 'li' más cercano al elemento clicado
    const parentLi = event.target.closest(".task");

    if (!parentLi) return; // Si no se hizo clic en una tarea, salir

    // Obtenemos el índice guardado en el 'data-index'
    // Convertir el valor del dataset a número con el operador +
    const index = +parentLi.dataset.index; 

    // Marcar como completada
    if (event.target.classList.contains("complete-btn")) {
        // Toggle (cambiar) el estado de 'completed'
        tasks[index].completed = !tasks[index].completed; 
        renderizado();
    }

    // Eliminar tarea
    if (event.target.classList.contains("delete-btn")) {
        // Eliminar 1 elemento a partir de la posición 'index'
        tasks.splice(index, 1); 
        renderizado();
    }
});

// --- INICIALIZACIÓN ---
// Cargar las tareas al iniciar y luego renderizarlas
traertareas();
renderizado();