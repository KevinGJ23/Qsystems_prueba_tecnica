/**
 * Convierte una hora de formato 24h ("HH:MM") a 12h ("h:MM AM/PM").
 */
function convertirHora(hora24h) {
    // 1. Parsing y Manipulación de strings: 
    // Separamos el string "HH:MM" en dos variables usando .split(':')
    const partes = hora24h.split(':');
    let horas = parseInt(partes[0]); // Obtenemos las horas como número
    const minutos = partes[1]; // Los minutos se mantienen como string, ¡es más fácil!
    
    // Aquí declaramos la variable que tendrá 'AM' o 'PM'
    let sufijo = ''; 

    // 2. Condiciones Complejas: Lógica para determinar AM/PM y ajustar la hora
    
    // Primero, miramos si es PM (12:00 en adelante)
    if (horas >= 12) {
        sufijo = 'PM';
    } else {
        // Si no es 12 o más, ¡es AM!
        sufijo = 'AM';
    }

    // Caso ESPECIAL: Si es 12 PM (el mediodía), la hora debe ser 12.
    if (horas === 12) {
        // La hora se queda en 12, solo el sufijo es PM.
        horas = 12; 
    } 
    // Caso ESPECIAL: Si es 0 (medianoche, por ejemplo "00:45"), la hora debe ser 12 AM.
    else if (horas === 0) {
        horas = 12; // 00:xx AM se convierte a 12:xx AM
    }
    
    // Caso GENERAL PM: Si es mayor a 12 (13, 14, etc.), le restamos 12.
    else if (horas > 12) {
        horas = horas - 12; // 14:35 PM se convierte a 2:35 PM
    }
    
    // Caso GENERAL AM: Si no entró en ninguna condición especial, la hora es correcta (1 a 11 AM).
    // Por ejemplo, si es "08:15", queda en 8 AM.
    
    // 3. Resultado Final: Unimos todo.
    // Convertimos las horas de nuevo a string (si no lo eran ya)
    return `${horas}:${minutos} ${sufijo}`;
}
// EJEMPLOS //
console.log("--- Pruebas de Mediodía y Medianoche ---");
console.log(`00:00 se convierte a: ${convertirHora("00:00")}`); 
console.log(`12:00 se convierte a: ${convertirHora("12:00")}`);
console.log("\n--- Pruebas de la Tarde (PM) ---");
console.log(`14:35 se convierte a: ${convertirHora("14:35")}`);
console.log(`23:59 se convierte a: ${convertirHora("23:59")}`);
console.log("\n--- Pruebas de la Mañana (AM) ---");
console.log(`09:15 se convierte a: ${convertirHora("09:15")}`);
console.log(`01:00 se convierte a: ${convertirHora("01:00")}`);