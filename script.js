// script.js
import { createForm, openForm } from './form.js';
import { renderStudent } from './render.js';

const students = [];
const tbody = document.getElementById('studentTableBody');

document.querySelector('.btn').addEventListener('click', () => {
  openForm();
});

function addStudent(newStudent) {
  students.push(newStudent);
  renderStudent(newStudent, students.length - 1, tbody);
}

createForm(addStudent);

function editStudent(index) {
  alert(`Edit student ${index + 1}`);
}

function deleteStudent(index) {
  alert(`Delete student ${index + 1}`);
}

import { clearSession } from './auth.js';

const logoutBtn = document.getElementById('logoutBtn');

logoutBtn?.addEventListener('click', () => {
  clearSession();
  window.location.href = './login.html';
});



// Hacer accesibles las funciones edit/delete desde el DOM
document.editStudent = editStudent;
document.deleteStudent = deleteStudent;
