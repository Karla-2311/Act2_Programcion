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
 * Convierte un string "YYYY-MM-DD" (el formato que entrega
 * <input type="date">) en un objeto {anio, mes, dia}, sin pasar
 * por new Date() para evitar el desfase de zona horaria (UTC vs local).
 */
function parsearFechaISO(fechaStr) {
  const [anio, mes, dia] = fechaStr.split('-').map(Number);
  return { anio, mes, dia }; // mes ya es 1-12
}

/**
 * Calcula la edad en años completos a partir de una fecha de nacimiento.
 */
function calcularEdad(fechaNacimiento) {
  const { anio, mes, dia } = parsearFechaISO(fechaNacimiento);
  const hoy = new Date();

  let edad = hoy.getFullYear() - anio;
  const mesActual = hoy.getMonth() + 1; // 1-12, para comparar contra "mes"
  const diaActual = hoy.getDate();

  if (mesActual < mes || (mesActual === mes && diaActual < dia)) {
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
  const { mes, dia } = parsearFechaISO(fechaNacimiento);
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  // mes viene 1-12, pero el constructor Date() espera el mes 0-indexado
  let proximo = new Date(hoy.getFullYear(), mes - 1, dia);

  if (proximo < hoy) {
    proximo = new Date(hoy.getFullYear() + 1, mes - 1, dia);
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

/**
 * Calcula el signo zodiacal a partir de una fecha de nacimiento.
 */
function calcularSignoZodiacal(fechaNacimiento) {
  const { mes, dia } = parsearFechaISO(fechaNacimiento);

  const signos = [
    { signo: 'Capricornio', hasta: [1, 19] },
    { signo: 'Acuario', hasta: [2, 18] },
    { signo: 'Piscis', hasta: [3, 20] },
    { signo: 'Aries', hasta: [4, 19] },
    { signo: 'Tauro', hasta: [5, 20] },
    { signo: 'Géminis', hasta: [6, 20] },
    { signo: 'Cáncer', hasta: [7, 22] },
    { signo: 'Leo', hasta: [8, 22] },
    { signo: 'Virgo', hasta: [9, 22] },
    { signo: 'Libra', hasta: [10, 22] },
    { signo: 'Escorpio', hasta: [11, 21] },
    { signo: 'Sagitario', hasta: [12, 21] },
    { signo: 'Capricornio', hasta: [12, 31] },
  ];

  for (const item of signos) {
    const [mesLimite, diaLimite] = item.hasta;
    if (mes < mesLimite || (mes === mesLimite && dia <= diaLimite)) {
      return item.signo;
    }
  }

  return 'Capricornio';
}
 
 
