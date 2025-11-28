## 🤝 COLABORATION_SIMULATION.md

### 1. Cómo coordinarías este desarrollo si trabajas con otra persona

La coordinación se centraría en la **comunicación diaria y el control de versiones**:

* **Herramientas:** Usaremos **Git/GitHub** con ramas por funcionalidad y un tablero **Kanban** (o similar) para el seguimiento visual del progreso.
* **Claridad en Tareas:** Cada tarea en el tablero debe tener especificaciones claras, criterios de aceptación y una justificación de su necesidad.
* **Pull Requests (PRs) Detallados:** El principal punto de comunicación será el PR. Debe describir los cambios realizados, las decisiones técnicas tomadas y cualquier *trade-off* considerado, eliminando la necesidad de reuniones de sincronización diarias.
* **Revisión Asíncrona:** Se dará prioridad a la revisión de PRs para mantener el flujo de integración de código.

---

### 2. Cómo dividirías las tareas del proyecto

El proyecto se divide por **capas de responsabilidad** para que ambos puedan trabajar en paralelo con mínima fricción en el mismo archivo:

| Desarrollador | Enfoque Principal | Tareas Asignadas Específicas |
| :--- | :--- | :--- |
| **Persona A** | **Estructura y Lógica Base (JS)** | 1. Implementar la **lógica** de `agregarTarea`, `eliminarTarea` y `cambiarEstado` en `script.js`. |
| | | 2. Definir la **estructura HTML** principal (`index.html`) y sus IDs/Clases. |
| **Persona B** | **Presentación y Renderizado (CSS/JS)** | 1. Desarrollar **todos los estilos CSS** (`styles.css`), incluyendo el diseño de tabla y colores de estado. |
| | | 2. Implementar la función de **`renderizarTareas`** en `script.js` (generación de la plantilla HTML de la fila de tarea). |

---

### 3. Cómo manejarías un desacuerdo técnico simple

Si surgiera un desacuerdo (ej. ¿Usar una tabla HTML real o un diseño `div` con flexbox para la lista?), lo manejaríamos así:

1.  **Exposición de Opciones:** Ambos exponen las ventajas y desventajas de su propuesta (ej. Tabla: Semántica, Flexbox: Mayor control de diseño).
2.  **Referencia a Metas:** Se evalúa qué opción cumple mejor la **meta de diseño** (la imagen provista).
3.  **Decisión y Documentación:** Optaríamos por la solución que mejor logre la estética requerida con el menor *overhead* (en este caso, **Flexbox** para replicar la tarjeta minimalista). La decisión se documentaría brevemente en el PR o en la descripción de la tarea.

---

### 4. Cómo dejarías evidencia en commits claros (dar 2 ejemplos de mensajes de commit)

Se utilizaría el estándar de mensaje de *commit* **tipo(área): descripción**, lo que permite una trazabilidad limpia del historial:

| Tipo | Mensaje de Commit | Explicación |
| :--- | :--- | :--- |
| `feat` (Feature) | `feat(js): Implementar función de renderizado con filtro de estado` | Introduce una nueva funcionalidad principal a la aplicación. |
| `style` (Style) | `style(css): Ajustar widths y añadir estilos de color al select de estado` | Cambios que afectan únicamente la apariencia visual y la consistencia del CSS. |
| `fix` (Fix) | `fix(html): Corregir ID en el botón 'Agregar Tarea'` | Arreglo de un error o *bug* en la estructura HTML o lógica. |