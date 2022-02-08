document.getElementById("nuevaPalabra").addEventListener("input", (e) => {
    let value = e.target.value;
    e.target.value = value.replace(/[^A-Z&Ñ]/g, "");
});

var botonAgregar =  document.querySelector('#nueva-palabra');

botonAgregar.addEventListener("click",function(event){
    event.preventDefault();
    var formPalabra = document.querySelector("#form-palabra");
    var palabraNueva = capturarPalabra(formPalabra);
    var errores = chequearPalabra(palabraNueva);
    if(errores.length > 0) {
        exhibirMensajesErrores(errores);
        formPalabra.reset();
        return;
    }
    formPalabra.reset();

    var mensajeError = document.querySelector('#mensajes-errores');
    mensajeError.innerHTML = "";

});

function chequearPalabra(palabraNueva) {
    var errores = "";
    if ((palabraNueva.length < 5) || (palabraNueva.length > 10)){
        errores = "La palabra no fue ingresada. Debe tener entre 5 y 10 letras";
    }
    else if (palabras.includes(palabraNueva)) {
        errores = "La palabra no fue ingresada. Ya está en el juego";
    }
    else {
        palabras.push(palabraNueva);
        errores = "Palabra ingresada con exito";
    }
    return errores;
}

function capturarPalabra(form){
    //capturando la palabra
    var palabraIngresada = form.nuevaPalabra.value
    return palabraIngresada;
};

function exhibirMensajesErrores(errores) {
    var p = document.querySelector("#mensajes-errores");
    p.innerHTML = errores;
}