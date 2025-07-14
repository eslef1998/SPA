/**
 * render.js
 * 
 * Contiene funciones para renderizar estudiantes en una tabla HTML.
 */

/**
 * Crea y agrega una fila de estudiante a una tabla
 * @param {Object} student - Objeto con los datos del estudiante
 * @param {number} index - Índice/número de fila (base 0)
 * @param {HTMLElement} container - Elemento contenedor (tbody) donde se insertará la fila
 */
export function renderStudent(student, index, container) {
  // 1. Crear elemento <tr> (fila de tabla)
  const row = document.createElement('tr');
  
  // 2. Definir el HTML interno de la fila con los datos del estudiante
  row.innerHTML = `
    <td>${index + 1}</td> <!-- Número de fila (comienza desde 1) -->
    <td>${student.name}</td> <!-- Nombre del estudiante -->
    <td>${student.email}</td> <!-- Email -->
    <td>${student.phone}</td> <!-- Teléfono -->
    <td>${student.enrollNumber || ''}</td> <!-- Número de matrícula (o cadena vacía si no existe) -->
    <td>${student.dateOfAdmission || ''}</td> <!-- Fecha de admisión (o cadena vacía) -->
    <td class="action-btns">
      <!-- Ícono de editar (Font Awesome) -->
      <i class="fas fa-pen edit" onclick="editStudent(${index})"></i>
      <!-- Ícono de eliminar -->
      <i class="fas fa-trash delete" onclick="deleteStudent(${index})"></i>
    </td>
  `;
  
  // 3. Agregar la fila al contenedor (tbody)
  container.appendChild(row);
}