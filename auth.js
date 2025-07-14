/**
 * auth.js
 * 
 * Este archivo maneja la autenticación de usuarios y gestión de estudiantes
 * mediante peticiones HTTP a una API REST local (http://localhost:3000).
 * 
 * Incluye funciones para:
 * - Obtener, crear y autenticar usuarios
 * - Obtener, crear, actualizar y eliminar estudiantes
 */

// ======================== CONSTANTES ========================
// URL base para la API de usuarios
const API_URL = 'http://localhost:3000/users';

// URL base para la API de estudiantes
const STUDENTS_API_URL = 'http://localhost:3000/students';

// ======================== FUNCIONES DE USUARIOS ========================

/**
 * Obtiene todos los usuarios registrados
 * @returns {Promise<Array>} Lista de usuarios o array vacío si hay error
 */
export async function getUsers() {
  try {
    // Hacer petición GET a la API de usuarios
    const res = await fetch(API_URL);
    
    // Si la respuesta no es exitosa (status 200-299), lanzar error
    if (!res.ok) throw new Error('Error al obtener usuarios');
    
    // Convertir respuesta a JSON y retornar
    return await res.json();
  } catch (error) {
    // Si hay error, mostrarlo en consola y retornar array vacío
    console.error('Error en getUsers:', error);
    return [];
  }
}

/**
 * Crea un nuevo usuario
 * @param {Object} user - Objeto con datos del usuario {name, email, password, etc.}
 * @returns {Promise<Object|null>} Usuario creado o null si hay error
 */
export async function saveUser(user) {
  try {
    // Hacer petición POST con los datos del usuario
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)  // Convertir objeto a JSON
    });
    
    if (!res.ok) throw new Error('Error al crear usuario');
    
    return await res.json();
  } catch (error) {
    console.error('Error en saveUser:', error);
    return null;
  }
}

/**
 * Autentica un usuario con nombre y contraseña
 * @param {string} username - Nombre de usuario
 * @param {string} password - Contraseña
 * @returns {Promise<Object|null>} Usuario autenticado o null si no coincide
 */
export async function authenticateUser(username, password) {
  try {
    // Buscar usuario por nombre (GET con query parameter)
    const res = await fetch(`${API_URL}?name=${encodeURIComponent(username)}`);
    
    if (!res.ok) throw new Error('Error al buscar usuario');
    
    // Obtener lista de usuarios (normalmente debería ser solo uno)
    const users = await res.json();
    
    // Buscar usuario que coincida con nombre Y contraseña
    const user = users.find(u => u.name === username && u.password === password);
    
    // Retornar usuario encontrado o null
    return user || null;
  } catch (error) {
    console.error('Error en authenticateUser:', error);
    return null;
  }
}

/**
 * Limpia la sesión del usuario eliminando datos de localStorage
 */
export function clearSession() {
  // Remover item 'loggedUser' del almacenamiento local
  localStorage.removeItem('loggedUser');
}

// ======================== FUNCIONES DE ESTUDIANTES ========================

/**
 * Obtiene todos los estudiantes
 * @returns {Promise<Array>} Lista de estudiantes o array vacío si hay error
 */
export async function getStudents() {
  try {
    const res = await fetch(STUDENTS_API_URL);
    if (!res.ok) throw new Error('Error al obtener estudiantes');
    return await res.json();
  } catch (error) {
    console.error('Error en getStudents:', error);
    return [];
  }
}

/**
 * Crea un nuevo estudiante
 * @param {Object} student - Datos del estudiante {name, age, grade, etc.}
 * @returns {Promise<Object|null>} Estudiante creado o null si hay error
 */
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
    console.error('Error en saveStudent:', error);
    return null;
  }
}

/**
 * Actualiza un estudiante existente
 * @param {string|number} id - ID del estudiante a actualizar
 * @param {Object} student - Nuevos datos del estudiante
 * @returns {Promise<Object|null>} Estudiante actualizado o null si hay error
 */
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
    console.error('Error en updateStudent:', error);
    return null;
  }
}

/**
 * Elimina un estudiante
 * @param {string|number} id - ID del estudiante a eliminar
 * @returns {Promise<boolean>} True si se eliminó correctamente, false si hubo error
 */
export async function deleteStudent(id) {
  try {
    const res = await fetch(`${STUDENTS_API_URL}/${id}`, { 
      method: 'DELETE' 
    });
    
    if (!res.ok) throw new Error('Error al eliminar estudiante');
    return true;
  } catch (error) {
    console.error('Error en deleteStudent:', error);
    return false;
  }
}