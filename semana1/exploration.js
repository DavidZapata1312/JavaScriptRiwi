// Mensaje de error
console.error("¡Ups! Se ha producido un error");

// Grupo de mensajes
console.group("Grupo de mensajes");
console.log("Mensaje dentro del grupo 1");
console.log("Mensaje dentro del grupo 2");
console.groupEnd();

// Medir tiempo de ejecución
console.time("Tiempo de ejecución");
for (let i = 0; i < 1000000; i++) {
    // Simulación de una tarea
    Math.sqrt(i);
}
console.timeEnd("Tiempo de ejecución");


// --- NUEVO EJERCICIO ---

// Solicitar datos al usuario
let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuántos años tienes?");
let ciudad = prompt("¿En qué ciudad vives?");

// Mostrar mensaje personalizado
console.log(`Hola ${nombre}, tienes ${edad} años y vives en ${ciudad}.`);
    