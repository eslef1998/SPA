/**
 * form.js
 * 
 * Este módulo proporciona funciones para crear y manejar formularios de estudiantes.
 * Permite tanto la creación de nuevos estudiantes como la edición de existentes.
 */

/**
 * Crea un formulario modal para agregar/editar estudiantes
 * @param {Function} onSubmit - Función que se ejecuta al enviar el formulario
 * @param {Object|null} student - Objeto con datos del estudiante (para edición) o null (para creación)
 * @returns {void}
 */
export function createForm(onSubmit, student = null) {
  // Crear contenedor del formulario
  const formContainer = document.createElement('div');
  formContainer.classList.add('modal-form'); // Añadir clase CSS para estilos
  
  // Plantilla HTML del formulario con valores condicionales:
  // - Si `student` existe (modo edición), muestra sus valores
  // - Si no (modo creación), muestra campos vacíos
  formContainer.innerHTML = `
    <form id="studentForm" class="student-form">
      <input type="text" id="studentName" placeholder="Nombre" required value="${student?.name || ''}" />
      <input type="email" id="studentEmail" placeholder="Email" required value="${student?.email || ''}" />
      <input type="text" id="studentPhone" placeholder="Teléfono" required value="${student?.phone || ''}" />
      <input type="text" id="studentEnroll" placeholder="Enroll Number" required value="${student?.enrollNumber || ''}" />
      <input type="date" id="studentDate" placeholder="Fecha de admisión" required value="${student?.dateOfAdmission || ''}" />
      
      <!-- Botón dinámico: texto cambia según modo (edición/creación) -->
      <button type="submit">${student ? 'Guardar cambios' : 'Agregar estudiante'}</button>
      
      <!-- Botón para cancelar/cerrar el formulario -->
      <button type="button" id="closeFormBtn">Cancelar</button>
    </form>
  `;
  
  // Añadir el formulario al final del body
  document.body.appendChild(formContainer);

  // Obtener referencias a los elementos del formulario
  const studentForm = document.getElementById('studentForm');
  const closeFormBtn = document.getElementById('closeFormBtn');

  // Manejador de evento para el envío del formulario
  studentForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar recarga de página
    
    // Crear objeto con los datos del formulario
    const newStudent = {
      name: document.getElementById('studentName').value,
      email: document.getElementById('studentEmail').value,
      phone: document.getElementById('studentPhone').value,
      enrollNumber: document.getElementById('studentEnroll').value,
      dateOfAdmission: document.getElementById('studentDate').value
    };
    
    // Ejecutar función `onSubmit` proporcionada (para guardar datos)
    onSubmit(newStudent);
    
    // Remover el formulario del DOM después de enviar
    formContainer.remove();
  });

  // Manejador de evento para el botón "Cancelar"
  closeFormBtn.addEventListener('click', () => {
    formContainer.remove(); // Cerrar formulario sin guardar
  });
}

/**
 * Función de conveniencia para abrir el formulario
 * @param {Function} onSubmit - Función que maneja el envío del formulario
 * @param {Object|null} student - Datos del estudiante para edición (opcional)
 */
export function openForm(onSubmit, student = null) {
  createForm(onSubmit, student); // Simplemente llama a createForm
}