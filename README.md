# SPA CRUD de Estudiantes con json-server

Este proyecto es una **aplicación web SPA** para gestionar estudiantes usando operaciones CRUD (Crear, Leer, Actualizar, Eliminar) y autenticación de usuarios. Los datos se almacenan en un backend simulado con **json-server**.

---

## Características

- **Login y registro de usuarios** (usuarios y estudiantes separados)
- **Listado de estudiantes** en tabla
- **Agregar, editar y eliminar estudiantes** mediante un modal flotante
- **Validación de sesión** (solo usuarios logueados pueden acceder)
- **Interfaz moderna** con sidebar, iconos y estilos personalizados
- **Botón de logout** para cerrar sesión

---

## Requisitos

- Node.js instalado
- [json-server](https://github.com/typicode/json-server) instalado globalmente  
  Instala con:  
  ```bash
  npm install -g json-server
  ```

---

## Instalación y uso

1. **Clona el repositorio o descarga los archivos.**

2. **Configura el archivo `db.json`**  
   Debe tener esta estructura inicial:
   ```json
   {
     "users": [],
     "students": []
   }
   ```

3. **Inicia json-server**  
   Ejecuta en la terminal:
   ```bash
   json-server --watch db.json --port 3000
   ```

4. **Abre `index.html` en tu navegador.**

---

## Estructura de archivos

- `index.html` - Página principal con la tabla y el modal
- `login.html` - Página de login y registro
- `style.css` - Estilos personalizados
- `script.js` - Lógica principal del CRUD y modal
- `auth.js` - Funciones para autenticación y gestión de datos
- `db.json` - Base de datos simulada para json-server

---

## Notas

- Los datos de usuarios y estudiantes **no se mezclan**.
- Solo los usuarios registrados pueden acceder al CRUD de estudiantes.
- El modal flotante permite agregar y cancelar la operación de estudiantes.
- El backend es simulado, no es una base de datos real.

---

## Créditos

Desarrollado por [Tu Nombre]  
Iconos: [Font Awesome](https://fontawesome.com/)  
Backend simulado con [json-server](https://github.com/typicode/json-server)

---

## Tecnologías utilizadas

- **HTML5**: Estructura de la aplicación.
- **CSS3**: Estilos y diseño responsivo.
- **JavaScript (ES6 Modules)**: Lógica del CRUD y autenticación.
- **json-server**: Backend simulado para almacenamiento de datos.
- **Font Awesome**: Iconos.
- **Google Fonts (Inter)**: Tipografía.

---

## ¿Cómo arrancar json-server?

Para iniciar el backend simulado con json-server, sigue estos pasos:

1. Abre una terminal en la carpeta donde está tu archivo `db.json`.
2. Ejecuta el siguiente comando:

   ```bash
   json-server --watch db.json --port 3000
   ```

Esto iniciará el servidor en [http://localhost:3000](http://localhost:3000) y podrás acceder a los endpoints `/users` y `/students` desde tu navegador o herramientas como Postman.