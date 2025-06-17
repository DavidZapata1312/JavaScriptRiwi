# Explorando JavaScript

## ¿Qué es JavaScript?

### ¿Qué es JS y qué lo diferencia de HTML y CSS?

JavaScript es un lenguaje altamente tipado, enfocado a las interacciones de las páginas, tanto para el
usuario como para el servidor.  
Con esto, podemos entender que con JavaScript podemos, desde crear un menú desplegable hasta almacenar la
información de un formulario en una base de datos.  
Su principal diferencia con HTML y CSS es su capacidad de realizar operaciones lógicas (sumas, multiplicaciones),
lo que permite una amplia gama de funciones.

### Algunas de las características de JavaScript son:

1. **Simplicidad**: Posee una estructura sencilla que lo vuelve más fácil de aprender e implementar.  
2. **Carga del servidor**: La validación de datos puede realizarse a través del navegador web y las actualizaciones
   solo se aplican a ciertas secciones de la página web.  
3. **Actualizaciones**: Se actualiza de forma continua con nuevos frameworks y librerías, lo que le asegura relevancia
   dentro del sector.  
4. **Cliente y servidor**: Puede ser utilizado tanto del lado del cliente como del lado del servidor.  
5. **Versatilidad**: Es compatible con otros lenguajes, como PHP, Perl y Java. Además, hace que la ciencia de datos y
   el aprendizaje automático sean accesibles.

### JavaScript: Interpretado y basado en eventos

JavaScript es un lenguaje interpretado, lo que significa que el código se ejecuta línea por línea, sin
necesidad de ser compilado previamente.  
Esto se debe a que se ejecuta por el navegador. A su vez, gracias a su ejecución en el navegador, detecta
las interacciones del usuario con su entorno (la página) como los clics, los scrolls o las pulsaciones de teclado.

---

## Ejemplos de las variables en JavaScript

### 2.1 Variable tipo string

```js
let nombre = "david";
console.log(`Hola, ${nombre}`);
```

### 2.2 Variables con diferentes tipos de datos

```js
let numeroEntero = 10;
let numeroDecimal = 3.14;
let texto = "Hola mundo";

console.log(numeroEntero);
console.log(numeroDecimal);
console.log(texto);
```

### 2.3 Constante PI y prueba de reasignación

```js
const PI = 3.1416;
console.log(PI);

// Intentar cambiar su valor (esto generará un error)
// PI = 3.15; // ❌ Error: Assignment to constant variable
```

### 2.4 Variable sin valor asignado

```js
let sinValor;
console.log(sinValor); // undefined
```

### 2.5 Valores null y booleanos

```js
let valorNulo = null;
let esVerdadero = true;

console.log(valorNulo);
console.log(esVerdadero);
```

## Ejemplos de interacción con el usuario

### 3.1 Solicitar edad con prompt

```js
let edad = prompt("¿Cuál es tu edad?");
console.log(`Tienes ${edad} años`);
```

### 3.2 Mostrar mensaje de bienvenida con alert

```js
alert("¡Bienvenido/a a nuestra página!");
```

### 3.3 Confirmar acción con confirm

```js
let deseaContinuar = confirm("¿Deseas continuar?");
console.log(deseaContinuar);
```

## Parte 4: Operaciones y Comparaciones

### 4.1 Operaciones matemáticas básicas

```js
let num1 = 10;
let num2 = 3;

console.log("Suma:", num1 + num2);
console.log("Resta:", num1 - num2);
console.log("Multiplicación:", num1 * num2);
console.log("División:", num1 / num2);
console.log("Módulo:", num1 % num2);
```

### 4.2 Concatenación de cadenas

```js
let saludo = "Hola";
let nombre = "David";

let mensaje = saludo + " " + nombre;
console.log(mensaje);
```

### 4.3 Comparaciones

```js
console.log(5 == "5");       // true (comparación débil)
console.log(5 === "5");      // false (comparación estricta)
console.log(true && false);  // false
console.log(false || true);  // true
console.log(!true);          // false
```

## Parte 5: Condicionales

### 5.1 Comparar número con 10

```js
let numero = prompt("Ingresa un número:");

if (numero > 10) {
    console.log("El número es mayor que 10");
} else if (numero < 10) {
    console.log("El número es menor que 10");
} else {
    console.log("El número es igual a 10");
}
```

### 5.2 Comparar nombre de usuario

```js
let usuario = prompt("¿Cuál es tu nombre?");

if (usuario === "Admin") {
    console.log("¡Bienvenido, administrador!");
} else {
    console.log(`Hola, ${usuario}`);
}
```

### 5.3 Operador ternario para par o impar

```js
let numeroIngresado = prompt("Ingresa un número:");
let resultado = (numeroIngresado % 2 === 0) ? "Es par" : "Es impar";
console.log(resultado);
```
### Practica sencilla para integrar JavaScript y Html, y ver sus primeras funciones.
 Estructura de archivos
Este proyecto incluye dos archivos principales que deben estar ubicados en la misma carpeta:

 index.html: Contiene la estructura básica de una pagina, mostrando los cortos pasos a seguir para ver los mensajes en consola y enlaza el script externo.

 exploration.js: Contiene todo el codigo dedicado a los mensajes de ejemplo de la consola, junto con una practica de promp (Para pedir el ingreso de datos a la misma)

 ### 🔹 `ciclos.html` + `ciclos.js`

Aquí se exploran los **bucles o ciclos** en JavaScript:

- `for`
- `while`
- `do...while`

Se utilizan para repetir acciones múltiples veces de forma controlada.  
También se ven ejemplos con `break` y `continue` para modificar el flujo del ciclo.

---

### 🔹 `arrays.html` + `arrays.js`

Introduce el uso de **arreglos o listas** en JavaScript:

- Crear arrays
- Acceder a elementos por índice
- Métodos como `.push()`, `.pop()`, `.shift()`, `.unshift()`, `.length`
- Recorrer arrays con ciclos (`for`, `for...of`, `forEach`)

Muy útil para trabajar con colecciones de datos.

---

### 🔹 `logica.html` + `logica.js`

Explica en detalle el uso de **operadores lógicos y estructuras condicionales**:

- `if`, `else`, `else if`
- Operadores: `&&`, `||`, `!`
- Ternario
- Anidación de condiciones
- Casos comunes para controlar el flujo de un programa

Ideal para entender cómo tomar decisiones dentro del código.

---

### 🔹 `objetos.html` + `objetos.js`

En este archivo se empieza a trabajar con **objetos**, que son estructuras de datos fundamentales en JavaScript:

- Crear un objeto con propiedades
- Acceder y modificar propiedades
- Añadir nuevas propiedades
- Recorrer un objeto con `for...in`

Los objetos permiten representar elementos del mundo real en el código y son la base para estructuras más avanzadas como clases y JSON.

---

## Estructura general de los archivos

Todos los archivos `.html` enlazan a su respectivo `.js` usando la etiqueta `<script src="nombre.js"></script>` al final del body.  
Esto asegura que el DOM esté cargado antes de ejecutar el JavaScript.

📁 **Carpeta actual contiene**:
/semana-1

│

├── exploration.html

├── exploration.js

│

├── ciclos.html

├── ciclos.js

│

├── arrays.html

├── arrays.js

│

├── logica.html

├── logica.js

│
├── objetos.html
├── objetos.js
│
└── exploration.md (este archivo)
