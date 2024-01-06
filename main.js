// Verificar si hay datos almacenados en el LocalStorage y cargarlos
let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

// Función para agregar una tarea
const agregarTarea = () => {
  const nuevaTareaInput = document.getElementById("nuevaTarea");
  const nuevaTarea = nuevaTareaInput.value.trim();

  if (nuevaTarea) {
    tareas.push({ tarea: nuevaTarea, completada: false });
    nuevaTareaInput.value = ""; // Limpiar el campo de entrada
    actualizarLista();
    actualizarLocalStorage();
  }
};

// Función para eliminar una tarea
const eliminarTareaFunc = () => {
  const eliminarTareaInput = document.getElementById("eliminarTarea");
  const indice = parseInt(eliminarTareaInput.value, 10);

  if (!isNaN(indice) && indice >= 1 && indice <= tareas.length) {
    tareas.splice(indice - 1, 1);
    eliminarTareaInput.value = ""; // Limpiar el campo de entrada
    actualizarLista();
    actualizarLocalStorage();
  } else {
    alert("Número de tarea no válido. Intente de nuevo.");
  }
};

// Función para mostrar las tareas
const mostrarTareas = () => {
  if (tareas.length === 0) {
    alert("Aún no has ingresado ninguna tarea.");
  } else {
    actualizarLista();
  }
};

// Función para actualizar la lista en el DOM
const actualizarLista = () => {
  const listaTareas = document.getElementById("listaTareas");
  listaTareas.innerHTML = "";
  
  tareas.forEach((tarea, indice) => {
    const li = document.createElement("li");
    li.textContent = `${indice + 1}. [${tarea.completada ? 'X' : ' '}] ${tarea.tarea}`;
    listaTareas.appendChild(li);
  });
};

// Función para actualizar el LocalStorage
const actualizarLocalStorage = () => {
  localStorage.setItem("tareas", JSON.stringify(tareas));
};