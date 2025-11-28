// Estado de la aplicación: array de tareas
let tareas = [];
let siguienteId = 1; // ID auto-generado incremental

// Referencias a elementos del DOM
const inputTitulo = document.getElementById("titulo-tarea");
const inputDescripcion = document.getElementById("descripcion-tarea");
const selectEstado = document.getElementById("estado-tarea");
const botonAgregar = document.getElementById("boton-agregar");
const contenedorTareas = document.getElementById("contenedor-tareas");
const filtroEstado = document.getElementById("filtro-estado");

// Función para agregar tarea
function agregarTarea() {
    const titulo = inputTitulo.value.trim();
    const descripcion = inputDescripcion.value.trim();
    const estado = selectEstado.value;

    if (!titulo || !descripcion) {
        alert("Por favor completa todos los campos.");
        return;
    }

    const nuevaTarea = {
        id: siguienteId++,
        titulo,
        descripcion,
        estado
    };

    tareas.push(nuevaTarea);
    renderizarTareas();
    inputTitulo.value = "";
    inputDescripcion.value = "";
    selectEstado.value = "Pendiente";
}


// Función para actualizar el estado de una tarea
function cambiarEstado(id, nuevoEstado) {
    const tarea = tareas.find(t => t.id === id);
    if (!tarea) return;
    tarea.estado = nuevoEstado;
    renderizarTareas(); // ¡Esto asegura que se actualice la vista y el filtro!
}


// Función para eliminar tarea
function eliminarTarea(id) {
    tareas = tareas.filter(t => t.id !== id);
    renderizarTareas();
}

// Función para renderizar tareas
function renderizarTareas() {
    const filtro = filtroEstado.value;
    contenedorTareas.innerHTML = "";

    const tareasFiltradas = filtro === "Todas" ? tareas : tareas.filter(t => t.estado === filtro);

    if (tareasFiltradas.length === 0) {
        contenedorTareas.innerHTML = "<p style='padding: 15px;'>No hay tareas para mostrar.</p>";
        return;
    }

    tareasFiltradas.forEach(tarea => {
        const div = document.createElement("div");
        div.className = "tarea-item"; // Contenedor que tiene el borde inferior
        
        // ¡Plantilla HTML simplificada para el estilo de tabla!
        div.innerHTML = `
            <div class="tarea-fila">
                <div class="tarea-celda tarea-celda--id">${tarea.id}</div>
                <div class="tarea-celda tarea-celda--titulo">${tarea.titulo}</div>
                <div class="tarea-celda tarea-celda--descripcion">${tarea.descripcion}</div>
                
                <div class="tarea-celda tarea-celda--estado">
                    <select 
                        class="tarea-item__select estado-${tarea.estado.replace(/\s/g, '\\ ')}" 
                        onchange="cambiarEstado(${tarea.id}, this.value)"
                    >
                        <option value="Pendiente" ${tarea.estado === 'Pendiente' ? 'selected' : ''}>Pendiente</option>
                        <option value="En progreso" ${tarea.estado === 'En progreso' ? 'selected' : ''}>En progreso</option>
                        <option value="Completada" ${tarea.estado === 'Completada' ? 'selected' : ''}>Completada</option>
                    </select>
                </div>
                
                <div class="tarea-celda tarea-celda--acciones">
                    <button class="tarea-item__boton tarea-item__boton--eliminar" onclick="eliminarTarea(${tarea.id})">
                        Eliminar
                    </button>
                </div>
            </div>
        `;
        contenedorTareas.appendChild(div);
    });
}
// Event listeners
botonAgregar.addEventListener("click", agregarTarea);
filtroEstado.addEventListener("change", renderizarTareas);
