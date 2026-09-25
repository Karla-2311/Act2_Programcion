## UTILERIA JS
Programación Web
Antonio Vázquez Karla Guadalupe 
# ¿Qué problema resuelve?
Librería JavaScript de funciones utilitarias para **validación de formularios, cálculo de edad y formateo de texto**, sin frameworks ni dependencias externas.
Resuelve un problema común en proyectos web: tener que reescribir una y otra vez las mismas validaciones (correo, contraseña, nombre, edad) en cada formulario.
Con `utileria.js` basta con importar un archivo y llamar a la función correspondiente.
# Instalación
Copia `js/utileria.js` a tu proyecto e impórtalo antes de tu script principal:
```html
<script src="js/utileria.js"></script>
```
## Uso

### 1. validarCorreo(correo)
Valida que un texto tenga formato de correo electrónico.

```javascript
validarCorreo("maria@correo.com"); // true
validarCorreo("maria@correo");     // false
```

### 2. soloLetras(texto)
Valida que un texto contenga solo letras (incluye acentos y ñ).

```javascript
soloLetras("José Ñuñez"); // true
soloLetras("Juan123");    // false
```

### 3. validarLongitud(numero, maxLongitud)
Valida que un número no supere una cantidad máxima de dígitos.

```javascript
validarLongitud(5512345678, 10); // true
validarLongitud(551234567890, 10); // false
```

### 4. calcularEdad(fechaNacimiento)
Calcula la edad en años completos.

```javascript
calcularEdad("2000-05-14"); // ej. 26
```

### 5. esMayorDeEdad(fechaNacimiento)
Regresa `true` si la persona es mayor de 18 años.

```javascript
esMayorDeEdad("2010-01-01"); // false
```

### 6. validarPassword(password)
Exige mayúscula, minúscula, número, carácter especial y mínimo 8 caracteres.

```javascript
validarPassword("Segura#123"); // true
validarPassword("segura123");  // false
```

### 7. diasParaCumpleaños(fechaNacimiento) — función libre
Calcula cuántos días faltan para el próximo cumpleaños de una persona a partir de su fecha de nacimiento. Se muestra en el modal de registro junto con la edad.

```javascript
diasParaCumpleaños("2000-11-05"); // ej. 42
```

### 8. saludoSegunHora() — función libre
Genera un saludo distinto según la hora actual del sistema (mañana, tarde o noche). No depende de ningún input del usuario; se muestra arriba del formulario en `index.html` y `login.html`.

```javascript
saludoSegunHora(); // "Buenas tardes" (si son las 3pm)
```

### 9. calcularSignoZodiacal(fechaNacimiento) — función libre

Calcula el signo zodiacal a partir de la fecha de nacimiento. Se muestra en el modal de registro junto con la edad y el cumpleaños.
```javascript
calcularSignoZodiacal("2000-11-05"); // "Escorpio"
```

## Integración en el proyecto

- **`index.html`**: formulario de registro que usa `validarCorreo`, `soloLetras` y `validarLongitud`, un modal que muestra la edad calculada con `calcularEdad` / `esMayorDeEdad` y los días para el próximo cumpleaños con `diasParaCumpleaños`, y un saludo dinámico arriba del formulario con `saludoSegunHora`.
- **`login.html`**: formulario de inicio de sesión que usa `validarCorreo` y `validarPassword`, también con el saludo dinámico de `saludoSegunHora`.

# Capturas de pantalla

## Consola: funciones obligatorias
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/7c2454dc-887e-40a6-8019-085158c2035f" />

## Consola: funciones propias
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/257e9412-fddf-4941-a218-10d903645f5e" />

## Formulario de registro, login y modal
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/88ed47f1-9d82-4f6a-9d86-883ddc7eefdf" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/2bcc45be-b550-4fce-81e2-c265d8cb3349" />

## Video 




