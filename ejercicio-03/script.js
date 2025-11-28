// El arreglo original con los estudiantes y sus notas
const estudiantes = [
    { nombre: "Ana", notas: [3.2, 4.1, 3.9] },
    { nombre: "Luis", notas: [2.8, 3.0, 3.5] },
    { nombre: "Marta", notas: [4.5, 4.6, 4.9] }
];

// Usamos .map() para transformar cada objeto estudiante
const estudiantesConPromedio = estudiantes.map((estudiante) => {

    // 1. Calcular la suma total de las notas usando .reduce()
    const sumaNotas = estudiante.notas.reduce((acumulador, nota) => acumulador + nota, 0);

    // 2. Calcular el promedio crudo
    const promedioCrudo = sumaNotas / estudiante.notas.length;

    // 3. Formateo: Usamos .toFixed(2) para garantizar 2 decimales.
    //    NOTA: toFixed() devuelve una cadena (string). Si necesitas el valor numérico
    //    de vuelta, usa Number(promedioCrudo.toFixed(2)).
    const promedioFormateado = promedioCrudo.toFixed(2);

    // 4. Devolvemos el nuevo objeto con el promedio
    return {
        nombre: estudiante.nombre,
        promedio: Number(promedioFormateado) // Convertimos la cadena de vuelta a número
    };
});

// Imprimimos el resultado final con un formato legible para evitar la advertencia de la consola
console.log(JSON.stringify(estudiantesConPromedio, null, 2));