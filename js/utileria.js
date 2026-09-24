/* 
   UTILERIA.JS
   Librería de funciones utilitarias de validación y formateo.
*/

/**
 * Valida que un texto tenga formato de correo electrónico válido.
 */
function validarCorreo(correo) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
}

/**
 * Valida que un texto contenga únicamente letras (incluye vocales
 * acentuadas y ñ), mayúsculas o minúsculas, y espacios.
 */
function soloLetras(texto) {
  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;
  return regex.test(texto);
}

/**
 * Valida que un número no exceda una longitud máxima de dígitos.
 */
function validarLongitud(numero, maxLongitud) {
  const texto = numero.toString().replace('-', '');
  return texto.length <= maxLongitud;
}

/**
 * Calcula la edad en años completos a partir de una fecha de nacimiento.
 */
function calcularEdad(fechaNacimiento) {
  const nacimiento = new Date(fechaNacimiento);
  const hoy = new Date();

  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }

  return edad;
}

/**
 * Determina si una persona es mayor de edad (18+) a partir de su
 * fecha de nacimiento.
 */
function esMayorDeEdad(fechaNacimiento) {
  return calcularEdad(fechaNacimiento) >= 18;
}

/**
 * Valida que una contraseña tenga: al menos una mayúscula, una
 * minúscula, un número, un carácter especial y mínimo 8 caracteres.
 */
function validarPassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
  return regex.test(password);
}

/**
 * Calcula cuántos días faltan para el próximo cumpleaños de una persona
 * a partir de su fecha de nacimiento. Si el cumpleaños es hoy, regresa 0.
 */
function diasParaCumpleanos(fechaNacimiento) {
  const nacimiento = new Date(fechaNacimiento);
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  let proximo = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate());

  if (proximo < hoy) {
    proximo = new Date(hoy.getFullYear() + 1, nacimiento.getMonth(), nacimiento.getDate());
  }

  const msPorDia = 1000 * 60 * 60 * 24;
  return Math.round((proximo - hoy) / msPorDia);
}

/**
 * Genera un saludo distinto según la hora actual del sistema
 * (mañana, tarde o noche). No depende de ningún input del usuario.
 */
function saludoSegunHora() {
  const hora = new Date().getHours();

  if (hora >= 5 && hora < 12) return 'Buenos días';
  if (hora >= 12 && hora < 19) return 'Buenas tardes';
  return 'Buenas noches';
}