// El arreglo original con los estudiantes y sus notas
const estudiantes = [
 { nombre: "Ana", notas: [3.2, 4.1, 3.9] },
 { nombre: "Luis", notas: [2.8, 3.0, 3.5] },
 { nombre: "Marta", notas: [4.5, 4.6, 4.9] }
];

// Usamos .map() para transformar cada objeto estudiante
const estudiantesConPromedio = estudiantes.map((estudiante) => {
  // 1. Reducción de arrays (con .reduce()): Sumamos todas las notas
  const sumaNotas = estudiante.notas.reduce((acumulador, nota) => {
    return acumulador + nota; // Suma la nota al acumulador
  }, 0); // El 0 es el valor inicial del acumulador, ¡importantísimo!

  // 2. Promedios: Dividimos la suma total por la cantidad de notas
  const promedioCrudo = sumaNotas / estudiante.notas.length;

  // 3. Formateo: Redondeamos el promedio a dos decimales
  // Lo tuve que hacer así para que diera igual al ejemplo, ¡pero hay varias formas!
  const promedioRedondeado = Math.round(promedioCrudo * 100) / 100;

  // 4. Transformaciones funcionales: Devolvemos el nuevo objeto
  return {
    nombre: estudiante.nombre, // Mantenemos el nombre
    promedio: promedioRedondeado // Añadimos el nuevo campo
  };
});

// Imprimimos el resultado final en la consola
console.log(estudiantesConPromedio);