let persona = {
  nombre: "Camila",
  edad: 25,
  ciudad: "Medellín"
};
console.log(persona.nombre);  // Accediendo directamente
// o también
console.log(persona["ciudad"]);  // Otra forma de acceder
let libro = {
  titulo: "Cien Años de Soledad",
  autor: "Gabriel García Márquez",
  año: 1967
};
console.log(libro);
libro.año = 1970;  // Cambiamos el año
console.log(libro);

let auto = {
  marca: "Toyota",
  modelo: "Corolla"
};

auto.color = "Rojo";  // Nueva propiedad agregada
console.log(auto);

let estudiante = {
  nombre: "Juan",
  edad: 20,
  carrera: "Ingeniería",
  universidad: "UPB"
};

for (let clave in estudiante) {
  console.log(`${clave}: ${estudiante[clave]}`);
}

