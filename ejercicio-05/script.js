// El set de datos que vamos a usar.
const productos = [
 { nombre: "Café", precio: 1500, categoria: "bebida" },
 { nombre: "Arepa", precio: 2000, categoria: "comida" },
 { nombre: "Té", precio: 1000, categoria: "bebida" },
 { nombre: "Sandwich", precio: 5500, categoria: "comida" }
];

/*
Función principal de filtrado. Recibe un objeto 'filtros' para manejar las condiciones.
*/
function filtrarProductos(filtros) {
    
    // Usamos .filter() para iterar sobre el array y retornar un nuevo array solo con los que cumplan.
    const productosFiltrados = productos.filter((producto) => {
        
        // La condición OBLIGATORIA: El producto debe estar dentro del rango de precio.
        const cumpleRangoPrecio = (
            producto.precio >= filtros.minPrecio && 
            producto.precio <= filtros.maxPrecio
        );
        
        // Preparamos una variable para la condición de categoría (que es opcional).
        let cumpleCategoria = true;
        
        // Si el usuario especificó una categoría en el objeto 'filtros':
        if (filtros.categoria) {
            
            // Verificamos que el producto coincida con la categoría solicitada.
            // Si NO coincide, la bandera se pone en 'false'.
            if (producto.categoria !== filtros.categoria) {
                cumpleCategoria = false;
            }
        }
        
        // Retornamos TRUE solo si se cumplen AMBAS condiciones (el precio y, si existe, la categoría).
        return cumpleRangoPrecio && cumpleCategoria;
    });

    return productosFiltrados;
}

// ----------------------------------------------------
// PRUEBAS RÁPIDAS
// ----------------------------------------------------

// ...
console.log("--- Prueba 1: Rango de 1000 a 3000 ---");
const resultado1 = filtrarProductos({ 
    minPrecio: 1000, 
    maxPrecio: 3000 
});
// Usamos JSON.stringify para imprimir la estructura completa como texto
console.log(JSON.stringify(resultado1, null, 2));

console.log("\n--- Prueba 2: Comida entre 2000 y 6000 ---");
const resultado2 = filtrarProductos({ 
    minPrecio: 2000, 
    maxPrecio: 6000, 
    categoria: "comida" 
});
// Usamos JSON.stringify para imprimir la estructura completa como texto
console.log(JSON.stringify(resultado2, null, 2));