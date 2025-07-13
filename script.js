// script.js
import { getStudents, saveStudent, updateStudent, deleteStudent } from './auth.js';
import { renderStudent } from './render.js';
import { openForm } from './form.js';

const tbody = document.getElementById('studentTableBody');

async function renderAllStudents() {
  const students = await getStudents();
  tbody.innerHTML = '';
  students.forEach((student, i) => renderStudent(student, i, tbody));
}

document.querySelector('.btn').addEventListener('click', () => {
  addStudentForm.style.display = 'block';
});

window.editStudent = async function(index) {
  const students = await getStudents();
  const student = students[index];
  openForm(async (updatedStudent) => {
    await updateStudent(student.id, updatedStudent);
    renderAllStudents();
  }, student);
};

window.deleteStudent = async function(index) {
  const students = await getStudents();
  const student = students[index];
  if (confirm('¿Seguro que deseas eliminar este estudiante?')) {
    await deleteStudent(student.id);
    renderAllStudents();
  }
};

// Mostrar el modal al hacer clic en el botón
const addStudentBtn = document.querySelector('.btn');
const addStudentForm = document.getElementById('addStudentForm');
const studentForm = document.getElementById('studentForm');
const closeBtn = document.querySelector('.close-btn');

addStudentBtn.addEventListener('click', () => {
  addStudentForm.style.display = 'block';
  studentForm.reset(); // Opcional, para limpiar el formulario cada vez
});

studentForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const newStudent = {
    name: document.getElementById('studentName').value,
    email: document.getElementById('studentEmail').value,
    phone: document.getElementById('studentPhone').value,
    enrollNumber: document.getElementById('studentEnroll').value,
    dateOfAdmission: document.getElementById('studentDate').value
  };
  await saveStudent(newStudent);
  addStudentForm.style.display = 'none';
  renderAllStudents();
});

// Ocultar el modal al hacer clic en la X
closeBtn.addEventListener('click', () => {
  addStudentForm.style.display = 'none';
});

// Opcional: Ocultar el modal al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
  if (e.target === addStudentForm) {
    addStudentForm.style.display = 'none';
  }
});

renderAllStudents();
