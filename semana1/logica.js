let lado1 = parseInt(prompt("Ingresa el valor del primer lado"));
let lado2 = parseInt(prompt("Ingresa el valor del segundo lado"));
let lado3 = parseInt(prompt("Ingresa el valor del último lado"));

console.log(`Lados ingresados: ${lado1}, ${lado2}, ${lado3}`);

// Validar si los lados forman un triángulo real
if (
    lado1 + lado2 > lado3 &&
    lado1 + lado3 > lado2 &&
    lado2 + lado3 > lado1
) {
    // Clasificar el triángulo
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("Triángulo equilátero");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("Triángulo isósceles");
    } else {
        console.log("Triángulo escaleno");
    }
} else {
    console.error("¡Ups! Los valores no forman un triángulo válido");
}