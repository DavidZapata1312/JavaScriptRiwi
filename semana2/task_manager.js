let tareas = [];

fetch("http://localhost:3000/tareas")  
  .then(response => response.json())
  .then(data => {
    tareas = data;
    console.log("GET:", tareas);
    renderTareas();
  })
  .catch(error => console.error("Error en GET:", error));

function renderTareas() {
  const tareasHTML = tareas.map((tarea, index) => {
    let icono = tarea.completed ? "✅" : "❌";
    let estilo = tarea.completed
      ? 'background-color: #d4edda; padding: 10px; border-radius: 5px;'
      : 'background-color: #f8d7da; padding: 10px; border-radius: 5px;';
    if (tarea.completed) {
      return `<div style="${estilo}"><p>${icono} ${tarea.description}</p></div>`;
    } else {
      return `<div style="${estilo}"><p>${icono} ${tarea.description}</p> 
              <button onclick="completarTarea(${index})">Completar</button></div>`;
    }
  }).join('');
  document.getElementById("lista-tareas").innerHTML = tareasHTML;
}

function manejarFormularioTarea() {
  const form = document.getElementById('formulario-tarea');
  const descripcionInput = document.getElementById('descripcion');
  const completadaCheckbox = document.getElementById('completada');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const description = descripcionInput.value.trim();
    const completed = completadaCheckbox.checked;

    if (description === "") {
      alert("Por favor escribe una descripción para la tarea.");
      return;
    }

    const existeTarea = tareas.some(t => t.description.toLowerCase() === description.toLowerCase());
    if (existeTarea) {
      alert("Ya existe una tarea con esa descripción.");
      return;
    }

    const nuevaTarea = { description, completed };

    // Guardar en el servidor
    fetch("http://localhost:3000/tareas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevaTarea)
    })
      .then(res => res.json())
      .then(tareaCreada => {
        tareas.push(tareaCreada);
        renderTareas();
      });

    descripcionInput.value = "";
    completadaCheckbox.checked = false;
  });
}

function completarTarea(index) {
  const tarea = tareas[index];
  tarea.completed = true;

  // Actualizar en el servidor
  fetch(`http://localhost:3000/tareas/${tarea.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: true })
  })
    .then(() => renderTareas());
}

manejarFormularioTarea();
