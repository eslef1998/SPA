// auth.js

const API_URL = 'http://localhost:3000/users';
const STUDENTS_API_URL = 'http://localhost:3000/students';

// USUARIOS
export async function getUsers() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Error al obtener usuarios');
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function saveUser(user) {
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
    if (!res.ok) throw new Error('Error al crear usuario');
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function authenticateUser(username, password) {
  try {
    const res = await fetch(`${API_URL}?name=${encodeURIComponent(username)}`);
    if (!res.ok) throw new Error('Error al buscar usuario');
    const users = await res.json();
    const user = users.find(u => u.name === username && u.password === password);
    return user || null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function clearSession() {
  localStorage.removeItem('loggedUser');
}

// ESTUDIANTES
export async function getStudents() {
  try {
    const res = await fetch(STUDENTS_API_URL);
    if (!res.ok) throw new Error('Error al obtener estudiantes');
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function saveStudent(student) {
  try {
    const res = await fetch(STUDENTS_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student)
    });
    if (!res.ok) throw new Error('Error al crear estudiante');
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function updateStudent(id, student) {
  try {
    const res = await fetch(`${STUDENTS_API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student)
    });
    if (!res.ok) throw new Error('Error al editar estudiante');
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function deleteStudent(id) {
  try {
    const res = await fetch(`${STUDENTS_API_URL}/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Error al eliminar estudiante');
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
