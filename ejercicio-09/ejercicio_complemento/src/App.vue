<script setup>
import { ref } from 'vue';
// Importamos la lista de usuarios. Es como si trajéramos la cajita donde está el componente 'ListaUsuarios'.
import ListaUsuarios from './components/ListaUsuarios.vue'; 

// Usamos 'ref' para que Vue sepa que esta variable puede cambiar y debe reaccionar.
// Esto es nuestra lista inicial de gente. Le puse varios para que se vea el scroll que arreglamos.
const dataUsuarios = ref([
    // ¡Ojo! Hay IDs repetidos, esto podría dar problemas, pero por ahora solo es la data.
    { id: 1, nombre: 'Ana Gómez', email: 'ana.gomez@example.com' },
    { id: 2, nombre: 'Beto Pérez', email: 'beto.perez@example.com' },
    { id: 3, nombre: 'Carlos Ruiz', email: 'carlos.ruiz@example.com' },
    { id: 4, nombre: 'Diana Flores', email: 'diana.flores@example.com' },
    { id: 5, nombre: 'Emilio Castro', email: 'emilio.castro@example.com' },
    // Usuarios repetidos para hacer la lista larga y probar el scroll
    { id: 1, nombre: 'Ana Gómez', email: 'ana.gomez@example.com' },
    { id: 2, nombre: 'Beto Pérez', email: 'beto.perez@example.com' },
    { id: 3, nombre: 'Carlos Ruiz', email: 'carlos.ruiz@example.com' },
    { id: 4, nombre: 'Diana Flores', email: 'diana.flores@example.com' },
    { id: 5, nombre: 'Emilio Castro', email: 'emilio.castro@example.com' },
]);
</script>

<template>
    <div id="app">
        <h1>Aplicación Principal</h1>
        
        <ListaUsuarios :usuarios="dataUsuarios" />
    </div>
</template>

<style>
/* Estilos globales (afectan a toda la página) */
#app {
    /* Tipo de letra: Avenir, si no, Helvetica, y si no, cualquiera sin serifa */
    font-family: Avenir, Helvetica, Arial, sans-serif;
    /* Centramos el texto. */
    text-align: center;
    /* Color de texto principal, un gris oscuro */
    color: #2c3e50;
    /* Quitamos el margen superior que venía por defecto, para empezar arriba del todo. */
    margin-top: 0;
}
</style>