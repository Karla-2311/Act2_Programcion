  /*INDEX*/
  const form = document.getElementById('formRegistro');
  const modal = document.getElementById('modalEdad');

  document.getElementById('saludo').textContent = saludoSegunHora() + ', bienvenido/a ';

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valido = true;

    // --- Nombre ---
    const nombre = document.getElementById('nombre');
    const errorNombre = document.getElementById('errorNombre');
    if (!soloLetras(nombre.value.trim()) || nombre.value.trim() === '') {
      errorNombre.textContent = 'Ingresa solo letras y espacios.';
      nombre.classList.add('invalido');
      valido = false;
    } else {
      errorNombre.textContent = '';
      nombre.classList.remove('invalido');
    }

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

    // --- Teléfono ---
    const telefono = document.getElementById('telefono');
    const errorTelefono = document.getElementById('errorTelefono');
    if (!validarLongitud(telefono.value.trim(), 10) || telefono.value.trim() === '') {
      errorTelefono.textContent = 'Máximo 10 dígitos.';
      telefono.classList.add('invalido');
      valido = false;
    } else {
      errorTelefono.textContent = '';
      telefono.classList.remove('invalido');
    }

    // --- Fecha de nacimiento ---
    const fecha = document.getElementById('fechaNacimiento');
    const errorFecha = document.getElementById('errorFecha');
    if (!fecha.value) {
      errorFecha.textContent = 'Selecciona tu fecha de nacimiento.';
      fecha.classList.add('invalido');
      valido = false;
    } else {
      errorFecha.textContent = '';
      fecha.classList.remove('invalido');
    }


    //---Contraseña---//
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
    if (!valido) return;


    // Si todo es válido: calculamos edad y mostramos el modal
    const edad = calcularEdad(fecha.value);
    const nombreIngresado = nombre.value.trim();

    document.getElementById('modalNombre').textContent = `¡Bienvenido/a, ${nombreIngresado}!`;
    document.getElementById('modalEdadValor').textContent = edad;
    document.getElementById('modalTexto').textContent =
      esMayorDeEdad(fecha.value)
        ? 'Tu edad calculada es "mayor de edad":'
        : 'Tu edad calculada es "menor de edad":';

   
    const diasCumple = diasParaCumpleanos(fecha.value);
    document.getElementById('modalCumple').textContent =
      diasCumple === 0
        ? '¡Hoy es tu cumpleaños!'
        : `Faltan ${diasCumple} días para tu próximo cumpleaños.`;
 
    const signo = calcularSignoZodiacal(fecha.value);
    document.getElementById('modalZodiaco').textContent = `Tu signo zodiacal: ${signo}`;
 
    modal.classList.add('activo');
  });
 
  document.getElementById('cerrarModal').addEventListener('click', function () {
    modal.classList.remove('activo');
    form.reset();
  });
 