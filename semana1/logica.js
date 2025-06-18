let lado1 = parseInt(prompt("Ingresa el valor del primer lado"));
let lado2 = parseInt(prompt("Ingresa el valor del segundo lado"));
let lado3 = parseInt(prompt("Ingresa el valor del ultimo lado"));
let h = (lado1 + lado2);
console.log(h)
if (lado3 <= h) {
    if ((lado1 === lado2) && (lado1 === lado3)) {
        console.log("Triangulo equilatero");

    } else if ((lado1 === lado2) || (lado1 === lado3) || (lado2 === lado3)) {
        console.log("Triangulo Isoceles")
    } else {
        console.log("Triangulo escaleno")
    }
} else {
    console.error("¡Ups! No es un triangulo");
}


