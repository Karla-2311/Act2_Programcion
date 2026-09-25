
const form = document.getElementById('formLogin');
document.getElementById('saludo').textContent = saludoSegunHora() + ', qué gusto verte';
 
/*LOGIN*/
form.addEventListener('submit', function (e) {
  e.preventDefault();
  let valido = true;
 
  // --- Correo ---
  const correo = document.getElementById('correo');
  const errorCorreo = document.getElementById('errorCorreo');
  if (!validarCorreo(correo.value.trim())) {
    errorCorreo.textContent = 'Correo electrónico no válido.';
    correo.classList.add('invalido');
    valido = false;
  } else {
    errorCorreo.textContent = '';
    correo.classList.remove('invalido');
  }
 
  // --- Password ---
  const password = document.getElementById('password');
  const errorPassword = document.getElementById('errorPassword');
  if (!validarPassword(password.value)) {
    errorPassword.textContent =
      'Debe tener 8+ caracteres, mayúscula, minúscula, número y carácter especial.';
    password.classList.add('invalido');
    valido = false;
  } else {
    errorPassword.textContent = '';
    password.classList.remove('invalido');
  }
 
  const mensajeExito = document.getElementById('mensajeExito');
  if (!valido) {
    mensajeExito.textContent = '';
    return;
  }
 
  mensajeExito.textContent = '¡Inicio de sesión válido!';
});
 