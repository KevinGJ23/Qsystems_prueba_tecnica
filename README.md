## 📚 Reporte de Desarrollo de Proyectos y Ejercicios

Este documento contiene el informe detallado de la **arquitectura, metodología y funcionalidad** implementada en cada uno de los ejercicios desarrollados, desde la creación de interfaces web hasta la implementación de lógica compleja en lenguajes de programación diversos.

---

## 💻 Ejercicio 1: Mini Landing Page Personal

El objetivo principal de este ejercicio fue la creación de un **mini landing page con un enfoque netamente personal**. El portal fue diseñado para ofrecer una presentación esencial e integral del individuo, integrando aspectos relevantes de su perfil, intereses y trayectoria con el fin de establecer una conexión inmediata y significativa con el visitante.

### Arquitectura Técnica y Responsividad

La arquitectura técnica de la mini landing page se diseñó bajo los estándares de **máxima responsividad**. Para garantizar la perfecta adaptación del contenido a cualquier dispositivo o tamaño de pantalla, se implementaron las siguientes estrategias clave:

* **Medidas Relativas y Heredadas:** Se utilizó una combinación de **unidades de medida relativas** (como porcentajes, `em` y `rem`). Esta elección asegura que los elementos de la interfaz escalen de forma proporcional y dinámica en relación con el *viewport* del usuario.
* **Seccionamiento Adaptable:** La estructura del contenido está optimizada para generar secciones que **se reorganizan y se ajustan automáticamente** en los distintos **puntos de ruptura** (*breakpoints*), manteniendo la coherencia visual y la accesibilidad del contenido en formatos pequeños.

### Maquetación con Flexbox

Para la gestión del *layout* y la distribución eficiente de los componentes, se optó por la implementación del modelo de caja **Flexbox** (`display: flex`). Esta decisión se fundamenta en su adecuación y eficacia para un proyecto de alcance reducido como una mini *landing page*: dado que el ejercicio presentaba requerimientos estructurales limitados, Flexbox resultó ser el método más ágil y eficiente para el alineamiento y distribución de los pocos elementos requeridos, evitando la complejidad innecesaria de otras soluciones de maquetación.

---

## 📝 Ejercicio 2: Módulo Básico de Gestión de Tareas (HTML/CSS/JS)

El Ejercicio 2 consistió en la creación de un pequeño **módulo funcional de gestión de tareas** desarrollado con **HTML, CSS y JavaScript**. Este módulo fue concebido como una aplicación web básica para la administración de ítems de trabajo.

### Componentes y Funcionalidades

El diseño del módulo se centró en proporcionar las funcionalidades esenciales de una lista de tareas:

* **Creación de Tareas:** Permite al usuario ingresar y añadir nuevas tareas a la lista de forma dinámica.
* **Eliminación de Tareas:** Proporciona un mecanismo para remover tareas específicas de la lista.
* **Marcado de Tareas Realizadas:** Implementa la opción de marcar una tarea como ya completada.

> Este ejercicio sentó la base lógica para la gestión de datos en el lado del cliente, la cual fue posteriormente mejorada en el Ejercicio 7.

---

## ⚙️ Ejercicios 3 al 6: Lógica Funcional en Consola (JavaScript)

Para la resolución de los ejercicios con foco en la lógica (englobados en el rango de los ejercicios 3 al 6), se utilizó el lenguaje de programación **JavaScript**. El enfoque principal fue la visualización de resultados y la interacción a través de la consola, cumpliendo con los requisitos de presentación.

### Implementación Técnica y Estructura

* **Uso de Funciones:** La lógica central de cada ejercicio se encapsuló mediante la implementación de **funciones**, permitiendo la **modularización** del código, facilitando la comprensión y promoviendo la **reutilización de código**.
* **Archivos de Datos (Data Dummies):** Se optó por la creación de archivos o *data dummies* (**datos de prueba simulados**) para inyectar información necesaria en los *scripts*. Esta decisión permitió que la ejecución se realizara mediante un único *run*, demostrando el funcionamiento completo del *script* sin requerir intervención externa.
* **Diseño Simple y Claro:** Se priorizó la simplicidad y la claridad estructural, ya que el objetivo primordial era validar la lógica de las funciones y la gestión de las variables.

---

## 🌐 Ejercicios 7 y 8: Interfaz de Usuario y Simulación Web

Para el desarrollo de los ejercicios 7 y 8, se procedió a la creación de una **Interfaz de Usuario (UI)** utilizando **HTML, CSS y JavaScript**, con el objetivo de trasladar y mejorar la lógica de gestión de tareas a un entorno visual.

### Ejercicio 7: Lista de Tareas Interactiva (Versión Mejorada)

El foco del Ejercicio 7 fue la implementación de una mini lista de tareas (*To-Do List*). Esta versión mejorada, basada en la lógica del Ejercicio 2, incorporó:

* **Modificación de Estado:** Se añadió la capacidad de modificar el estado de cada tarea (ej. "Pendiente" a "Completada").
* **Funcionalidad de Filtro:** Se integró una función que permite al usuario **filtrar las tareas** basándose en dicho estado, optimizando la visualización y la organización de la lista.

> Todo el código de esta interfaz se encuentra en la carpeta correspondiente al Ejercicio 7.

### Ejercicio 8: Simulación de Distribución de Tareas

El Ejercicio 8 se presenta como un mini **simulacro de distribución de tareas** dentro de un equipo de trabajo, siendo una extensión del sistema de gestión de tareas del Ejercicio 7.

* **Objetivo:** El *script* simula cómo las tareas, con sus respectivos estados y funcionalidades de gestión, podrían ser **distribuidas y monitoreadas entre diferentes miembros de un equipo**, ilustrando una aplicación de mayor escala del sistema base.

> El código de la simulación se encuentra ubicado en la carpeta del Ejercicio 8.

---

## 📦 Ejercicio 9: Componentización en Vue.js

El Ejercicio 9 se centró en el desarrollo de un **Componente Vue.js** para la gestión de datos, siguiendo una arquitectura de componentes moderna.

### Estructura de Componentes y Visualización

* **Componente Principal de Lógica:** Se desarrolló un componente dedicado exclusivamente a manejar todas las acciones de **filtrado, lógica de datos y enlistado de usuarios**, encapsulando la complejidad funcional.
* **Ventana de Visualización (View):** La lógica del componente fue importada para su presentación en una ventana (*view*). Su rol es puramente presentacional.

### Consideración de la Ventana Principal

Debido a restricciones de tiempo y para simplificar la configuración del entorno de prueba, se optó por utilizar el archivo **`App.vue`** como la ventana o vista principal para alojar el componente desarrollado. Se reconoce que esta práctica no es la convención estándar en arquitecturas de Vue más complejas, pero permitió demostrar la funcionalidad del componente de manera rápida y efectiva.

---

## 🖥️ Ejercicio 10: Aplicación de Escritorio con Swing (Java)

El Ejercicio 10 consistió en la creación de una **aplicación de escritorio** que mantiene la lógica de gestión de datos, utilizando la librería **Swing de Java** para la Interfaz de Usuario (UI).

### Arquitectura y Estructura del Código

* **Propósito de la Interfaz (UI):** Se utilizó **Swing** para construir una interfaz gráfica sencilla y cómoda, que mejoró la visualización de los datos respecto a la salida por consola.
* **Clase de Objeto (`Estudiante`):** Se diseñó una **clase específica** (`Estudiante`) para modelar la entidad central del ejercicio, encapsulando los atributos necesarios para el trabajo (datos y calificaciones).
* **Funcionalidades:** Las tareas principales fueron **listar estudiantes** y **calcular el promedio** de sus calificaciones, utilizando la lista de objetos `Estudiante`.

### Gestión de Datos y Tecnología

* **Implementación de Datos:** Por motivos de simplicidad y eficiencia, la lista de estudiantes se creó directamente en el código de Java (**datos *hardcoded***).
* **Versión de JDK:** El proyecto se desarrolló utilizando el **JDK 17**, asegurando la compatibilidad y equidad en la versión del entorno de desarrollo.