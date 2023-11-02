console.log('hola')

    // capturar el evento click del boton
    const btnCrearFicha = document.querySelector('#btnCrearFicha');
    btnCrearFicha.addEventListener('click', crear) 
    //creo funcion
    function crear (event){   
    event.preventDefault()
        // Obtener los valores del formulario
      const nombre = document.querySelector('#nombre')
      const apellido1 = document.querySelector('#apellido1')
      const apellido2 = document.querySelector('#apellido2')
      const dni = document.querySelector('#dni')
      const nombreCompleto = document.querySelector('#nombreCard')
      const apellidosCompleto = document.querySelector('#apellidosCard')
      const dniCompleto = document.querySelector('#cardDNI')
      const imagenURL = document.querySelector('#imagenURL')
    //coger valor de las variables 

        const nombres = nombre.value
        const apellidos1 = apellido1.value
        const apellidos2 = apellido2.value
        const dniFin = dni.value
        const foto = imagenURL.value
        const imagenTarjeta = document.querySelector("#cardImg", foto)
        
      //inyecto variables en los span

      nombreCompleto.innerHTML=nombres + ` `
      apellidosCompleto.innerHTML = apellidos1 + ` ` + apellidos2
      dniCompleto.innerHTML = dniFin
      imagenTarjeta.src = foto;
      

    
  

    };
  