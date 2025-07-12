// form.js

export function createForm(onSaveCallback) {
  const formOverlay = document.createElement('div');
  formOverlay.id = 'formOverlay';
  formOverlay.style.position = 'fixed';
  formOverlay.style.top = '0';
  formOverlay.style.left = '0';
  formOverlay.style.width = '100vw';
  formOverlay.style.height = '100vh';
  formOverlay.style.background = 'rgba(0,0,0,0.4)';
  formOverlay.style.display = 'none';
  formOverlay.style.justifyContent = 'center';
  formOverlay.style.alignItems = 'center';
  formOverlay.style.zIndex = '1000';
  formOverlay.innerHTML = `
    <div style="background: white; border-radius: 10px; padding: 2rem; width: 90%; max-width: 400px;">
      <h2 style="text-align:center; margin-bottom: 1rem">Register New Student</h2>
      <form id="studentForm">
        <input type="text" id="name" placeholder="Full Name" required style="width:100%;padding:10px;margin-bottom:10px;">
        <input type="email" id="email" placeholder="Email" required style="width:100%;padding:10px;margin-bottom:10px;">
        <input type="text" id="phone" placeholder="Phone" required style="width:100%;padding:10px;margin-bottom:10px;">
        <input type="text" id="enroll" placeholder="Enroll Number" required style="width:100%;padding:10px;margin-bottom:10px;">
        <input type="date" id="date" placeholder="Date of Admission" required style="width:100%;padding:10px;margin-bottom:10px;">
        <div style="display:flex; justify-content:space-between;">
          <button type="button" id="cancelBtn" style="padding:10px 20px; background:#ccc; border:none; border-radius:5px;">Cancel</button>
          <button type="submit" style="padding:10px 20px; background:purple; color:white; border:none; border-radius:5px;">Save</button>
        </div>
      </form>
    </div>
  `;
  document.body.appendChild(formOverlay);

  document.getElementById('cancelBtn').addEventListener('click', () => {
    formOverlay.style.display = 'none';
  });

  document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const newStudent = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      enroll: document.getElementById('enroll').value,
      date: document.getElementById('date').value,
      img: 'https://i.pravatar.cc/40'
    };
    onSaveCallback(newStudent);
    formOverlay.style.display = 'none';
    this.reset();
  });
}

export function openForm() {
  const formOverlay = document.getElementById('formOverlay');
  if (formOverlay) {
    formOverlay.style.display = 'flex';
  }
}
