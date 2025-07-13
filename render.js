// render.js

export function renderStudent(student, index, container) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${index + 1}</td>
    <td>${student.name}</td>
    <td>${student.email}</td>
    <td>${student.phone}</td>
    <td>${student.enrollNumber || ''}</td>
    <td>${student.dateOfAdmission || ''}</td>
    <td class="action-btns">
      <i class="fas fa-pen edit" onclick="editStudent(${index})"></i>
      <i class="fas fa-trash delete" onclick="deleteStudent(${index})"></i>
    </td>
  `;
  container.appendChild(row);
}
