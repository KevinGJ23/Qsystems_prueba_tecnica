// Módulos necesarios para Node.js
const fs = require('fs');

const API_URL = './productos.json';
// Capturamos el ID de la terminal (process.argv[2])
const ID_BUSCADO = parseInt(process.argv[2]); 

// Datos JSON de la mini API
const MOCK_DATA = [
    { "id": 1, "nombre": "Producto A", "precio": 5000 },
    { "id": 2, "nombre": "Producto B", "precio": 7500 },
    { "id": 3, "nombre": "Producto C", "precio": 10000 }
];

// ------------------------------------------------------------------
// FUNCIÓN 1: Asegura que el archivo JSON exista
// ------------------------------------------------------------------
function asegurarArchivoJson() {
    // Si no existe, lo creamos
    if (!fs.existsSync(API_URL)) {
        console.log(`El archivo ${API_URL} no existe. Creándolo...`);
        const jsonString = JSON.stringify(MOCK_DATA, null, 2); 
        try {
            fs.writeFileSync(API_URL, jsonString);
            console.log(`Archivo ${API_URL} creado exitosamente.`);
        } catch (error) {
            console.error("Error al escribir el archivo JSON:", error);
        }
    } else {
        console.log(`Archivo ${API_URL} ya existe. Continuamos...`);
    }
}


// ------------------------------------------------------------------
// FUNCIÓN 2: Busca el producto
// ------------------------------------------------------------------
function buscarProductoPorId(idBuscado) {
    
    // Si no pasaron un ID, avisamos y salimos.
    if (isNaN(idBuscado)) {
        return "Error: Debes pasar el ID del producto como argumento. Ejemplo: node script_no_interactivo.js 3";
    }

    try {
        // Leemos y parseamos el archivo JSON.
        const data = fs.readFileSync(API_URL, 'utf8');
        const productos = JSON.parse(data);

        // Búsqueda eficiente: .find()
        const productoEncontrado = productos.find(producto => producto.id === idBuscado);

        // Retornar el mensaje
        if (productoEncontrado) {
            return `El ${productoEncontrado.nombre} cuesta ${productoEncontrado.precio}`;
        } else {
            return `Error: No se encontró ningún producto con ID ${idBuscado}.`;
        }

    } catch (error) {
        console.error("Error al procesar los datos:", error);
        return "Error interno al leer o parsear los datos del archivo.";
    }
}

// ------------------------------------------------------------------
// EJEMPLO
// ------------------------------------------------------------------
asegurarArchivoJson(); 
const resultado = buscarProductoPorId(ID_BUSCADO);
console.log(resultado);