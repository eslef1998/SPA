// auth.js

export function saveSession(user) {
  localStorage.setItem('loggedUser', user);
}

export function getSession() {
  return localStorage.getItem('loggedUser');
}

export function clearSession() {
  localStorage.removeItem('loggedUser');
}

// auth.js

export function saveSession(user) {
  localStorage.setItem('loggedUser', user);
}

export function getSession() {
  return localStorage.getItem('loggedUser');
}

export function clearSession() {
  localStorage.removeItem('loggedUser');
}
