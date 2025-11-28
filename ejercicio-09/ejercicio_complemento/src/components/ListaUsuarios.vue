<script setup>
import { ref, computed, defineProps } from 'vue';

// --- SECCIÓN DE LÓGICA (SCRIPT) ---

// 1. Props: Esto es para recibir la lista de personas que nos manda el componente de arriba (el padre).
const props = defineProps({
    usuarios: {
        type: Array,
        required: true,
        default: () => []
    }
});

// 2. Estado (Reactividad): Aquí guardamos lo que la persona escribe en el cuadro de filtro.
// El 'ref' le dice a Vue: "si esto cambia, actualiza la vista".
const filtroNombre = ref('');

// 3. Estado Derivado (Computed): Esta es la magia. Esta lista se calcula automáticamente.
// Cada vez que escribes algo en el filtro (filtroNombre cambia), esta función se ejecuta sola.
const usuariosFiltrados = computed(() => {
    // Tomamos el texto del filtro, lo ponemos en minúsculas y quitamos espacios al inicio/fin.
    const filtro = filtroNombre.value.toLowerCase().trim();

    // Si no hay nada escrito en el filtro, devolvemos la lista completa que nos pasaron.
    if (!filtro) {
        return props.usuarios;
    }

    // Si sí hay filtro, filtramos la lista original.
    return props.usuarios.filter(usuario =>
        // Solo incluimos a la persona si su nombre tiene el texto que escribimos.
        usuario.nombre.toLowerCase().includes(filtro)
    );
});
</script>

<template>
    <div class="user-list-container">
        <h2>Filtro de Personas</h2>

        <input
            type="text"
            v-model="filtroNombre"
            placeholder="Filtrar usuarios por nombre..."
            class="filter-input"
        />

        <ul class="user-list">
            <li v-if="usuariosFiltrados.length === 0" class="no-results">
                No se encontraron personas con ese nombre: "{{ filtroNombre }}".
            </li>

            <li v-for="usuario in usuariosFiltrados" :key="usuario.id" class="user-item">
                <span class="user-name">{{ usuario.nombre }}</span>
                <span class="user-email">{{ usuario.email }}</span>
            </li>
        </ul>
    </div>
</template>

<style scoped>
  /* --- SECCIÓN DE ESTILOS (CSS) --- */

  .user-list-container {
      /* El ancho máximo de la tarjeta y centrado automático */
      max-width: 500px;
      margin: 40px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      background: #f9f9f9;
      /* Importante para que el padding no desborde la tarjeta */
      box-sizing: border-box; 
  }

  .filter-input {
      width: 95%;
      padding: 10px;
      margin-bottom: 20px;
      border: 1px solid #aaa;
      border-radius: 4px;
      font-size: 16px;
      /* De nuevo, importante para que el 95% + padding no rompa la vista */
      box-sizing: border-box; 
  }

  .user-list {
      /* Limitamos la altura para que solo muestre 300px y luego aparezca el scroll */
      max-height: 300px; 
      /* Si el contenido es más alto que 300px, activa el scroll vertical */
      overflow-y: auto; 
      /* Pequeño espacio a la derecha para que el scroll se vea mejor */
      padding-right: 5px; 
  }
  .user-item {
      /* Usamos flex para que el nombre y el correo se alineen en la misma fila (izquierda y derecha) */
      display: flex;
      justify-content: space-between;
      padding: 10px 15px;
      margin-bottom: 8px;
      background-color: #fff;
      /* La barrita verde a la izquierda, como decoración de Vue */
      border-left: 5px solid #42b883; 
      border-radius: 4px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }

  .user-name {
      font-weight: bold;
  }

  .user-email {
      color: #555;
      font-size: 0.9em;
  }

  .no-results {
      /* Estilo para el mensaje de "no encontrado" */
      text-align: center;
      color: #e74c3c;
      padding: 15px;
      border: 1px dashed #e74c3c;
      border-radius: 4px;
  }
</style>
