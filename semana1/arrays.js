

let frutas = ["manzana", "banana", "pera", "coco", "mango", "guayaba"];
console.log(frutas);


let frutaEliminada = frutas.shift();

console.log(frutaEliminada);
console.log(frutas);
frutas.splice(2, 1, "Lemon", "Kiwi");
console.log(frutas);

let nums = [5, 45, 8, 100, 9, 14];
console.log(nums);

nums.push(4);

console.log(nums);

let frases=["hipopotamo","manolete","dinosaurio", "hipopotoesquipedalofobia"]
console.log(frases);
frases.unshift("Tun Tun Tun sahun");
console.log(frases);

let colores = ["purple", "blue", "red", "yellow"];
console.log(colores);
let colorEliminado = colores.pop();

console.log(colorEliminado);
console.log(colores);

let originalArray = [8, 33, 89, 35, 343, 555, 666,];

// Extraer desde el índice 1 hasta el 3 (excluido)
let nuevaPorcion = originalArray.slice(4,6 );

console.log(originalArray); 
console.log(nuevaPorcion);  

let palabras = ["Hola", "mundo", "desde", "Fuzagazuga"];
let texto = palabras.join(" ");
console.log(texto);

let nombres = ["Ana", "Juan", "Carlos", "María", "Pedro"];
nombres.sort();
console.log(nombres); 

let reversa = [888, 777, 666, 555];
reversa.reverse();
console.log(reversa); 
let valorBuscado = 88;
if (reversa.includes(valorBuscado)) {
  console.log(`El valor ${valorBuscado} se encuentra en el array.`);
} else {
  console.log(`El valor ${valorBuscado} no se encuentra en el array.`);
}