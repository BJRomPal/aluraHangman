var letrasUsadas = [];
var letrasErroneas = [];
var letrasCorrectas = [];
let listadoLetrasErroneas = 'Letras Equivocadas: ';
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var juegoTerminado = false;
var palabras = [];
var palabra = '';
getPalarbas();

var botonLetra =  document.querySelector('#probar-letra');

botonLetra.addEventListener("click",function(event){
    event.preventDefault();
});

document.getElementById("reiniciar-juego").style.display= "none";

document.getElementById("letra").addEventListener("input", (e) => {
    let value = e.target.value;
    e.target.value = value.replace(/[^A-Z&Ñ]/g, "");
});

var botonInicio =  document.querySelector('#iniciar-juego');
botonInicio.addEventListener("click", function(){
iniciarAhorcado();
document.getElementById("iniciar-juego").style.display= "none";

});

function iniciarAhorcado() {
    palabra = palabras[sortea(palabras.length)];
    dibujarAhorcado();
    dibujarLineas(palabra);
    juego(palabra);
};


function juego(palabra) {
    
    var botonLetra =  document.querySelector('#probar-letra');

    botonLetra.addEventListener("click",function(event){
        event.preventDefault();
        var formLetra = document.querySelector("#form-letra");
        if ((letrasCorrectas.length == palabra.length) || (letrasErroneas.length == 6)) {
            dibujarJuegoTerminado();
            if (letrasCorrectas.length == palabra.length){
                haGanado();
                formLetra.reset();
            }
            else if (letrasErroneas.length == 6) {
                haPerdido();
                formLetra.reset();
            }
        }
        else {
            var letra = capturarLetra(formLetra);
            var errores = chequeoUsoLetra(letra);
            if(errores.length > 0) {
                formLetra.reset();
                return;
                }
            if (palabra.includes(letra)) {
                buscarPosicionLetra(palabra, letra);
                formLetra.reset();
            }
            else {
                dibujarLetrasErroneas(letra);
                formLetra.reset();

            }
            if ((letrasCorrectas.length == palabra.length) || (letrasErroneas.length == 6)) {
                juegoTerminado = true;
                dibujarJuegoTerminado();
                if (letrasCorrectas.length == palabra.length){
                    haGanado();
                    document.getElementById("reiniciar-juego").style.display= "inline";
                }
                else if (letrasErroneas.length == 6) {
                    haPerdido();
                    eraEsta(palabra);
                    document.getElementById("reiniciar-juego").style.display= "inline";
                }
            };
        }

    });
 
}

function capturarLetra(form){
    //capturando la letra
    var letra = form.letra.value
    return letra;
};


function buscarPosicionLetra(palabra, letra) {
    var posicion = 361;
    for (i = 0; i < palabra.length; i++) {
        if (letra == palabra[i]) {
            dibujarLetra(letra, posicion);
            letrasCorrectas.push(letra);
            posicion += 70;
            }
        else {
            posicion += 70;
        }
    }
};

function sortea(n) {
    var numero = parseInt(Math.random() * n)
    return numero;
};

function chequeoUsoLetra(letra) {
    var errores = [];
    if (!letrasUsadas.includes(letra)) {
        letrasUsadas.push(letra);
        }
    else {
        errores.push("La letra ya fue utilizada")
    }
    return errores;
};

function getPalarbas() { 
    var xhr = new XMLHttpRequest;
    xhr.open("GET", "https://raw.githubusercontent.com/BJRomPal/aluraHangman/main/palabras.json");
    xhr.addEventListener("load", function() {
    var respuesta = xhr.responseText;
    var listaPalabras = JSON.parse(respuesta);
    listaPalabras.forEach(function(palabra) {
        palabras.push(palabra);
        });
    });
    xhr.send();
}


