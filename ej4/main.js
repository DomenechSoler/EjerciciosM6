// Defino una función que genera un número aleatorio entre min y max (ambos incluidos)
function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Espero a que se cargue el contenido de la página
document.addEventListener('DOMContentLoaded', () => {
  // Obtengo los elementos del botón y el div para mostrar el número aleatorio
  const btnEnviar = document.querySelector('#btnEnviar');
  const numeroAleatorioDiv = document.querySelector('#numeroAleatorio');

  // Añado un evento de click al botón
  btnEnviar.addEventListener('click', () => {
    // Obtengo los valores de los números ingresados por el usuario
    const num1 = parseInt(document.querySelector('#num1').value);
    const num2 = parseInt(document.querySelector('#num2').value);

    // Verifico si los valores son números válidos
    if (!isNaN(num1) && !isNaN(num2)) {
      // Genero un número aleatorio entre num1 y num2
      const numeroAleatorio = generarNumeroAleatorio(num1, num2);
      // Muestro el número aleatorio en el div
      numeroAleatorioDiv.innerHTML = `Número aleatorio: ${numeroAleatorio}`;
    } else {
      // Si no son números válidos, muestro un mensaje de error
      numeroAleatorioDiv.innerHTML = 'Por favor, introduce números válidos.';
    }
  });

  
// Ejercicio 4 - Generador de contraseñas


 // Obtengo elementos relacionados con el ejercicio de contraseñas
const btnContra = document.querySelector('#btnContra');
const passElement = document.querySelector('#pass');

// Añado evento para generar una contraseña aleatoria
btnContra.addEventListener('click', () => {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let contraseña = '';

  // Genero una contraseña aleatoria de 10 caracteres
  for (let i = 0; i < 10; i++) {
    const randomContra = Math.floor(Math.random() * caracteres.length);
    contraseña += caracteres[randomContra];
  }

  // Muestro la contraseña generada
  passElement.value = contraseña;  
});
// Ejercicio 4 - Generador de emoticonos

// Obtengo elementos relacionados con el ejercicio de emoticonos
const btnEmoticono = document.querySelector('#btnEmoticono');
const emoticonoDiv = document.querySelector('#emoticono');

// Array de emoticonos
const emoticonos = ['😄', '😀', '🤣', '😎', '😍', '😂', '😇', '🤩', '😋'];

// Añado evento para mostrar un emoticono aleatorio
btnEmoticono.addEventListener('click', () => {
  // Genero un índice aleatorio dentro del rango del array de emoticonos
  const indiceAleatorio = Math.floor(Math.random() * emoticonos.length);
  // Muestro el emoticono correspondiente al índice aleatorio
  emoticonoDiv.innerHTML = emoticonos[indiceAleatorio];
});
// Ejercicio 3 - Date


// Obtengo el botón para convertir el nombre y el botón para convertir la fecha
const btnConvertirNombre = document.querySelector('#btnConvertirNombre');
const btnConvertirFecha = document.querySelector('#btnConvertirFecha');

// Añado un evento al hacer clic en el botón para convertir el nombre
btnConvertirNombre.addEventListener('click', () => {
  // Obtengo el input del nombre y el elemento donde se mostrara el nombre convertido
  const nombreInput = document.querySelector('#nombreInput');
  const nombreConvertido = document.querySelector('#nombreConvertido');
  
  // Obtengo el valor del input del nombre y elimino espacios al principio y al final
  const nombre = nombreInput.value.trim();
  
  // Proceso el nombre (elimino espacios centrales y los sustituyo por guiones)
  const nombreProcesado = procesarNombre(nombre);
  
  // Muestro el nombre procesado en el elemento correspondiente en el HTML
  nombreConvertido.textContent = nombreProcesado;
});

// Añado un evento al hacer clic en el botón para convertir la fecha
btnConvertirFecha.addEventListener('click', () => {
  // Obtengo el input de la fecha y el elemento donde mostraré la fecha convertida
  const fechaInput = document.querySelector('#fechaInput');
  const fechaConvertida = document.querySelector('#fechaConvertida');
  
  // Obtengo el valor del input de la fecha
  const fecha = fechaInput.value;
  
  // Formateo la fecha al formato dd-mm-aaaa
  const fechaFormateada = formatearFecha(fecha);
  
  // Muestro la fecha formateada en el elemento correspondiente en el HTML
  fechaConvertida.textContent = fechaFormateada;
});

// Función para formatear la fecha al formato dd-mm-aaaa
function formatearFecha(fecha) {
  const partes = fecha.split('/');
  if (partes.length === 3) {
    const [dia, mes, anio] = partes;
    return `${dia}-${mes}-${anio}`;
  }
  return 'Formato de fecha inválido';
}

// Función para procesar el nombre
function procesarNombre(nombre) {
  // Elimino espacios al principio y al final del nombre
  let nombreProcesado = nombre.trim();
  
  // Sustituyo espacios centrales por guiones
  nombreProcesado = nombreProcesado.replace(/\s+/g, '-');
  
  return nombreProcesado;
}

// ejercicio 2

// Obtengo los elementos del botón para cambiar a minúsculas y mayúsculas, el área de texto y el contador de palabras.
const mayusculas = document.querySelector("#btnMayusculas");
const minusculas = document.querySelector("#btnMinusculas");
const texto = document.querySelector("#texto");
const palabras = document.querySelector("#palabrasCount");

// Agrego eventos de clic a los botones de minúsculas y mayúsculas.
// Cuando se hace clic en ellos, se llamarán a las funciones correspondientes.
minusculas.addEventListener('click', hacerMinuscula);
mayusculas.addEventListener('click', hacerMayuscula);

// Defino la función 'hacerMinuscula' que se ejecutará cuando se hace clic en el botón de minúsculas.
function hacerMinuscula() {
  // Obtengo el contenido del área de texto.
  const textoOriginal = texto.value;

  // Convierto el texto a minúsculas y lo guardo en 'textoEnMinusculas'.
  const textoEnMinusculas = textoOriginal.toLowerCase();

  // Actualizo el contenido del área de texto con el texto en minúsculas.
  texto.value = textoEnMinusculas;

  // Llamo a la función 'contarPalabras' para actualizar el contador de palabras.
  contarPalabras();
}

// Defino la función 'hacerMayuscula' que se ejecutará cuando se hace clic en el botón de mayúsculas.
function hacerMayuscula() {
  // Obtengo el contenido del área de texto.
  const textoOriginal = texto.value;

  // Convierto el texto a mayúsculas y lo guardo en 'textoEnMayusculas'.
  const textoEnMayusculas = textoOriginal.toUpperCase();

  // Actualizo el contenido del área de texto con el texto en mayúsculas.
  texto.value = textoEnMayusculas;

  // Llamo a la función 'contarPalabras' para actualizar el contador de palabras.
  contarPalabras();
}

// Defino la función 'contarPalabras' que cuenta las palabras en el texto.
function contarPalabras() {
  // Obtengo el contenido del área de texto.
  const textoValue = texto.value;

  // Divido el texto en palabras utilizando espacios en blanco como separadores y guardo el resultado en 'contarPalabras'.
  const contarPalabras = textoValue.split(" ");

  // Actualizo el contenido del contador de palabras con la cantidad de palabras.
  palabras.innerHTML = contarPalabras.length;
}

// Obtengo los elementos relacionados con la búsqueda de palabras y la visualización de coincidencias.
const buscar = document.querySelector("#palabraBuscadaInput");
const relleno = document.querySelector("#resultadoBusqueda");
const boton2 = document.querySelector("#btnBuscar");
const coincidencias = document.querySelector("#coincidenciasCount");

// Agrego un evento de clic al botón de búsqueda.
boton2.addEventListener('click', comparar);

// Defino la función 'comparar' que se ejecuta cuando se hace clic en el botón de búsqueda.
function comparar() {
  // Obtengo el texto escrito en el área de texto.
  textoEscrito = texto.value;

  // Obtengo la palabra a buscar desde el campo de entrada.
  const buscarTexto = buscar.value;

  // Reemplazo todas las apariciones de la palabra buscada con un span resaltado.
  const nuevoTexto = textoEscrito.replace(new RegExp(buscarTexto, 'g'), `<span class="bg-primary text-light">${buscarTexto}</span>`);

  // Actualizo el contenido del elemento donde se muestra el resultado de la búsqueda.
  relleno.innerHTML = nuevoTexto;

  // Obtengo todos los elementos 'span' dentro del resultado de la búsqueda.
  const spans = relleno.querySelectorAll('span');

  // Cuento la cantidad de coincidencias y actualizo el contador de coincidencias.
  const count = spans.length;
  coincidencias.innerHTML = count;
}

// Obtengo el elemento relacionado con el resumen.
const resumen = document.querySelector('#resumen');

// Agrego un evento de clic al botón para generar el resumen.
boton2.addEventListener('click', resumen2);

// Defino la función 'resumen2' que se ejecuta cuando se hace clic en el botón de resumen.
function resumen2(event) {
  // Copio el contenido del área de texto al elemento de resumen.
  document.querySelector("#resumen").innerHTML = texto.value;
  let resumen2 = document.querySelector("#resumen").innerHTML;

  // Verifico si el texto tiene menos de 11 palabras.
  if (resumen2.split(" ").length < 11) {
    resumen2 = document.querySelector("#resumen").innerHTML;
  } else {
    // Si tiene más de 10 palabras, genero un nuevo resumen con las primeras 10 palabras.
    let array = resumen2.split(" ");
    let resumenNuevo = '';

    for (let i = 0; i < 10; i++) {
      resumenNuevo += `${array[i]} `;
    }

    // Actualizo el contenido del elemento de resumen con el nuevo resumen generado.
    document.querySelector("#resumen").innerHTML = resumenNuevo;
  }
}

});