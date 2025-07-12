// login.js

import { saveSession } from './auth.js';

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('errorMsg');

  // Usuario fijo (puedes cambiarlo más adelante)
  if (username === 'admin' && password === '1234') {
    saveSession(username);
    window.location.href = './index.html';
  } else {
    errorMsg.textContent = 'Usuario o contraseña incorrectos';
  }
});
