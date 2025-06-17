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
