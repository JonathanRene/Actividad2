/**
 * LIBRERÍA DE VALIDACIONES
 */

/**
 * 1. Valida el formato de un correo electrónico.
 * @param {string} correo - Correo a evaluar.
 * @returns {boolean} true si el formato es correcto, false si no lo es.
 */
const validarCorreo = (correo) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(correo);
};

/**
 * 2. Valida que el texto contenga solo letras (incluye ñ).
 * @param {string} texto - Cadena a evaluar.
 * @returns {boolean} true si solo contiene letras permitidas.
 */
const soloLetras = (texto) => {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto) && texto.trim().length > 0;
};

/**
 * 3. Valida la longitud exacta de un número (útil para teléfonos).
 * @param {string|number} numero - Valor numérico a evaluar.
 * @param {number} maxLongitud - Longitud exacta requerida.
 * @returns {boolean} true si es un número válido de la longitud indicada.
 */
const validarLongitud = (numero, maxLongitud) => {
    const valor = String(numero).trim();
    const regex = /^\d+$/; 
    return regex.test(valor) && valor.length === maxLongitud;
};

/**
 * 4. Calcula la edad a partir de una fecha de nacimiento.
 * @param {string} fechaNacimiento - Fecha en formato.
 * @returns {number} Edad en años (entero).
 */
const calcularEdad = (fechaNacimiento) => {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    
    // Ajuste si aún no cumple años en el año en curso
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
};

/**
 * 5. Valida si una persona es mayor de edad (18 años o más).
 * @param {string} fechaNacimiento - Fecha en formato YYYY-MM-DD.
 * @returns {boolean} true si es mayor o igual a 18 años, false si no.
 */
const esMayorDeEdad = (fechaNacimiento) => {
    return calcularEdad(fechaNacimiento) >= 18;
};

/**
 * 6. Valida la seguridad de una contraseña.
 * Requiere: mayúscula, minúscula, número, carácter especial y mínimo 8 caracteres.
 * @param {string} password - Contraseña a evaluar.
 * @returns {boolean} true si cumple con los requisitos de seguridad.
 */
const validarPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!\%*?&.]{8,}$/;
    return regex.test(password);
};

/**
 * FUNCIÓN LIBRE 1: Formatea un número de 10 dígitos.
 * @param {string|number} numero - Número telefónico (ej. 9511234567).
 * @returns {string} El número formateado como (XXX) XXX-XXXX.
 */
const formatearTelefono = (numero) => {
    const valor = String(numero).trim();
    if (valor.length === 10 && /^\d+$/.test(valor)) {
        return `(${valor.substring(0,3)}) ${valor.substring(3,6)}-${valor.substring(6,10)}`;
    }
    return valor;
};

/**
 * FUNCIÓN LIBRE 2: Oculta partes de un correo electrónico por privacidad.
 * @param {string} correo - Correo electrónico a enmascarar.
 * @returns {string}
 */
const enmascararCorreo = (correo) => {
    if (!validarCorreo(correo)) return correo; 
    const partes = correo.split('@');
    const nombre = partes[0];
    const dominio = partes[1];
    
    if (nombre.length <= 2) return `${nombre[0]}***@${dominio}`;
    return `${nombre[0]}***${nombre[nombre.length - 1]}@${dominio}`;
};