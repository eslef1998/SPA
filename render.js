// render.js

export function renderStudent(student, index, container) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td><img class="student-photo" src="${student.img || 'https://i.pravatar.cc/40'}" alt="student" /></td>
    <td>${student.name}</td>
    <td>${student.email}</td>
    <td>${student.phone}</td>
    <td>${student.enroll}</td>
    <td>${student.date}</td>
    <td class="action-btns">
      <i class="fas fa-pen edit" onclick="editStudent(${index})"></i>
      <i class="fas fa-trash delete" onclick="deleteStudent(${index})"></i>
    </td>
  `;
  container.appendChild(row);
}
