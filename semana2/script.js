// Datos base
let colores = ['black', 'white', 'red', 'blue'];
let frases = [
  "Una vez que cuestionas tus propias creencias, estás acabado.",
  "Incluso el más fuerte de los oponentes siempre tiene una debilidad.",
  "No es la cara lo que hace que alguien sea un monstruo, son las decisiones que uno toma en su vida.",
  "Mi lema es ser más fuerte que ayer, si es necesario estaré más fuerte que hace medio día, incluso más fuerte que hace un minuto.",
  "La guerra nunca acabará, razones sobran para sostener este hecho, la naturaleza humana busca el conflicto."
];
let numeros = [0, 700, 6462, 555];

let personas = [
  { nombre: "Laura", edad: 28, ocupacion: "Diseñadora Gráfica" }
];

let canciones = [
  { titulo: "Bohemian Rhapsody", artista: "Queen", duracion: "5:55" },
  { titulo: "Imagine", artista: "John Lennon", duracion: "3:01" },
  { titulo: "Smells Like Teen Spirit", artista: "Nirvana", duracion: "5:01" },
  { titulo: "Billie Jean", artista: "Michael Jackson", duracion: "4:54" },
  { titulo: "Hotel California", artista: "Eagles", duracion: "6:30" }
];

let usuarios = [
  { nombre: "Ana Gómez", correo: "ana@example.com" },
  { nombre: "Carlos Pérez", correo: "carlos@example.com" },
  { nombre: "Lucía Ramírez", correo: "lucia@example.com" }
];

let libros = [
  { titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", año: 1967 },
  { titulo: "1984", autor: "George Orwell", año: 1949 },
  { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605 }
];

let tareas = [
  { descripcion: "Lavar los platos", completada: true },
  { descripcion: "Estudiar JavaScript", completada: false },
  { descripcion: "Leer un capítulo de un libro", completada: true }
];

// Renderizados
function renderColores() {
  const colors = document.getElementById('colors');
  colors.innerHTML = '<ul>';
  colores.forEach(color => {
    colors.innerHTML += `<li>El color ${color} es muy lindo</li>`;
  });
  colors.innerHTML += '</ul>';
}

function renderFrases() {
  const phrase = document.getElementById('phrase');
  const frasesHTML = frases.map(frase => `<p>${frase}</p>`);
  phrase.innerHTML = frasesHTML.join('');
}

function renderNumeros() {
  const numbers = document.getElementById('numbers');
  numbers.innerHTML = '<ul>';
  numeros.forEach(num => {
    numbers.innerHTML += `<li>${num}</li>`;
  });
  numbers.innerHTML += '</ul>';
}

function renderPersonas() {
  const contenedor = document.getElementById("person");
  let html = "";
  personas.forEach(persona => {
    html += `
      <div>
        <h2>${persona.nombre}</h2>
        <p>Edad ${persona.edad} años</p>
        <p>Ocupación: ${persona.ocupacion}</p>
        <hr/>
      </div>
    `;
  });
  contenedor.innerHTML = html;
}

function renderCanciones() {
  let cancionesHTML = "";
  canciones.forEach(cancion => {
    cancionesHTML += `
      <p><strong>${cancion.titulo}</strong><br>
      Artista: ${cancion.artista}<br>
      Duración: ${cancion.duracion}</p>
    `;
  });
  document.getElementById("songs").innerHTML = cancionesHTML;
}

function renderUsuarios() {
  const usuariosHTML = usuarios.map(usuario => {
    return `
      <p><strong>${usuario.nombre}</strong><br>
      Email: ${usuario.correo}</p>
    `;
  }).join('');
  document.getElementById("usuarios").innerHTML = usuariosHTML;
}

function renderLibros() {
  const librosHTML = libros.map(libro => {
    return `<li>${libro.titulo} (${libro.año}) - ${libro.autor}</li>`;
  }).join('');
  document.getElementById("libros").innerHTML = librosHTML;
}

function renderTareas() {
  const tareasHTML = tareas.map(tarea => {
    let icono = tarea.completada ? "✅" : "❌";
    return `<p>${icono} ${tarea.descripcion}</p>`;
  }).join('');
  document.getElementById("tareas").innerHTML = tareasHTML;
}

// Formularios
function manejarFormularioColor() {
  const form = document.getElementById('addColor');
  const inputColor = document.getElementById('newColor');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const valor = inputColor.value.trim();
    if (valor === "") {
      alert("Escribí un color");
      return;
    }

    colores.push(valor);
    inputColor.value = "";
    renderColores();
  });
}

function manejarFormularioPersona() {
  const form = document.getElementById('addPerson');
  const nombre = document.getElementById('nombrePersona');
  const edad = document.getElementById('edadPersona');
  const ocupacion = document.getElementById('ocupacionPersona');

  form.addEventListener('submit', e => {
    e.preventDefault();

    if (!nombre.value.trim() || !edad.value || !ocupacion.value.trim()) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    personas.push({
      nombre: nombre.value.trim(),
      edad: parseInt(edad.value),
      ocupacion: ocupacion.value.trim()
    });

    nombre.value = "";
    edad.value = "";
    ocupacion.value = "";

    renderPersonas();
  });
}

function manejarFormularioTarea() {
  const form = document.getElementById('addTask');
  const descripcionInput = document.getElementById('descripcionTarea');
  const completadaCheckbox = document.getElementById('tareaCompletada');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const descripcion = descripcionInput.value.trim();
    const completada = completadaCheckbox.checked;

    if (descripcion === "") {
      alert("Por favor escribe una descripción para la tarea.");
      return;
    }

    tareas.push({
      descripcion: descripcion,
      completada: completada
    });

    descripcionInput.value = "";
    completadaCheckbox.checked = false;

    renderTareas();
  });
}

// Ejecutar renderizados y formularios al cargar
renderColores();
renderFrases();
renderNumeros();
renderPersonas();
renderCanciones();
renderUsuarios();
renderLibros();
renderTareas();
manejarFormularioColor();
manejarFormularioPersona();
manejarFormularioTarea();
 