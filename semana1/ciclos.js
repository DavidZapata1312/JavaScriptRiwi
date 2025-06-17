let palabra = "hola";

for (let letra of palabra) {
  console.log(letra);
}
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
let palabra2 = "gato";

for (let indice in palabra2) {
  console.log(`Índice: ${indice}, Letra: ${palabra2[indice]}`);
}

let nombres = ["Ana", "Luis", "Pedro", "María"];

for (let nombre of nombres) {
  console.log(`Hola, ${nombre}`);
}

let colores = ["rojo", "verde", "azul", "amarillo"];

for (let indice in colores) {
  console.log(`Índice: ${indice}`);
}

let numeros = [10, 20, 30, 40];

for (let i in numeros) {
  console.log(`Índice: ${i}, Valor: ${numeros[i]}`);
}
