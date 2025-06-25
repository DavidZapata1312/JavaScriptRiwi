function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

let nombreUsuario = prompt("¿Cuál es tu nombre?");
alert(saludar(nombreUsuario));

function esPar(numero) {
  return numero % 2 === 0;
}

let numeroParImpar = parseInt(prompt("Ingresa un número para saber si es par o impar:"));

let esParResultado = (numeroParImpar % 2 === 0) ? "Es par" : "Es impar";
alert(`¿Es par? ${esParResultado}`);
console.log(`¿Es par? ${esParResultado}`);

function areaRectangulo(base, altura) {
  return base * altura;
}

let base = parseFloat(prompt("Ingresa la base del rectángulo:"));
let altura = parseFloat(prompt("Ingresa la altura del rectángulo:"));

let area = areaRectangulo(base, altura);
alert(`El área del rectángulo es: ${area}`);
console.log(`El área del rectángulo es: ${area}`);

function celsiusAFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

let gradosCelsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));

let fahrenheit = celsiusAFahrenheit(gradosCelsius);
alert(`${gradosCelsius}°C son ${fahrenheit.toFixed(2)}°F`);
console.log(`${gradosCelsius}°C son ${fahrenheit.toFixed(2)}°F`);




