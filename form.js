// form.js

export function createForm(onSubmit, student = null) {
  const formContainer = document.createElement('div');
  formContainer.classList.add('modal-form');
  formContainer.innerHTML = `
    <form id="studentForm" class="student-form">
      <input type="text" id="studentName" placeholder="Nombre" required value="${student?.name || ''}" />
      <input type="email" id="studentEmail" placeholder="Email" required value="${student?.email || ''}" />
      <input type="text" id="studentPhone" placeholder="Teléfono" required value="${student?.phone || ''}" />
      <input type="text" id="studentEnroll" placeholder="Enroll Number" required value="${student?.enrollNumber || ''}" />
      <input type="date" id="studentDate" placeholder="Fecha de admisión" required value="${student?.dateOfAdmission || ''}" />
      <button type="submit">${student ? 'Guardar cambios' : 'Agregar estudiante'}</button>
      <button type="button" id="closeFormBtn">Cancelar</button>
    </form>
  `;
  document.body.appendChild(formContainer);

  const studentForm = document.getElementById('studentForm');
  const closeFormBtn = document.getElementById('closeFormBtn');

  studentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newStudent = {
      name: document.getElementById('studentName').value,
      email: document.getElementById('studentEmail').value,
      phone: document.getElementById('studentPhone').value,
      enrollNumber: document.getElementById('studentEnroll').value,
      dateOfAdmission: document.getElementById('studentDate').value
    };
    onSubmit(newStudent);
    formContainer.remove();
  });

  closeFormBtn.addEventListener('click', () => {
    formContainer.remove();
  });
}

export function openForm(onSubmit, student = null) {
  createForm(onSubmit, student);
}
