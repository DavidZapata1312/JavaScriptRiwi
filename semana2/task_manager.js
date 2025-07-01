let tareas = [
    { descripcion: "Lavar los platos", completada: true },
    { descripcion: "Estudiar JavaScript", completada: false },
    { descripcion: "Leer un capítulo de un libro", completada: true }
];

function renderTareas() {
    const tareasHTML = tareas.map((tarea, index) => {
        let icono = tarea.completada ? "✅" : "❌";
        let estilo = tarea.completada
            ? 'background-color: #d4edda; padding: 10px; border-radius: 5px;'
            : 'background-color: #f8d7da; padding: 10px; border-radius: 5px;';
        if (tarea.completada) {
            return `<div style="${estilo}"><p>${icono} ${tarea.descripcion}</p> </div>`;
        } else {
            return `<div style="${estilo}"><p>${icono} ${tarea.descripcion}</p> <button onclick="completarTarea(${index})">Completar</button></div>`;
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

        const descripcion = descripcionInput.value.trim();
        const completada = completadaCheckbox.checked;

        if (descripcion === "") {
            alert("Por favor escribe una descripción para la tarea.");
            return;
        }

        // Validar si ya existe una tarea con la misma descripción
        const existeTarea = tareas.some(t => t.descripcion.toLowerCase() === descripcion.toLowerCase());
        if (existeTarea) {
            alert("Ya existe una tarea con esa descripción.");
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
function completarTarea(index) {
    tareas[index].completada = true;
    renderTareas();
}
renderTareas();
manejarFormularioTarea();
