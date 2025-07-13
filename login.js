// login.js

import { authenticateUser, saveUser } from './auth.js';

// LOGIN
document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('errorMsg');

  const user = await authenticateUser(username, password);
  if (user) {
    localStorage.setItem('loggedUser', user.name);
    window.location.href = './index.html';
  } else {
    errorMsg.textContent = 'Usuario o contraseña incorrectos';
  }
});

// REGISTRO
document.getElementById('registerForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const name = document.getElementById('regUsername').value.trim();
  const password = document.getElementById('regPassword').value.trim();
  const password2 = document.getElementById('regPassword2').value.trim();
  const regErrorMsg = document.getElementById('regErrorMsg');

  if (!name || !password || !password2) {
    regErrorMsg.textContent = 'Todos los campos son obligatorios';
    return;
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

  // Crea el usuario en json-server
  const newUser = {
    name,
    password
    // Puedes agregar email si lo deseas, pero NO enrollNumber ni dateOfAdmission
  };
  const result = await saveUser(newUser);
  if (result) {
    regErrorMsg.style.color = 'green';
    regErrorMsg.textContent = 'Usuario registrado correctamente. Ahora puedes iniciar sesión.';
    document.getElementById('registerForm').reset();
  } else {
    regErrorMsg.textContent = 'Error al registrar usuario';
  }
}
);

document.getElementById('showRegisterBtn').addEventListener('click', () => {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('loginTitle').style.display = 'none';
  document.getElementById('errorMsg').style.display = 'none';
  document.getElementById('showRegisterBtn').style.display = 'none';
  document.getElementById('registerContainer').style.display = 'block';
});

document.getElementById('backToLoginBtn').addEventListener('click', () => {
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('loginTitle').style.display = 'block';
  document.getElementById('errorMsg').style.display = 'block';
  document.getElementById('showRegisterBtn').style.display = 'inline-block';
  document.getElementById('registerContainer').style.display = 'none';
});
