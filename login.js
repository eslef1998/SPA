/**
 * login.js
 * 
 * Maneja la lógica de autenticación (login) y registro de usuarios.
 * Se conecta con auth.js para interactuar con la API.
 */

// Importa funciones necesarias del módulo auth.js
import { authenticateUser, saveUser } from './auth.js';

// ======================== MANEJADOR DE LOGIN ========================
document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault(); // Evita que el formulario recargue la página

  // Obtiene valores de los inputs y elimina espacios en blanco
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('errorMsg');

  // Intenta autenticar al usuario con la API
  const user = await authenticateUser(username, password);

  if (user) {
    // Si es exitoso:
    localStorage.setItem('loggedUser', user.name); // Guarda el nombre en localStorage
    window.location.href = './index.html'; // Redirige al dashboard
  } else {
    // Si falla:
    errorMsg.textContent = 'Usuario o contraseña incorrectos'; // Muestra error
  }
});

// ======================== MANEJADOR DE REGISTRO ========================
document.getElementById('registerForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  // Obtiene valores del formulario
  const name = document.getElementById('regUsername').value.trim();
  const password = document.getElementById('regPassword').value.trim();
  const password2 = document.getElementById('regPassword2').value.trim();
  const regErrorMsg = document.getElementById('regErrorMsg');

  // Validación básica
  if (!name || !password || !password2) {
    regErrorMsg.textContent = 'Todos los campos son obligatorios';
    return; // Detiene la ejecución
  }

  if (password !== password2) {
    regErrorMsg.textContent = 'Las contraseñas no coinciden';
    return;
  }

  // Verifica si el usuario ya existe
  const existing = await authenticateUser(name, password);
  if (existing) {
    regErrorMsg.textContent = 'El usuario ya existe';
    return;
  }

  // Crea el objeto usuario para la API
  const newUser = {
    name, // Nombre de usuario
    password // Contraseña (¡en producción debería estar hasheada!)
    // NOTA: No incluir campos de estudiante (enrollNumber, dateOfAdmission)
  };

  // Intenta guardar el usuario
  const result = await saveUser(newUser);
  if (result) {
    // Registro exitoso
    regErrorMsg.style.color = 'green'; // Feedback visual
    regErrorMsg.textContent = 'Usuario registrado correctamente. Ahora puedes iniciar sesión.';
    document.getElementById('registerForm').reset(); // Limpia el formulario
  } else {
    // Error en el registro
    regErrorMsg.textContent = 'Error al registrar usuario';
  }
});

// ======================== TOGGLE ENTRE LOGIN Y REGISTRO ========================

// Botón "Registrarse" (muestra el formulario de registro)
document.getElementById('showRegisterBtn').addEventListener('click', () => {
  // Oculta elementos del login
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('loginTitle').style.display = 'none';
  document.getElementById('errorMsg').style.display = 'none';
  document.getElementById('showRegisterBtn').style.display = 'none';

  // Muestra el formulario de registro
  document.getElementById('registerContainer').style.display = 'block';
});

// Botón "Volver al login" (regresa al formulario de login)
document.getElementById('backToLoginBtn').addEventListener('click', () => {
  // Muestra elementos del login
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('loginTitle').style.display = 'block';
  document.getElementById('errorMsg').style.display = 'block';
  document.getElementById('showRegisterBtn').style.display = 'inline-block';

  // Oculta el formulario de registro
  document.getElementById('registerContainer').style.display = 'none';
});