// capturar el evento click del boton
const btnCrearFicha = document.querySelector("#btnCrearFicha");
btnCrearFicha.addEventListener("click", crear);

//creo vector tablaUsuario donde crearemos la tabla para luego hacerle el push a JsonUsuario
const tablaUsuario = [];

//creo funcion
function crear(event) {
  event.preventDefault();

  // Obtener los valores del formulario
  const nombre = document.querySelector("#nombre");
  const apellido1 = document.querySelector("#apellido1");
  const apellido2 = document.querySelector("#apellido2");
  const dni = document.querySelector("#dni");
  const nombreCompleto = document.querySelector("#nombreCard");
  const apellidosCompleto = document.querySelector("#apellidosCard");
  const dniCompleto = document.querySelector("#cardDNI");
  const imagenURL = document.querySelector("#imagenURL");

  //coger valor de las variables
  const nombres = nombre.value;
  const apellidos1 = apellido1.value;
  const apellidos2 = apellido2.value;
  const dniFin = dni.value;
  const foto = imagenURL.value;
  //  document.querySelector("img").setAttribute("src", foto)

  // Obtener la imagen de la tarjeta
  const imagenTarjeta = document.querySelector("#cardImg", foto);

  //inyecto el valor de las variables en los span
  nombreCompleto.innerHTML = nombres + ` `;
  apellidosCompleto.innerHTML = apellidos1 + ` ` + apellidos2;
  dniCompleto.innerHTML = dniFin;

  // Actualizar la imagen de la tarjeta
  imagenTarjeta.src = foto;

  // Creamos el objeto jsonUsuario
  const JsonUsuario = {
    foto,
    nombres,
    apellidos1,
    apellidos2,
    dniFin,
  };

  //hago el push del objeto JsonUsuario a tablaUsuario
  tablaUsuario.push(JsonUsuario);

  //hago la tabla en formato html y le meto los valores del objeto
  let tabla = `
    
    `;
  tablaUsuario.forEach((element, index) => {
    tabla += `<tr><td>${index}</td><td><img src="${element.foto}"></img></td><td>${element.nombres}</td><td>${element.apellidos1} ${element.apellidos2}  </td><td>${element.dniFin}</td></tr>`;
  });

  tabla += `
      
    `;
  //inyecto los nuevos valores al tbody con el id Usuario
  document.querySelector("#Usuario").innerHTML = tabla;
}
