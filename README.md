#  Librería de Utilería

## ¿Qué problema resuelve?
En el desarrollo web, la limpieza y seguridad de los datos ingresados por el usuario es vital. Escribir expresiones regulares y lógicas de validación (como verificar edades, correos o contraseñas fuertes) para cada formulario es repetitivo, propenso a errores y consume mucho tiempo. 

**ValidacionesJS** resuelve este problema estandarizando la validación de datos. Proporciona una suite de funciones listas para usar que filtran, calculan y formatean la información del usuario de manera segura, sin depender de frameworks externos, garantizando que solo datos limpios lleguen a tu servidor.

## Instalación

Para utilizar esta librería en tu proyecto, simplemente descarga el archivo `utileria.js` e inclúyelo en tu documento HTML utilizando la etiqueta `<script>`. Se recomienda colocarlo dentro del `<head>` o justo antes de cerrar el `<body>`.

```html
<!-- Conexión a la librería de validaciones -->
<script src="js/utileria.js"></script>
```
# Uso y Ejemplos de Código Embebido
La librería funciona de manera modular. Una vez importada, puedes llamar a sus métodos directamente desde tu lógica de JavaScript. Aquí tienes ejemplos reales de su implementación:
1. Validación estricta de Contraseñas
Verifica que el texto cumpla con los estándares modernos de seguridad (mayúscula, minúscula, número, símbolo y longitud).
```
const passwordUsuario = "Admin@1234!";

if (validarPassword(passwordUsuario)) {
    console.log("✅ La contraseña es segura y ha sido aceptada.");
} else {
    console.error("❌ Contraseña débil. Falta longitud o caracteres especiales.");
}
```
2. Privacidad: Enmascaramiento de Correos (Función Libre)
Ideal para confirmar envíos de códigos de recuperación sin revelar la información completa del cliente.
```
const correoOriginal = "jonathanrene@empresa.com";
const correoSeguro = enmascararCorreo(correoOriginal);

// Salida esperada en consola: "j***e@empresa.com"
console.log(`Se ha enviado un código de acceso a: ${correoSeguro}`);
```
3. Cálculo exacto de Edad
Convierte una fecha de nacimiento estática en la edad real actual, ajustando automáticamente los años bisiestos y los meses.
```
const fechaIngresada = "2004-08-24";
const edad = calcularEdad(fechaIngresada);

if (esMayorDeEdad(fechaIngresada)) {
    console.log(`Tienes ${edad} años. Acceso permitido al sistema.`);
}
```
4. Formateo visual de Teléfonos (Función Libre)
Toma una cadena de texto plana y la transforma en un formato telefónico profesional.
```
const inputTelefono = "9511234567";
const telefonoBonito = formatearTelefono(inputTelefono);

// Convierte "9511234567" a "(951) 123-4567"
document.getElementById('displayTelefono').textContent = telefonoBonito;
```
--
## Capturas de Pantalla
1. Formulario bloqueando una contraseña insegura:

2. Ventana Modal (SweetAlert2) calculando la edad con éxito:

3. Consola mostrando el enmascaramiento del correo:

## Demo Promocional
